
from flask import Flask, render_template

# Khởi tạo Flask
web = Flask(__name__)

# Hàm xử lý request
@web.route("/", methods=['GET'])
def dashboard():
    return render_template('dashboard.html')

@web.route("/select")
def select():
    return render_template('select.html')

@web.route("/app")
def app():
    return render_template('app.html')

#if __name__ == '__main__':
#    web.run(host='0.0.0.0', debug=True)
