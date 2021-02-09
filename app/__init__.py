import os
from flask import Flask, render_template, request, session, redirect
from flask_cors import CORS
from flask_migrate import Migrate
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_login import LoginManager
from .models import db, User
from .api.user_routes import user_routes
from .api.auth_routes import auth_routes
from .api.car_routes import car_routes
from .seeds import seed_commands
from .config import Config
from flask_socketio import SocketIO, emit, disconnect
import time
from .pyduino import *
from .readData import readData

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

# readData()

# Setup login manager
login = LoginManager(app)
login.login_view = 'auth.unauthorized'


@login.user_loader
def load_user(id):
    return User.query.get(int(id))


# Tell flask about our seed commands
app.cli.add_command(seed_commands)

app.config.from_object(Config)

app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(auth_routes, url_prefix='/api/auth')
app.register_blueprint(car_routes, url_prefix='/api/cars')

db.init_app(app)
Migrate(app, db)

# Setup socketIO

# Application Security
CORS(app)

# Since we are deploying with Docker and Flask,
# we won't be using a buildpack when we deploy to Heroku.
# Therefore, we need to make sure that in production any
# request made over http is redirected to https.
# Well.........




@app.before_request
def https_redirect():
    if os.environ.get('FLASK_ENV') == 'production':
        if request.headers.get('X-Forwarded-Proto') == 'http':
            url = request.url.replace('http://', 'https://', 1)
            code = 301
            return redirect(url, code=code)


@app.after_request
def inject_csrf_token(response):
    response.set_cookie('csrf_token',
                        generate_csrf(),
                        secure=True if os.environ.get(
                            'FLASK_ENV') == 'production' else False,
                        samesite='Strict' if os.environ.get(
                            'FLASK_ENV') == 'production' else None,
                        httponly=True)
    return response


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    print("path", path)
    if path == 'favicon.ico':
        return app.send_static_file('favicon.ico')
    return app.send_static_file('index.html')


# @socketio.on('connect')
# def connected():
#     print('Connected')
#     time.sleep(2)
#     emit('connected')
#     # readData(Arduino(serial_port='COM4'))

# # a = Arduino()
# # # PIN = 12
# # POTENTIOMETER = 'A0'
# # a.set_pin_mode(PIN, 'O')
# # a.set_pin_mode(POTENTIOMETER, 'O')

# a = Arduino()
# a.set_pin_mode('A0', 'O')
# @socketio.on('get_speed')
# def get_speed():
#     print('Backend Here')
#     # data = readData(Arduino())
#     a.conn.flushOutput()
#     while True:
#         data = a.analog_read('A0')
#         # data = a.analog_read(POTENTIOMETER)
#         emit('getting_speed', data)
#         time.sleep(0.5)


# # @socketio.on('message')
# # def handleMessage(msg):
# #     print(msg)
# #     send(msg, broadcast=True)
# #     return None

# @socketio.on('client-disconnecting')
# def test_disconnect():
#     print('Client disconnected')
#     # socketio.disconnect()
