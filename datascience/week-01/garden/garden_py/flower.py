import random
import sys
import os
from plant import Plants


class Flower(Plants):

    def __init__(self, color):
        super().__init__(color)
        self._absorbingCap = 0.75

    def needWater(self):
        return self._currentWaterAm < 5

    def get_type(self):
        return 'flower'
