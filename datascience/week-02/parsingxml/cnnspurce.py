import requests
import bs4
import lxml
import xml.etree.ElementTree as ET
import pandas


cnnsource = requests.get(
    'http://rss.cnn.com/rss/edition_technology.rss')

soup = bs4.BeautifulSoup(cnnsource.text, 'xml')
root = ET.fromstring(cnnsource.text)


items = soup.find_all('item')
# print(items)

for item in items:
    print(item.title)

walkAll = root.getiterator('item')

# for elt in walkAll:
#     print(elt)

# for elt in walkAll:
#     print(elt.attrib)
#     print(elt.tag)

# for child in walkAll:
#     print((child.tag).child)
