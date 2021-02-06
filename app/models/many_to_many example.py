followers = db.Table(
    "followers",  # tablename
    db.Model.metadata,  # inheritance
    db.Column('leader_id', db.Integer, db.ForeignKey(
        "users.id"), primary_key=True),  # leader
    db.Column('follower_id', db.Integer, db.ForeignKey(
        "users.id"), primary_key=True),  # follower
)
class User(db.Model, UserMixin):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    first_name = db.Column(db.String(255), nullable=True, unique=False)
    last_name = db.Column(db.String(255), nullable=True, unique=False)
    hashed_password = db.Column(db.String(255), nullable=False)
    following = db.relationship(
        'User', secondary="followers",
        primaryjoin=id == followers.c.follower_id,
        secondaryjoin=id == followers.c.leader_id,
        backref="followers"
    )
