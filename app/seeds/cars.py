from werkzeug.security import generate_password_hash
from app.models import db, User
from app.models.user import Car


def seed_cars():

    car1 = Car(userId=1, name='The No Namer', year='1988', make='Mazda',  model='626', vin="1G1ZA5E03CF366796", pic='https://s1.cdn.autoevolution.com/images/gallery/MAZDA-626--Mk-3--Sedan-923_6.jpg')
    car2 = Car(userId=2, name='Mudflaps', year='1992', make='Jeep',  model='Wrangler', vin="1GDL7H1J5LJ610890", pic='https://m.media-amazon.com/images/I/41Ybkc0hfkL.jpg')
    car3 = Car(userId=3, name='demo', year='2020', make='Honda',  model='Accord', vin="1B7HL38X62S558312", pic='https://cdn.hipwallpaper.com/i/22/80/pEPqZt.jpeg')
    car4 = Car(userId=4, name='Lola', year='2012', make='Honda',  model='Accord', vin="1FAFP48Y83F384415", pic='https://www.motortrend.com/uploads/sites/10/2015/11/2012-honda-accord-sedan-lx-auto-sedan-angular-front.png?fit=around%7C875:492.1875')
    car5 = Car(userId=5, name='lightning', year='1962', make='Chevrolet',  model='Corvette', vin="4F2YZ96155KM22628", pic='https://www.corvsport.com/wp-content/uploads/2017/01/chevrolet_cars_1962_chevrolet_corvette_corvette-11154.jpg')
    car6 = Car(userId=6, name='Blaze', year='1995', make='Buick',  model='Roadmaster', vin="1C4RJEBG3EC152050", pic='https://m.media-amazon.com/images/I/31CatiQOWML.jpg')
    car7 = Car(userId=7, name='Apex', year='2005', make='BMW',  model='m3', vin="5GAKVCKD8EJ335750", pic='https://s.aolcdn.com/commerce/autodata/images/CAB50BMC111A0101.jpg')
    car8 = Car(userId=8, name='Vulture', year='1964', make='Honda',  model='S600', vin="4M2CN9HG5AKJ28836", pic='https://www.gannett-cdn.com/presto/2020/12/03/USAT/4658daad-7a23-45e4-8b36-fb6b7d82cd96-Honda_S600.jpg?width=825&height=550&format=pjpg&auto=webp')
    car9 = Car(userId=9, name='Crusader', year='1948', make='Jaguar',  model='XK120', vin="2G1FT1EW1B9176416", pic='https://www.gannett-cdn.com/presto/2020/12/03/USAT/a7aeaf6d-3d18-45f1-bee3-40fe20cfe742-Jaguar_XK120.jpg?width=825&height=550&format=pjpg&auto=webp')
    car10 = Car(userId=1, name='Stardust', year='1966', make='Lamborghini',  model='Miura', vin="1C4RJFAG1CC127703", pic='https://hips.hearstapps.com/toc.h-cdn.co/assets/16/14/3200x2136/1971-lamborghini-miura-sv_1.jpg?resize=980:*')
    car11 = Car(userId=1, name='Dynamo', year='1974', make='Porsche',  model='911', vin="", pic='https://hips.hearstapps.com/toc.h-cdn.co/assets/16/14/1024x577/1967-porsche-911-r_1.jpg?resize=980:*')
    car12 = Car(userId=1, name='Warrior', year='2005', make='Mercedes',  model='SL 300 Gullwing', vin="5J8TB18597A000193", pic='https://hips.hearstapps.com/toc.h-cdn.co/assets/16/14/3200x1655/1954-mercedes-300sl-gullwing-a_1.jpg?resize=980:*')
    car13 = Car(userId=1, name='Bliss', year='1970', make='Datsun',  model='240Z', vin="4F2CZ96184KM22406", pic='https://hips.hearstapps.com/toc.h-cdn.co/assets/16/18/2560x1706/1972-datsun-240z.jpg?resize=980:*')
    car14 = Car(userId=2, name='Dynamo', year='1974', make='Porsche',  model='911', vin="", pic='https://hips.hearstapps.com/toc.h-cdn.co/assets/16/14/1024x577/1967-porsche-911-r_1.jpg?resize=980:*')
    car15 = Car(userId=2, name='Warrior', year='2005', make='Mercedes',  model='SL 300 Gullwing', vin="5J8TB18597A000193", pic='https://hips.hearstapps.com/toc.h-cdn.co/assets/16/14/3200x1655/1954-mercedes-300sl-gullwing-a_1.jpg?resize=980:*')
    car16 = Car(userId=3, name='Bliss', year='1970', make='Datsun',  model='240Z', vin="4F2CZ96184KM22406", pic='https://hips.hearstapps.com/toc.h-cdn.co/assets/16/18/2560x1706/1972-datsun-240z.jpg?resize=980:*')

    db.session.add_all([
        car1,
        car2,
        car3,
        car4,
        car5,
        car6,
        car7,
        car8,
        car9,
        car10,
        car11,
        car12,
        car13,
        car14,
        car15,
        car16,
        ])

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_cars():
    db.session.execute('TRUNCATE cars CASCADE;')
    db.session.commit()
