import os
from flask import Flask, request, redirect
from flask_cors import CORS
from flask_migrate import Migrate
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_login import LoginManager
from .models import db, User
from .api.user_routes import user_routes
from .api.auth_routes import auth_routes
from .api.car_routes import car_routes
from .api.code_routes import code_routes
from .seeds import seed_commands
from .config import Config
from flask_socketio import SocketIO, emit, disconnect
import time
from .pyduino import *

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

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
app.register_blueprint(code_routes, url_prefix='/api/codes')

db.init_app(app)
Migrate(app, db)

# Application Security
CORS(app)

# Since deploying with Docker and Flask,
# I won't be using a buildpack when we deploy to Heroku.
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

@socketio.on('connect')
def connected():
    print('Connected')
    time.sleep(2)
    emit('connected')

a = Arduino()
a.set_pin_mode('A0', 'O')  # speed
a.set_pin_mode('D8', 'O')  
a.set_pin_mode('D9', 'O')  # engine
a.set_pin_mode('D10', 'O') # gas
a.set_pin_mode('D11', 'O') # battery
a.set_pin_mode('D13', 'O') # lights
@socketio.on('get_speed')  # oil
def get_speed():
    while True:
        a.conn.flushOutput()
        speed = a.analog_read('A0')
        engine = a.digital_read('D8')
        oil = a.digital_read('D9')
        gas = a.digital_read('D10')
        battery = a.digital_read('D13')
        lights = a.digital_read('D11')

        print(speed, engine, oil, gas, battery, lights)
        emit('getting_speed', {'speed':speed, 'engine':engine, 'oil':oil, 'gas':gas, 'battery':battery, 'lights':lights}, broadcast=True)
        time.sleep(0.5)

@socketio.on('client-disconnecting')
def test_disconnect():
    print('Client disconnected')
    socketio.disconnect()
