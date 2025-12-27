from flask import Blueprint, jsonify
from mock_data import generate_kpis, generate_threats, generate_analytics, generate_interceptors, generate_logs

api_blueprint = Blueprint('api', __name__)

@api_blueprint.route('/system-status')
def get_kpis():
    return jsonify(generate_kpis())

@api_blueprint.route('/threats')
def get_threats():
    return jsonify(generate_threats())

@api_blueprint.route('/analytics')
def get_analytics():
    return jsonify(generate_analytics())

@api_blueprint.route('/interceptors')
def get_interceptors():
    return jsonify(generate_interceptors())

@api_blueprint.route('/logs')
def get_logs():
    return jsonify(generate_logs())
