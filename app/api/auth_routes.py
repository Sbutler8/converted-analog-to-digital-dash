from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required
from app.helpers import *
# from app.config import Config
from werkzeug.utils import secure_filename

auth_routes = Blueprint('auth', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


@auth_routes.route('/')
def authenticate():
    """
    Authenticates a user.
    """
    if current_user.is_authenticated:
        # return {'user': current_user.to_json()}
        print('CURRENT USER------->', current_user.to_dict())
        return current_user.to_dict()
    return {'errors': ['Unauthorized']}, 401


@auth_routes.route('/login', methods=['POST'])
def login():
    """
    Logs a user in
    """
    form = LoginForm()
    print(request.get_json())
    # Get the csrf_token from the request cookie and put it into the
    # form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # Add the user to the session, we are logged in!
        user = User.query.filter(User.email == form.data['email']).first()
        login_user(user)
        print('CURRENT USER------->', user.to_dict())
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/logout')
def logout():
    """
    Logs a user out
    """
    logout_user()
    return {'message': 'User logged out'}


@auth_routes.route('/signup', methods=['POST'])
def sign_up():
    """
    Creates a new user and logs them in
    """

    form = request.get_json(force=True)
    # form['csrf_token'].data = request.cookies['csrf_token']
    # if form.validate_on_submit():
    user = User(
        # profile_pic=form.data['profile_pic'],
        name=form['name'],
        # hometown=form.data['hometown'],
        email=form['email'],
        password=form['password'],
        gps_permission=form['gpsPermission'],
        pic=form['profPic']
        )
    db.session.add(user)
    db.session.commit()
    login_user(user)
    return user.to_dict()


@auth_routes.route('/test', methods=['POST'])
def upload_file():
    # print('FILES-------->', request.files[0])

    if "image" not in request.files:
        print("No image key in request.files")
        return {'errors': 'no user file'}, 401

    file = request.files["image"]

    if file.filename == "":
        print("Please select a file")
        return {'errors': 'no filename'}, 401

    # if file and allowed_file(file.filename):
    file.filename = secure_filename(file.filename)
    output = upload_file_to_s3(file)
    # Add and commit to database
    return {'output': str(output)}


@auth_routes.route('/unauthorized')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {'errors': ['Unauthorized']}, 401
