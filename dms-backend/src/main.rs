use axum::{
    routing::{get, post},
    http::StatusCode,
    response::IntoResponse,
    Json, Router
};

use std::net::SocketAddr;
use axum::extract::Path;
use serde::{Serialize, Deserialize};
use serde_json::json;

#[tokio::main]
async fn main() {
    tracing_subscriber::fmt::init();
    let app = Router::new()
        .route("/", get(root))
        .route("/hello/:name", get(json_hello));

    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    tracing::info!("listening on {}", addr);
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}

async fn root() -> &'static str {
    "Hello World!"
}

async fn json_hello(Path(name): Path<String>) -> impl IntoResponse {
    let hello = String::from("Hello ");
    let greeting = name.as_str();

    (StatusCode::OK, Json(json!({"message": hello + greeting })))

}
