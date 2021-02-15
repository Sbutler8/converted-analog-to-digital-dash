from flask import Blueprint, jsonify, request, Response
from flask_login import login_required
from app.models.user import users_cars, User, Car, db
from app.helpers import *
from werkzeug.utils import secure_filename

code_routes = Blueprint('codes', __name__)


# @code_routes.route('/<int:carId>/http://api.carmd.com/v3.0/diag?vin=<string:vin>&mileage=<int:mileage>&dtc=<string:code>')
# def cars(carId):

#     cars = Car.query.join(users_cars).join(User).filter(User.id == userId).all()
#     return {"cars": [car.to_dict() for car in cars]}


@code_routes.route('/<int:carId>')
def cars(carId):
    form = request.get_json(force=True)
    vin = form['vin']
    mileage = form['mileage']
    code = form['code']

    code = request.get(f'http://api.carmd.com/v3.0/diag?vin={vin}&mileage={mileage}&dtc={code}')
    Response(

    )
    # cars = Car.query.join(users_cars).join(User).filter(User.id == userId).all()
    # return {"cars": [car.to_dict() for car in cars]}
