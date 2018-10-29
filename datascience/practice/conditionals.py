import random
import sys
import os

# if else elif

age = 15
if age > 16:
    print('You are old enough to drink')
else:
    print('You are not old enough')

age = 19
if age >= 22:
    print('You are old enough to drink')
elif age >= 18:
    print('You are not old enough but you will drink anyway')
else:
    print('please dont drink yet')

# and or not logical operators

if((age > 1) and (age < 20)):
    print('multiple conditions were met')
elif not (age == 30):
    print('Champagne')
