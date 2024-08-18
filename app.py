from flask import Flask, jsonify,render_template
from flask_cors import CORS
import mysql.connector
import os

app = Flask(__name__)
CORS(app)

# Configuration for MySQL
db_config = {
    'user': 'Priyanshi2829',
    'password': 'Priyanshi@28',
    'host': 'localhost',
    'database': 'tastebuddy_db'
}

# Function to connect to MySQL
def get_db_connection():
    conn = mysql.connector.connect(**db_config)
    return conn

# Fetch all ingredients from the database
@app.route('/api/ingredients', methods=['GET'])
def get_ingredients():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute('SELECT * FROM ingredients')
    ingredients = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(ingredients)

# Serve the explore page (index.html)
@app.route('/')
def explore():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
