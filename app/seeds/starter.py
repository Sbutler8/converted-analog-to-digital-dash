from werkzeug.security import generate_password_hash
from app.models import db, User


def seed_users():

    demo = User(name='demo', password='password',  gps_permission=True, pic='https://www.gannett-cdn.com/presto/2020/12/25/USAT/6ae9e013-9f3f-4a9a-bc90-c21f3fa9968d-BRIDGERTON_101_Unit_00193R.jpg')
    test = User(name='test', password='password', gps_permission=True, pic='https://pyxis.nymag.com/v1/imgs/952/aa8/1d3eb6f6f01e89823147e94cb7663d5605-bridgerton-review.2x.rsocial.w600.jpg')

    db.session.add(demo)
    db.session.add(test)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    db.session.execute('TRUNCATE users CASCADE;')
    db.session.commit()
