teststring = 'abEcd11ea'


def duplicate_count(text):
    letterdict = {}
    for letter in text:
        if letter.lower() in letterdict:
            letterdict[letter.lower()] += 1
        else:
            letterdict[letter.lower()] = 1
    onlydup = []
    for v in letterdict.values():
        if v > 1:
            onlydup.append(v)
    return len(onlydup)


print(duplicate_count(teststring))


# pro solution
def duplicate_countPro(s):
    return len([c for c in set(s.lower()) if s.lower().count(c) > 1])
