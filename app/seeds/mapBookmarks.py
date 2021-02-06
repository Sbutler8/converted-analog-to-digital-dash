from werkzeug.security import generate_password_hash
from app.models import db, User


def seed_map_bookmarks():

    user0 = User.query.filter(User.name == 'demo').first()
    user1 = User.query.filter(User.name == 'James').first()
    user2 = User.query.filter(User.name == 'Sarah').first()
    user3 = User.query.filter(User.name == 'Aliyah').first()
    user4 = User.query.filter(User.name == 'Elizabeth').first()
    user5 = User.query.filter(User.name == 'Tony').first()
    user6 = User.query.filter(User.name == 'Patrick').first()
    user7 = User.query.filter(User.name == 'Meghan').first()
    user8 = User.query.filter(User.name == 'Carley').first()
    user9 = User.query.filter(User.name == 'Bryan').first()
    user10 = User.query.filter(User.name == 'Karen').first()
    user11 = User.query.filter(User.name == 'Dylan').first()

    bookmark0 = User(user=user0, name='home', lat='demo@demo.com', lon='password')
    bookmark1 = User(user=user0, name='home', lat='home@home.com', lon='password')
    bookmark2 = User(user=user0, name='home', lat='home@home.com', lon='password')
    bookmark3 = User(user=user0, name='home', lat='home@home.com', lon='password')
    bookmark4 = User(user=user0, name='home', lat='home@home.com', lon='password')
    bookmark5 = User(user=user0, name='home', lat='home@home.com', lon='password')
    bookmark6 = User(user=user0, name='home', lat='home@home.com', lon='password')
    bookmark7 = User(user=user0, name='home', lat='home@home.com', lon='password')
    bookmark8 = User(user=user0, name='home', lat='home@home.com', lon='password')
    bookmark9 = User(user=user0, name='home', lat='home@home.com', lon='password')
    bookmark10 = User(user=user0, name='home', lat='home@home.com', lon='password')
    bookmark11 = User(user=user0, name='home', lat='home@home.com', lon='password')
    bookmark12 = User(user=user0, name='home', lat='home@home.com', lon='password')
    bookmark13 = User(user=user0, name='home', lat='home@home.com', lon='password')bookmark0 = User(user=user0, name='home', lat='home@home.com', lon='password')
    bookmark14 = User(user=user0, name='home', lat='home@demo.com', lon='password')



    db.session.add(user0)
    db.session.add(user1)
    db.session.add(user2)
    db.session.add(user3)
    db.session.add(user4)
    db.session.add(user5)
    db.session.add(user6)
    db.session.add(user7)
    db.session.add(user8)
    db.session.add(user9)
    db.session.add(user10)
    db.session.add(user11)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_map_bookmarks():
    db.session.execute('TRUNCATE map_bookmarks CASCADE;')
    db.session.commit()
