from werkzeug.security import generate_password_hash
from app.models import db, User


def seed_cars():

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

    car0 = User(user=user0, name='The No Namer', year='1988', make='Mazda',  model='626', vin="1G1ZA5E03CF366796", pic='https://s1.cdn.autoevolution.com/images/gallery/MAZDA-626--Mk-3--Sedan-923_6.jpg')
    car1 = User(user=user1, name='Lola', year='2012', make='Honda',  model='Accord', vin="1FAFP48Y83F384415", pic='https://www.motortrend.com/uploads/sites/10/2015/11/2012-honda-accord-sedan-lx-auto-sedan-angular-front.png?fit=around%7C875:492.1875')
    car2 = User(user=user2, name='Mudflaps', year='1992', make='Jeep',  model='Wrangler', vin="1GDL7H1J5LJ610890", pic='https://m.media-amazon.com/images/I/41Ybkc0hfkL.jpg')
    car3 = User(user=user3, name='demo', year='2020', make='Honda',  model='Accord', vin="1B7HL38X62S558312", pic='https://cdn.hipwallpaper.com/i/22/80/pEPqZt.jpeg')
    car4 = User(user=user4, name='lightning', year='1962', make='Chevrolet',  model='Corvette', vin="4F2YZ96155KM22628", pic='https://www.corvsport.com/wp-content/uploads/2017/01/chevrolet_cars_1962_chevrolet_corvette_corvette-11154.jpg')
    car5 = User(user=user5, name='Apex', year='2005', make='BMW',  model='m3', vin="5GAKVCKD8EJ335750", pic='https://s.aolcdn.com/commerce/autodata/images/CAB50BMC111A0101.jpg')
    car6 = User(user=user6, name='Blaze', year='1995', make='Buick',  model='Roadmaster', vin="1C4RJEBG3EC152050", pic='https://m.media-amazon.com/images/I/31CatiQOWML.jpg')
    car7 = User(user=user7, name='Vulture', year='1964', make='Honda',  model='S600', vin="4M2CN9HG5AKJ28836", pic='https://www.gannett-cdn.com/presto/2020/12/03/USAT/4658daad-7a23-45e4-8b36-fb6b7d82cd96-Honda_S600.jpg?width=825&height=550&format=pjpg&auto=webp')
    car8 = User(user=user8, name='Crusader', year='1948', make='Jaguar',  model='XK120', vin="2G1FT1EW1B9176416", pic='https://www.gannett-cdn.com/presto/2020/12/03/USAT/a7aeaf6d-3d18-45f1-bee3-40fe20cfe742-Jaguar_XK120.jpg?width=825&height=550&format=pjpg&auto=webp')
    car9 = User(user=user9, name='Stardust', year='1966', make='Lamborghini',  model='Miura', vin="1C4RJFAG1CC127703", pic='https://hips.hearstapps.com/toc.h-cdn.co/assets/16/14/3200x2136/1971-lamborghini-miura-sv_1.jpg?resize=980:*')
    car10 = User(user=user10, name='Dynamo', year='1974', make='Porsche',  model='911', vin="", pic='https://hips.hearstapps.com/toc.h-cdn.co/assets/16/14/1024x577/1967-porsche-911-r_1.jpg?resize=980:*')
    car11 = User(user=user11, name='Warrior', year='2005', make='Mercedes',  model='SL 300 Gullwing', vin="5J8TB18597A000193", pic='https://hips.hearstapps.com/toc.h-cdn.co/assets/16/14/3200x1655/1954-mercedes-300sl-gullwing-a_1.jpg?resize=980:*')
    car12 = User(name='Bliss', year='1970', make='Datsun',  model='240Z', vin="4F2CZ96184KM22406", pic='https://hips.hearstapps.com/toc.h-cdn.co/assets/16/18/2560x1706/1972-datsun-240z.jpg?resize=980:*')


    db.session.add(car0)
    db.session.add(car1)
    db.session.add(car2)
    db.session.add(car3)
    db.session.add(car4)
    db.session.add(car5)
    db.session.add(car6)
    db.session.add(car7)
    db.session.add(car8)
    db.session.add(car9)
    db.session.add(car10)
    db.session.add(car11)
    db.session.add(car11)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_cars():
    db.session.execute('TRUNCATE cars CASCADE;')
    db.session.commit()
