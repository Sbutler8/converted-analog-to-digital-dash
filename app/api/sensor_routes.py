from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required
from app.helpers import *
# from app.config import Config
from werkzeug.utils import secure_filename

sensor_routes = Blueprint('sensor', __name__)
