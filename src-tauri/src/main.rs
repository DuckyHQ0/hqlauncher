// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use minecraft_msa_auth::MinecraftAuthorizationFlow;
use oauth2::basic::BasicClient;
use oauth2::reqwest::async_http_client;
use oauth2::{
    AuthType, AuthUrl, AuthorizationCode, ClientId, CsrfToken, PkceCodeChallenge, RedirectUrl,
    Scope, TokenUrl,
};
use reqwest::{Client, Url};
use tokio::io::{AsyncBufReadExt, AsyncWriteExt, BufReader};
use tokio::net::TcpListener;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![auth])
        .run(tauri::generate_context!())
        .expect("failed to run app");
}

#[tauri::command]
#[tokio::main]
async fn auth() {
    let _ = dotenv_vault::dotenv();
    let client_id = std::env::var("AZURE_CLIENT_ID").unwrap_or("".to_string());

    let client = BasicClient::new(
        ClientId::new(client_id),
        None,
        AuthUrl::new(
            "https://login.microsoftonline.com/consumers/oauth2/v2.0/authorize".to_string(),
        )
        .unwrap(),
        Some(
            TokenUrl::new(
                "https://login.microsoftonline.com/consumers/oauth2/v2.0/token".to_string(),
            )
            .unwrap(),
        ),
    )
    .set_auth_type(AuthType::RequestBody)
    .set_redirect_uri(
        RedirectUrl::new("http://127.0.0.1:8114/redirect".to_string())
            .expect("Invalid redirect url"),
    );

    let (pkce_code_challenge, pkce_code_verifier) = PkceCodeChallenge::new_random_sha256();

    let (authorize_url, csrf_state) = client
        .authorize_url(CsrfToken::new_random)
        .add_scope(Scope::new("XboxLive.signin offline_access".to_string()))
        .set_pkce_challenge(pkce_code_challenge)
        .url();
    println!(
        "Open this URL in your browser:\n{}",
        authorize_url.to_string()
    );

    let listener = TcpListener::bind("127.0.0.1:8114").await.unwrap();
    loop {
        let (stream, _) = listener.accept().await.unwrap();
        stream.readable().await.unwrap();
        let mut stream = BufReader::new(stream);

        let mut request_line: String = String::new();
        stream.read_line(&mut request_line).await.unwrap();

        let redirect_url = request_line.split_whitespace().nth(1).unwrap();
        let url = Url::parse(&("http://localhost".to_string() + redirect_url)).unwrap();

        let code = {
            let (_key, value) = url
                .query_pairs()
                .find(|(key, _value)| key == "code")
                .unwrap();
            AuthorizationCode::new(value.into_owned())
        };

        let state = {
            let (_key, value) = url
                .query_pairs()
                .find(|(key, _value)| key == "state")
                .unwrap();
            CsrfToken::new(value.into_owned())
        };

        let message = "Go back to your terminal";
        let response = format!(
            "HTTP/1.1 200 OK\r\ncontent-length: {}\r\n\r\n{}",
            message.len(),
            message
        );
        stream.write_all(response.as_bytes()).await;

        println!("Microsoft returned this code:\n{}", code.secret());
        println!(
            "Microsoft returned this state:\n{} (expected `{}`)\n",
            state.secret(),
            csrf_state.secret()
        );

        let token = client
            .exchange_code(code)
            // Send the PKCE code verifier in the token request
            .set_pkce_verifier(pkce_code_verifier)
            .request_async(async_http_client).await;
        println!("Microsoft token:\n{:?}\n", token);

        let mc_flow = MinecraftAuthorizationFlow::new(Client::new());
        let mc_token = mc_flow.exchange_microsoft_token(token.access_token().secret()).await;
        println!("Minecraft token: {:?}", mc_token);

        break;
    }
    Ok(());
}
