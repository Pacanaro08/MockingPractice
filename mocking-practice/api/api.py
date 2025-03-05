from flask import Flask
from apis.user_api import user_api

app = Flask(__name__)
app.register_blueprint(user_api, url_prefix='/api')

if __name__ == '__main__':
    app.run(debug=True)