import random
import sys
import os


class Plants:

    def __init__(self, color):
        self._color = color
        self._currentWaterAm = 0
        self._absorbingCap = None

    def set_color(self, color):
        self._color = color

    def get_color(self):
        return self._color

    def needWater(self):
        pass

    def beWatered(self, waterAmount):
        self._currentWaterAm += waterAmount*self._absorbingCap

    def get_type(self):
        pass
