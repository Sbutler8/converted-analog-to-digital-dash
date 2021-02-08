from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models.user import Car, db
from app.helpers import *
from werkzeug.utils import secure_filename


user_routes = Blueprint('cars', __name__)


@user_routes.route('/<int:id>')
def cars(id):
    cars = Car.query.all()
    return {"cars": [car.to_dict() for car in cars]}
