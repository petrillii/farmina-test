from flask import Flask, request, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app, supports_credentials=True)

API_BASE_URL = "https://gw-c.petgenius.info/wfservice/z1"
AUTH_USERNAME = "wsfarmina_zendesk"
AUTH_PASSWORD = "test"

@app.route("/api/products", methods=["POST"])
def proxy_products():
    try:
        payload = request.json
        response = requests.post(
            f"{API_BASE_URL}/nutritionalplans/products/list",
            json=payload,
            auth=(AUTH_USERNAME, AUTH_PASSWORD),
            headers={"Content-Type": "application/json"},
        )
        return jsonify(response.json()), response.status_code
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/api/specialcares", methods=["POST"])
def proxy_specialcares():
    try:
        payload = request.json
        response = requests.post(
            f"{API_BASE_URL}/specialcares/list",
            json=payload,
            auth=(AUTH_USERNAME, AUTH_PASSWORD),
            headers={"Content-Type": "application/json"},
        )
        return jsonify(response.json()), response.status_code
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(port=5000, debug=True)
