from flask import Flask, render_template
app = Flask(__name__)
def create_app():
    return app
@app.route('/')
def index():
    return render_template('index.html')
