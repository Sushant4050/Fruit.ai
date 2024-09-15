from flask import Flask, jsonify, request

app = Flask(__name__)

faqs = []

@app.route('/faqs', methods=['GET'])
def get_faqs():
    return jsonify(faqs)

@app.route('/faqs', methods=['POST'])
def add_faq():
    data = request.json
    faqs.append(data)
    return jsonify(data), 201

@app.route('/faqs/<int:id>', methods=['PUT'])
def update_faq(id):
    data = request.json
    if 0 <= id < len(faqs):
        faqs[id] = data
        return jsonify(data)
    return jsonify({'error': 'Not found'}), 404

@app.route('/faqs/<int:id>', methods=['DELETE'])
def delete_faq(id):
    if 0 <= id < len(faqs):
        faqs.pop(id)
        return jsonify({'result': True})
    return jsonify({'error': 'Not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)
