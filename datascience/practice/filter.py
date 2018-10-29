import random
import os
import sys


# list of alphabets
alphabets = ['a', 'b', 'd', 'e', 'i', 'j', 'o']

# function that filters vowels


def filterVowels(alphabet):
    vowels = ['a', 'e', 'i', 'o', 'u']

    if(alphabet in vowels):
        return True
    else:
        return False


filteredVowels = filter(filterVowels, alphabets)

plants = [
    {"name": "purpleflower", "needsWater": False},
    {"name": "yellowflower", "needsWater": True},
    {"name": "orangetree", "needsWater": False},
    {"name": "bluetree", "needsWater": False},
]

plantsOnlyNames = ["purpleflower", "yellowflower", "orangetree",  "bluetree"]


def doesneedwater(item):
    if(item["needsWater"]):
        return True
    else:
        return False


def doesneedwatersimple(item):
    if(item == 'purpleflower'):
        return True
    else:
        return False


filteredPlants = list(filter(doesneedwater, plants))
print(filteredPlants)
