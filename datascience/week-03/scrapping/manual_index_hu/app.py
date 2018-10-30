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

url = 'https://index.hu/'

page = requests.get(url)
soup = bs4.BeautifulSoup(page.text, 'lxml')
hrefs = [headline.a['href']
         for headline in soup.find_all('h1', class_="cikkcim")]

uniquelinks = list(set(hrefs))
# print(uniquelinks)

# print(len(hrefs))
# print(len(uniquelinks))

# I need only those urls that are leading to an article
regexObject = re.compile(r'http?s:\/\/dex\.hu\/x\.php\?[\da-zA-Z\.\/-]+')
tobeopened = [url for url in uniquelinks if re.findall(regexObject, url)]

print(len(tobeopened))


response = {
    'url': url,
    'no_uncleared_links': len(hrefs),
    'no_tobeopened_links': len(tobeopened),
}


def get_article_cont(article_url):
    article = requests.get(article_url)
    soup = bs4.BeautifulSoup(article.text, 'lxml')
    maincontent = [main for main in soup.find_all('div', class_='cikk-torzs')]
    titletag = soup.find('div', class_='content-title')
    if titletag:
        title = titletag.h1.text
        if maincontent[0].find('p'):
            text = " ".join([p.text for p in maincontent[0].find_all('p')])
            # print(title, text)
            return [title, text]


printedarticles = []

# for url in tobeopened:
#     printedarticles.append(get_article_cont(url))

# because it was not too fast I printed only the first 20
for i in range(40):
    # print(tobeopened[i])
    printedarticles.append(get_article_cont(tobeopened[i]))

for item in printedarticles:
    print(item)

# testing the get_article function
# get_article_cont(
#     'https://index.hu/gazdasag/2018/10/30/munkaerohiany_toborzas_autoipar/')


@app.route('/', methods=['GET'])
def homepage():
    return render_template('index.html', name='Kitta', response=response, printedarticles=printedarticles)


if __name__ == '__main__':
    app.run(debug=True)
