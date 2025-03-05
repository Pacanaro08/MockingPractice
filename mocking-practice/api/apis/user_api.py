from flask import Blueprint, jsonify
import random

user_api = Blueprint('user_api', __name__)

@user_api.route('/user_info', methods=['GET'])
def get_user_data():
    names = ["Pietro", "Willian", "Lucas", "Pedro", "Tainan", "Fernando"]
    ages = [18, 19, 20, 21, 22, 23, 24, 25, 26]
    favourite_colors = ["Pink", "Black", "White", "Blue", "Green"]

    name = random.choice(names)
    age = random.choice(ages)
    favourite_color = random.choice(favourite_colors)

    return jsonify({"name":name, "age":age, "color":favourite_color})