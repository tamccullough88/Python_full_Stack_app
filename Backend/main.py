from flask import request, jsonify
from config import app, db
from models import Contacts

@app.route("/contacts", methods=["GET"])
def get_contacts():
    contacts = Contacts.query.all()
    json_contacts = list(map(lambda x: x.to_json(), contacts))
    return jsonify({"contacts": json_contacts})

if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)


# create
# - first_name
# - last_name
# - email