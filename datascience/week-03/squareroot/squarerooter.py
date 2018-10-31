import math


def rootcounter(a, b):
    return len([number for number in range(a, b) if (math.sqrt(number)) % 1 == 0])
