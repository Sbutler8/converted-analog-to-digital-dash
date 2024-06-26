"""empty message

Revision ID: 7cea50130235
Revises: b2c93e97d960
Create Date: 2024-05-27 13:32:57.835208

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7cea50130235'
down_revision = 'b2c93e97d960'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=100), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('gps_permission', sa.BOOLEAN(), nullable=True),
    sa.Column('pic', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('name')
    )
    op.create_table('cars',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=True),
    sa.Column('year', sa.Integer(), nullable=False),
    sa.Column('make', sa.String(), nullable=False),
    sa.Column('model', sa.String(), nullable=False),
    sa.Column('vin', sa.String(), nullable=True),
    sa.Column('pic', sa.String(), nullable=True),
    sa.Column('userId', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('map_bookmarks',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('lat', sa.Float(), nullable=False),
    sa.Column('lon', sa.Float(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('lat'),
    sa.UniqueConstraint('lon')
    )
    op.create_table('OBDs',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('code', sa.String(), nullable=False),
    sa.Column('urgency', sa.Integer(), nullable=True),
    sa.Column('urgency_desc', sa.Text(), nullable=True),
    sa.Column('effect_on_vehicle', sa.Text(), nullable=True),
    sa.Column('responsible_system', sa.Text(), nullable=True),
    sa.Column('layman_definition', sa.Text(), nullable=True),
    sa.Column('tech_definition', sa.Text(), nullable=True),
    sa.Column('carId', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['carId'], ['cars.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('code'),
    sa.UniqueConstraint('responsible_system')
    )
    op.create_table('users_cars',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('car_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['car_id'], ['cars.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('user_id', 'car_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('users_cars')
    op.drop_table('OBDs')
    op.drop_table('map_bookmarks')
    op.drop_table('cars')
    op.drop_table('users')
    # ### end Alembic commands ###
