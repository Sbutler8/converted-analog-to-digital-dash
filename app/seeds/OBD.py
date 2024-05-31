from werkzeug.security import generate_password_hash
from app.models.models import db, OBD


def seed_OBD():

    OBD0 = OBD(
        carId=1,
        code='P0420',
        urgency='2',
        urgency_desc='Repair immediately if drivability issues are present. Threat to essential system components if not repaired as soon as possible.',
        effect_on_vehicle='This condition will prevent the vehicle from running at its optimum efficiency and fuel economy may suffer.',
        responsible_system='Sensors indicate the catalytic converter is not reducing exhaust gas emissions properly.',
        layman_definition='Catalyst System Efficiency Below Threshold (Bank 1)',
        tech_definition='Catalyst System Low Efficiency (Bank 1)',
        )


    db.session.add(OBD0)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_OBD():
    db.session.execute('TRUNCATE map_bookmarks CASCADE;')
    db.session.commit()
