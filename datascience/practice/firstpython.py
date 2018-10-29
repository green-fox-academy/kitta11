import random
import sys
import os

msg = 'tell me the truth'
print(msg)

'''Variable
types'''

# string numbers lists tuples dictionaries
# + - * / % **(exponent) //(floor division)

print('5+2=', 5+2)
print('5-2=', 5-2)
print('5*2=', 5*2)
print('5/2=', 5/2)
print('5//2=', 5//2)
print('5**2=', 5**2)
# order of operation
print('5+2-4*3=', 5+2-4*3)
print('(5+2-4)*3=', (5+2-4)*3)

string_one = "Let's have a quote \"Yeah\" "
# print(string_one)
multiline_string = '''I am a multiline
quote that will be great'''
# print(multiline_string)
# print(string_one+multiline_string)
print("%s %s %s" % ('I dont like where this whole quote is going to',
                    string_one, multiline_string))

print('\n'*5)

print('I dont like', end='')
print('newlines')

print('I dont like', end='\n')
print('newlines')
