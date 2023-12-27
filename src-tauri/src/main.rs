// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod launcher {
    pub mod utils;
    pub mod launcher;
    pub mod downloader;
    pub mod auth;
}

use launcher::utils::delete_inst;
use launcher::launcher::launch_game;
use launcher::downloader::download;
use launcher::auth::authenticate;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![temp_fn])
        .run(tauri::generate_context!())
        .expect("Failed to run app.");
}

#[tauri::command]
fn temp_fn() {
    delete_inst();
    launch_game();
    download();
    authenticate();
}