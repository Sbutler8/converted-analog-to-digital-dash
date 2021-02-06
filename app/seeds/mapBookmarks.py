from werkzeug.security import generate_password_hash
from app.models import db
from app.models.user import MapBookmark


def seed_map_bookmarks():

    bookmark1 = MapBookmark(userId=1, name='work', lat='39.055697181819454', lon='-82.42925258507304')
    bookmark2 = MapBookmark(userId=1, name='school', lat='42.43382700480375', lon='-85.835014255013')
    bookmark3 = MapBookmark(userId=1, name='home', lat='39.74922013859147', lon='-104.92517492648123')
    bookmark4 = MapBookmark(userId=2, name='home', lat='19.80599240429494', lon='-155.43088014990968')
    bookmark5 = MapBookmark(userId=3, name='home', lat='37.74899279400291', lon='-122.43554171663645')
    bookmark0 = MapBookmark(userId=4, name='home', lat='43.43121271222739', lon='-88.09819781632793')
    bookmark6 = MapBookmark(userId=5, name='home', lat='43.842482012144615', lon='-72.81438274251231')
    bookmark7 = MapBookmark(userId=6, name='home', lat='33.751944442222', lon='-84.32273005588398')
    bookmark8 = MapBookmark(userId=7, name='home', lat='40.7262945841531', lon='-73.91653491268546')
    bookmark9 = MapBookmark(userId=8, name='home', lat='38.79479631578268', lon='-76.92772393675997')
    bookmark10 = MapBookmark(userId=9, name='home', lat='29.958958225468066', lon='-89.98558897471764')
    bookmark11 = MapBookmark(userId=10, name='home', lat='32.88884100679876', lon='-117.23397583979809')
    bookmark12 = MapBookmark(userId=10, name='work', lat='34.04178361805693', lon='-118.24284525549164')
    bookmark13 = MapBookmark(userId=11, name='home', lat='41.84771439963454', lon='-87.69628326251039')
    bookmark14 = MapBookmark(userId=11, name='work', lat='31.23045384871158', lon='-98.04803186566569')


    db.session.add(bookmark0)
    db.session.add(bookmark1)
    db.session.add(bookmark2)
    db.session.add(bookmark3)
    db.session.add(bookmark4)
    db.session.add(bookmark5)
    db.session.add(bookmark6)
    db.session.add(bookmark7)
    db.session.add(bookmark8)
    db.session.add(bookmark9)
    db.session.add(bookmark10)
    db.session.add(bookmark11)
    db.session.add(bookmark12)
    db.session.add(bookmark13)
    db.session.add(bookmark14)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_map_bookmarks():
    db.session.execute('TRUNCATE map_bookmarks CASCADE;')
    db.session.commit()
