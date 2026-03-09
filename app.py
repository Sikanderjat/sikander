from flask import Flask, render_template
from flask import send_from_directory

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')
@app.route('/sitemap.xml')
def sitemap():
    return send_from_directory(app.static_folder, 'sitemap.xml')
