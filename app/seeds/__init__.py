from flask.cli import AppGroup
from .users import seed_users, undo_users
from .cars import seed_cars, undo_cars
from .mapBookmarks import seed_map_bookmarks, undo_map_bookmarks
from .OBD import seed_OBD, undo_OBD

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_cars()
    seed_map_bookmarks()
    seed_OBD()

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_cars()
    undo_map_bookmarks()
    undo_OBD()
