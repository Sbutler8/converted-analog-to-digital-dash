from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(100), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    gps_permission = db.Column(db.BOOLEAN, nullable=True)
    pic = db.Column(db.String, nullable=True)

    user = db.relationship("MapBookmark", back_populates="bookmarks")
    cars = db.relationship("Car", secondary="users_cars", back_populates="users")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
          "id": self.id,
          "username": self.username,
          "email": self.email,
        }


class Car(db.Model):
    __tablename__ = 'cars'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=True, unique=True)
    year = db.Column(db.Integer, nullable=False)
    make = db.Column(db.BOOLEAN, nullable=False)
    model = db.Column(db.String, nullable=False)
    vin = db.Column(db.String, nullable=True, unique=True)
    pic = db.Column(db.String, nullable=True, unique=True)
    userId = db.Column(db.String, nullable=True)

    car = db.relationship("OBD", back_populates="codes")
    users = db.relationship("User", secondary="users_cars", back_populates="cars")

    def to_dict(self):
        return {
          "id": self.id,
          "name": self.name,
          "year": self.year,
          "make": self.make,
          "model": self.model,
          "vin": self.vin,
        }


class Link(db.Model):
    __tablename__ = 'users_cars'

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), primary_key=True)
    car_id = db.Column(db.Integer, db.ForeignKey('cars.id'), primary_key=True)


class MapBookmark(db.Model):
    __tablename__ = 'map_bookmarks'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False, unique=True)
    lat = db.Column(db.Float, nullable=False, unique=True)
    lon = db.Column(db.Float, nullable=False, unique=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    bookmarks = db.relationship("User", back_populates="user")

    def to_dict(self):
        return {
          "id": self.id,
          "name": self.name,
          "lat": self.lat,
          "lon": self.lon,
        }


class OBD(db.Model):
    __tablename__ = 'OBDs'

    id = db.Column(db.Integer, primary_key=True)
    code = db.Column(db.String, nullable=False, unique=True)
    urgency = db.Column(db.Integer, nullable=True)
    urgency_desc = db.Column(db.Text, nullable=True)
    effect_on_vehicle = db.Column(db.Text, nullable=True)
    responsible_system = db.Column(db.Text, nullable=True, unique=True)
    layman_definition = db.Column(db.Text, nullable=True)
    tech_definition = db.Column(db.Text, nullable=True)
    carId = db.Column(db.Integer, db.ForeignKey("cars.id"), nullable=False)

    codes = db.relationship("Car", back_populates="car")

    def to_dict(self):
        return {
          "id": self.id,
          "code": self.code,
          "urgency": self.urgency,
          "urgency_desc": self.urgency_desc,
          "effect_on_vehice": self.effect_on_vehicle,
          "responsible_system": self.responsible_system,
          "layman_definition": self.layman_definition,
          "tech_definition": self.tech_definition,
        }
