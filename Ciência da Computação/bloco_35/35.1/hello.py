from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/", methods=['GET', 'POST'])
def hello_world():
    if request.methods == 'POST':
        data = request.form.to_dict(flat=False)
        return jsonify(data)
    return "<p>Hello, World!</p>"
