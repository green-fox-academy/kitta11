import random
import sys
import os
from plant import Plants


class Tree(Plants):

    def __init__(self, color):
        super().__init__(color)
        self._absorbingCap = 0.4

    def needWater(self):
        return self._currentWaterAm < 10

    def get_type(self):
        return 'tree'
