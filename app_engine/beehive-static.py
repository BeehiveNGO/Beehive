from flask import Flask
from flask import render_template
app = Flask(__name__)

@app.route("/")
@app.route('/index')
def show_page():
    user = {'nickname': 'Brent'} 
    return render_template('index.html',
                           title='Home',
                           user=user)

if __name__ == "__main__":
    app.run()

