from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

user_info = {
    'name': ['Kevin Chen-Chuan Chang'], 
    'department': ['Computer Science'], 
    'education': ['Stanford University (1993-2000)'], 
    'positions': [
        'Professor (Aug 2015 - Present)',
        'Associate Professor (Aug 2007 - Aug 2015)',
        'Assistant Professor (Aug 2000 - Aug 2007)'
    ], 
    'publications': [
        'Unified and Incremental SimRank: Index-free Approximation with Scheduled Principle (2023)', 
        'Active Surveillance via Group Sparse Bayesian Learning (2022)', 
        'CoVA: Context-aware Visual Attention for Webpage Information Extraction (2022)'
    ]
}

@app.route('/api/user')
def get_user_info():
    return jsonify(user_info)

@app.route('/api/user', methods=['PUT'])
def update_user_info():
    new_info = request.get_json()
    print(new_info)  
    for key in new_info:
        if key in user_info:
            user_info[key] = new_info[key]

    return jsonify(success=True)

if __name__ == '__main__':
    app.run(port=5000, debug=True)
