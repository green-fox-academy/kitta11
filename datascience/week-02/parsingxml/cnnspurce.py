import requests
import bs4
import lxml
# import xml.etree.ElementTree as ET
import pandas


cnnsource = requests.get(
    'http://rss.cnn.com/rss/edition_technology.rss')

soup = bs4.BeautifulSoup(cnnsource.text, 'xml')
# root = ET.fromstring(cnnsource.text)


items = soup.find_all('item')

# for item in items:
#     print(item.title.text)
#     print(item.guid.text)
#     print(item.description.string)

taglist = []
for item in items[0].children:
    if item.name:
        taglist.append(item.name)

# print(taglist)


item_array = []

for item in items:
    item_dict = {}
    for child in item.children:
        for tag in taglist:
            if child.name == tag:
                item_dict[tag] = child.text
    item_array.append(item_dict)


df = pandas.DataFrame(item_array, columns=item_dict)

# resetting the display settings
pandas.options.display.max_columns = 15
print(df.head(20))
