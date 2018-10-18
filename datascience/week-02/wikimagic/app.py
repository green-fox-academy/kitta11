from flask import Flask, render_template, jsonify, json, request
from flask_cors import CORS
import requests
import pandas as pd
import random
import re

app = Flask(__name__,
            static_url_path='',
            static_folder='static',
            template_folder='templates')


CORS(app)

searchUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search='
contentUrl = 'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles='


@app.route('/', methods=['GET'])
def homepage():
    return render_template('index.html', name='Kitta')


@app.route('/', methods=['POST'])
def result_display():
    term = request.form["term"]
    searchfor = searchUrl+term
    source = requests.get(searchfor).content
    parsed_source = json.loads(source)
    results = parsed_source[1]
    result_list = []
    for i in range(len(results)):
        result_list.append([results[i], parsed_source[3][i]])

    random_index = random.randint(1, len(results))

    content_lookup = contentUrl+results[random_index]
    contentsource = requests.get(content_lookup).content
    parsed_contsource = json.loads(contentsource)
    item = parsed_contsource['query']['pages']
    item_index = list(parsed_contsource['query']['pages'].keys())[0]
    content = item[item_index]['revisions'][0]['*']
    regexObject = re.compile(r'\b\w{5,}\b')
    words = re.findall(regexObject, content)
    random_pick = random.sample(words, 15)

    return render_template('index.html', term=term, name='Kitta', result_list=result_list, randomcontent=random_pick)


if __name__ == '__main__':
    app.run(debug=True)
