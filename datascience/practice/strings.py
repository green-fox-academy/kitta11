import random
import sys
import os

# longstring = 'come and see the violence inherent in the system'
# print(longstring)
# print(longstring[0:5])
# print(longstring[-5:])
# print(longstring[:-5])


# print("%c is my %s character and my number %d number is %.5f" %
#       ('F', 'most hated', 11, .123))
# # F is my most hated character and my number 11 number is 0.12300

# print(longstring.capitalize())

# print(longstring.find('violence'))
# # if there is only one space it is false
# print(longstring.isalpha())

# print(longstring.isalnum())
# print(longstring.replace('violence', 'kindness'))
# print(longstring.strip(' '))

# numberstring = '123456789'
# print(numberstring.isalnum())


def toJadenCase(string):
    newarray = []
    for x in (string.split(' ')):
        newarray.append(x.capitalize())
    return (' ').join(newarray)


print(toJadenCase('i am a string'))
quote = "How can mirrors be real if our eyes aren't real"
print(toJadenCase(quote))

import string
print(string.capwords(quote))

# string.capwords(s, sep=None)¶
# Split the argument into words using str.split(), capitalize each word using str.capitalize(), 
# and join the capitalized words using str.join(). If the optional second argument sep is absent or None, 
# runs of whitespace characters are replaced by a single space and leading and trailing whitespace are removed, 
# otherwise sep is used to split and join the words.