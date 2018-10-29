import random
import sys
import os

super_heroes = {'One': 'SnowBlack',
                'Two': 'CinderCarla',
                'Three': 'BeautyBeast'}
print(super_heroes['Two'])

super_heroes['Two'] = 'CinderCarlo'
print(super_heroes)
print(len(super_heroes))

print(super_heroes.get('Two'))
print(super_heroes.keys())
print(super_heroes.values())
