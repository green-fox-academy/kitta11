from flask import Flask, render_template, jsonify, json, request
from flask_cors import CORS
import requests
import pandas as pd
import re
import bs4
import lxml

app = Flask(__name__,
            static_url_path='',
            static_folder='static',
            template_folder='templates')


CORS(app)

url = 'https://444.hu/'

page = requests.get(url)
soup = bs4.BeautifulSoup(page.text, 'lxml')
hrefs = [a['href']for a in soup.find_all('a', href=True)]
uniquelinks = list(set(hrefs))

# print(len(hrefs))
# print(len(uniquelinks))

# I need only those urls that are leading to an article
regexObject = re.compile(r'http?s:\/\/444\.hu\/\d{4}\/[\da-zA-Z\.\/-]+')
tobeopened = [url for url in uniquelinks if re.findall(regexObject, url)]

# print(len(tobeopened))


response = {
    'url': url,
    'no_uncleared_links': len(hrefs),
    'no_tobeopened_links': len(tobeopened),
}


def get_article_cont(article_url):
    article = requests.get(article_url)
    soup = bs4.BeautifulSoup(article.text, 'lxml')
    maincontent = [main for main in soup.find_all('main', id="content-main")]
    title = soup.find("h1").text
    text = " ".join([p.text for p in maincontent[0].find_all('p')])
    return [title, text]


printedarticles = []

for url in tobeopened:
    printedarticles.append(get_article_cont(url))


# get_article_cont(
#     'https://444.hu/2018/10/26/az-echo-tv-n-sem-tudtak-belekotni-a-ceu-rektorhelyettesebe-mikor-elmagyarazta-hogyan-mismasol-az-ugyukben-a-kormany')


@app.route('/', methods=['GET'])
def homepage():
    return render_template('index.html', name='Kitta', response=response, printedarticles=printedarticles)


if __name__ == '__main__':
    app.run(debug=True)
