def histogram(s):
    d = {}
    for c in s:
        d[c] = d.get(c, 0)+1
    return d


# Dictionaries have a method called get that takes a key and a default value.
# If the key appears in the dictionary, get returns the corresponding value;
# otherwise it returns the default value. For example:
# testdic = {'a': 2, 'b': 4, 'd': 9}
# print(testdic.get('a', 0))  # returns 2
# print(testdic.get('c', 0))  # returns 0


print(histogram('This is a test, keep calm'))
