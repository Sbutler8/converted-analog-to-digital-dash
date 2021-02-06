from werkzeug.security import generate_password_hash
from app.models import db, User


def seed_users():

    user0 = User(name='demo', email='demo@demo.com', password='password',  gps_permission=True, pic='https://farm6.staticflickr.com/5591/14168089651_5e5d7799ed_o.png')
    user1 = User(name='James', email='test@test.com', password='password', gps_permission=True, pic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQU3KK00XrxkwiUal_tr-djEwicahVlAW-Q&usqp=CAU')
    user2 = User(name='Sarah', email='demo@demo.com', password='password',  gps_permission=True, pic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe8rcTb4fY0jzaIGGHgOXlEwNOTYBQq6Le6g&usqp=CAU')
    user3 = User(name='Aliya', email='test@test.com', password='password', gps_permission=True, pic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-m-GbsE8FdJ2LkI9mp5lfUFbRBzgm8oShkQ&usqp=CAU')
    user4 = User(name='Elizabeth', email='demo@demo.com', password='password',  gps_permission=True, pic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMzO_zIsivTHffpD3o463lljxbkZMKsNIfkw&usqp=CAU')
    user5 = User(name='Tony', email='test@test.com', password='password', gps_permission=True, pic='https://sims-online.com/wp-content/uploads/2014/07/the-sims-4-avatar-3.jpg')
    user6 = User(name='Patrick', email='demo@demo.com', password='password',  gps_permission=True, pic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTupYtNzI0pf3CYiFB6-a-unbGzUXJvkRHnvg&usqp=CAU')
    user7 = User(name='Meghan', email='test@test.com', password='password', gps_permission=True, pic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIEiTE16H8ZghMti-31fBUKlaIW5OADzdilg&usqp=CAU')
    user8 = User(name='Carley', email='test@test.com', password='password', gps_permission=True, pic='https://simsvip.com/wp-content/uploads/2020/05/EXWsa2ZUYAAM0Y2.jpg')
    user9 = User(name='Bryan', email='test@test.com', password='password', gps_permission=True, pic='https://simscommunity.info/wp-content/uploads/2020/05/IrWcr8Ne_400x400.jpg')
    user10 = User(name='Karen', email='demo@demo.com', password='password',  gps_permission=True, pic='https://i.pinimg.com/236x/41/1b/6b/411b6b71ad8db160a341182e0e068804--game-info-avatar.jpg')
    user11 = User(name='Dylan', email='test@test.com', password='password', gps_permission=True, pic='https://sims-online.com/wp-content/uploads/2014/07/the-sims-4-avatar-7.jpg')

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


def undo_users():
    db.session.execute('TRUNCATE users CASCADE;')
    db.session.commit()
