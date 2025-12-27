from flask import Flask, jsonify
from flask_cors import CORS
from routes import api_blueprint

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Register Blueprints
app.register_blueprint(api_blueprint, url_prefix='/api')

@app.route('/')
def home():
    return jsonify({"status": "KAVACH System Online", "version": "1.0.0"})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
