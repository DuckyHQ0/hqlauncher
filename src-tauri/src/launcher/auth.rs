// File for authenticating the user with Microsoft

use msal::{Client, ClientBuilder, TokenRequest};

pub fn authenticate() {
    println!("Temporary function for auth.rs")
}

#[tauri::command]
pub async fn open_auth_window(handle: tauri::AppHandle) {
 let _auth_window = tauri::WindowBuilder::new(
    &handle,
    "auth",
    tauri::WindowUrl::External("https://tauri.app/".parse().unwrap())
 ).build().unwrap();
}

fn create_msal_client() -> Client {
    let client_id = "542a1094-8e07-4018-b832-3fbb8f2b5270";
    let client_secret = "secret";
    let scopes = vec!["openid", "profile", "email"];

    ClientBuilder::new(client_id, client_secret)
        .add_scopes(scopes)
        .build()
        .unwrap()
}

fn generate_auth_url(client: &Client) -> String {
    let auth_url = client.authorize_url("https://hql.duckyhq.com/auth-success");
    println!("Open this in your browser to authenticate: " + auth_url.to_string())
}

async fn exchange_code_for_tokens(client: &Client, code: &str) -> Result<TokenResponse, msal::Error> {
    let token_request = TokenRequest::new(code, "https://hql.duckyhq.com/auth-success");
    client.exchange_code(token_request).await
}