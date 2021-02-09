from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models.user import users_cars, User, Car, db
from app.helpers import *
from werkzeug.utils import secure_filename


car_routes = Blueprint('cars', __name__)


@car_routes.route('/<int:id>')
def cars(id):
    cars = Car.query.join(users_cars).join(User).filter(User.id == id).all()
    return {"cars": [car.to_dict() for car in cars]}
