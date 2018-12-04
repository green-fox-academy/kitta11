# Write a program that reads a file, breaks each line into words, strips whitespace and punctuation
# from the words, and converts them to lowercase.

import string
print(string.punctuation)
print(string.whitespace)


fin = open('wizardofOz.txt')
data = fin.read().split()
# print(len(data))


worddict = {}

for word in data:
    word.strip(string.punctuation + string.whitespace)
    worddict[word.lower()] = worddict.get(word.lower(), 0)+1

sorteddict = sorted(worddict.items(), key=lambda item: item[1], reverse=True)
filtereddict = list(filter(lambda x: x[1] > 10, sorteddict))
print(filtereddict)
