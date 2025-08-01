from flask import Flask, request, jsonify
from flask_cors import CORS
from models import get_db_connection

app = Flask(__name__)
CORS(app)

@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    srn = data['srn']
    name = data['name']
    dept = data['dept']

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO users (srn, name, dept) VALUES (%s, %s, %s)", (srn, name, dept))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({"message": "Login successful"}), 200

@app.route("/add-book", methods=["POST"])
def add_book():
    data = request.get_json()
    srn = data['srn']
    book_name = data['book_name']

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO added_books (srn, book_name) VALUES (%s, %s)", (srn, book_name))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({"message": "Book added"}), 200

if __name__ == "__main__":
    app.run(debug=True)
