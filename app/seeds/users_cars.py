from app.models import db
from app.models.models import User, Car

def seed_users_cars():

    user1 = User.query.get(1)
    user2 = User.query.get(2)
    user3 = User.query.get(3)
    user4 = User.query.get(4)
    user5 = User.query.get(5)
    user6 = User.query.get(6)
    user7 = User.query.get(7)
    user8 = User.query.get(8)
    user9 = User.query.get(9)
    user10 = User.query.get(10)
    user11 = User.query.get(11)
    user12 = User.query.get(12)
    user13 = User.query.get(13)
    user14 = User.query.get(14)
    user15 = User.query.get(15)

    car1 = Car.query.get(1)
    car2 = Car.query.get(2)
    car3 = Car.query.get(3)
    car4 = Car.query.get(4)
    car5 = Car.query.get(5)
    car6 = Car.query.get(6)
    car7 = Car.query.get(7)
    car8 = Car.query.get(8)
    car9 = Car.query.get(9)
    car10 = Car.query.get(10)
    car11 = Car.query.get(11)
    car12 = Car.query.get(12)
    car13 = Car.query.get(13)
    car14 = Car.query.get(14)
    car15 = Car.query.get(15)

    car1.users.append(user1)
    car2.users.append(user2)
    car3.users.append(user3)
    car4.users.append(user4)
    car5.users.append(user5)
    car6.users.append(user6)
    car7.users.append(user7)
    car8.users.append(user8)
    car9.users.append(user9)
    car10.users.append(user1)
    car11.users.append(user1)
    car12.users.append(user1)
    car13.users.append(user2)
    car14.users.append(user9)
    car15.users.append(user9)


    db.session.commit()
