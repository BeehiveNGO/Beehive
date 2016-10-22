from flask import Flask, jsonify
from flask import render_template
from flaskext.mysql import MySQL

app = Flask(__name__)
mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'beehive123'
app.config['MYSQL_DATABASE_DB'] = 'beehive'
app.config['MYSQL_DATABASE_HOST'] = 'beehive'
mysql.init_app(app)

@app.route("/")
@app.route('/index')
def show_page():
    conn = mysql.connect()
    cursor = conn.cursor()
    #cursor.execute('''SELECT title, 
    #                         description,
    #                         reporting_org,
    #                         participating_org_Accountable,
    #                         participating_org_Funding,
    #                         participating_org_Implementing
    #                  FROM lebanon''')
    cursor.execute('''SELECT * FROM lebanon''')
    data = cursor.fetchall()

    return render_template('index.html',
                           items=data)

@app.route('/json')
def show_json():
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute('''SELECT * FROM lebanon''')
    data = cursor.fetchall()
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)

