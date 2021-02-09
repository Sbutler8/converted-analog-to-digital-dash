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

@car_routes.route('/entry/<int:id>', methods=['POST'])
def add_car(id):
    """
    Adds car created from user to db
    """
    user = User.query.get(id)
    form = request.get_json(force=True)

    car = Car(
        name=form['name'],
        year=form['year'],
        make=form['make'],
        model=form['model'],
        vin=form['vin'],
        pic=form['pic'],
        userId=id
        )
    db.session.add(car)
    car.users.append(user) # add to join table
    db.session.commit()

    return car.to_dict()
