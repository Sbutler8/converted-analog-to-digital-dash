from werkzeug.security import generate_password_hash
from app.models import db, User


def seed_users():

    user1 = User(name='demo', email='demo@demo.com', password='password',  gps_permission=True, pic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe8rcTb4fY0jzaIGGHgOXlEwNOTYBQq6Le6g&usqp=CAU')
    user2 = User(name='Aliya', email='user3@user3.com', password='password', gps_permission=True, pic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-m-GbsE8FdJ2LkI9mp5lfUFbRBzgm8oShkQ&usqp=CAU')
    user3 = User(name='Elizabeth', email='user4@user4.com', password='password',  gps_permission=True, pic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMzO_zIsivTHffpD3o463lljxbkZMKsNIfkw&usqp=CAU')
    user4 = User(name='Tony', email='user5@user5.com', password='password', gps_permission=True, pic='https://sims-online.com/wp-content/uploads/2014/07/the-sims-4-avatar-3.jpg')
    user5 = User(name='Patrick', email='user6@user6.com', password='password',  gps_permission=True, pic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTupYtNzI0pf3CYiFB6-a-unbGzUXJvkRHnvg&usqp=CAU')
    user6 = User(name='Carley', email='user8@user8.com', password='password', gps_permission=True, pic='https://simsvip.com/wp-content/uploads/2020/05/EXWsa2ZUYAAM0Y2.jpg')
    user7 = User(name='Bryan', email='user9@user9.com', password='password', gps_permission=True, pic='https://simscommunity.info/wp-content/uploads/2020/05/IrWcr8Ne_400x400.jpg')
    user8 = User(name='Karen', email='user10@user10.com', password='password',  gps_permission=True, pic='https://i.pinimg.com/236x/41/1b/6b/411b6b71ad8db160a341182e0e068804--game-info-avatar.jpg')
    user9 = User(name='Dylan', email='user11@user11.com', password='password', gps_permission=True, pic='https://sims-online.com/wp-content/uploads/2014/07/the-sims-4-avatar-7.jpg')

    db.session.add_all([
        user1,
        user2,
        user3,
        user4,
        user5,
        user6,
        user7,
        user8,
        user9,
    ])


    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    db.session.execute('TRUNCATE users CASCADE;')
    db.session.commit()
