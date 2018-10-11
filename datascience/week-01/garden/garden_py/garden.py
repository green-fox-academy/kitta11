import random
import sys
import os
from plant import Plants


class Garden:

    def __init__(self):
        self._plants = []

    def addToGarden(self, item):
        self._plants.append(item)

    def watering(self, totalWater):
        print("Watering with:", totalWater)
        needsWater = []

        #  for count, item in enumerate(self._plants):
        #       if (item.needWater()):
        # needsWater.append(item)
        # for item in enumerate(self._plants):
        #     if (item.needWater()):
        #         item.beWatered(totalWater/len(needsWater))
        for i in range(len(self._plants)):
            if (self._plants[i].needWater()):
                needsWater.append(self._plants[i])
        for i in range(len(self._plants)):
            if (self._plants[i].needWater()):
                self._plants[i].beWatered(totalWater/len(needsWater))

    def printGarden(self):
        for i in range(len(self._plants)):
            if (self._plants[i].needWater()):
                print("The %s %s needs water" %
                      (self._plants[i].get_color(), self._plants[i].get_type()))
            else:
                print("The %s %s does not need water" %
                      (self._plants[i].get_color(), self._plants[i].get_type()))
