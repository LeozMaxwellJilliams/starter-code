from flask import Blueprint
from flask import jsonify
from flask import request
from flask import render_template
import pdb
from .db import client as db_client

blueprint = Blueprint('api', __name__)


@blueprint.route('/recycling-data')
def get_recycling_data():
    data = [row.to_dict() for row in db_client.get_all_recycling_data()]
    return jsonify(data)

@blueprint.route('/add-recycling-data', methods=['POST'])
def add_recycling_data():
    result = request.form
    return db_client.add_recycling_data(result)

@blueprint.route('/test')
def test():
    return render_template("test.html")