import requests
import bs4
import lxml
import xml.etree.ElementTree as ET
import pandas


cnnsource = requests.get(
    'http://rss.cnn.com/rss/edition_technology.rss')

soup = bs4.BeautifulSoup(cnnsource.text, 'xml')

items = soup.find_all('item')
print(items)

root = ET.fromstring(cnnsource.text)

walkAll = root.getiterator('item')
print(walkAll.item)
for elt in walkAll:
    print(elt)

for elt in walkAll:
    print(elt.attrib)
    print(elt.tag)

for child in root:
    print(child.tag, child.attrib)
