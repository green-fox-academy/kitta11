import random
import sys
import os


class Animals:

    def __init__(self, name, height, weight, sound):
        self._name = name
        self._height = height
        self._weight = weight
        self._sound = sound

    # setters and getters

    def set_name(self, name):
        self._name = name

    def get_name(self):
        return self._name

    def set_height(self, height):
        self._height = height

    def get_height(self):
        return self._height

    def set_weight(self, weight):
        self._weight = weight

    def get_weight(self):
        return self._weight

    def set_sound(self, sound):
        self._sound = sound

    def get_sound(self):
        return self._sound

    def get_type(self):
        print("Animal")

    def tostring(self):
        return "{} is {} cm tall and {} kilograms and say {}".format(self._name,
                                                                     self._height,
                                                                     self._weight,
                                                                     self._sound)


bromley = Animals(' Huckabee', 120, 55, 'woof')
print(bromley.tostring())


class Dog(Animals):

    def __init__(self, name, height, weight, sound, owner):
        super().__init__(name, height, weight, sound)
        self._owner = owner

    def set_owner(self, owner):
        self._owner = owner

    def get_owner(self):
        return self._owner

    def get_type(self):
        print("Dog")

    def tostring(self):
        return "{} is {} cm tall and {} kilograms and say {}. Owner: {}".format(self._name,
                                                                                self._height,
                                                                                self._weight,
                                                                                self._sound,
                                                                                self._owner)

    def multiple_sounds(self, how_many=None):
        if how_many is None:
            print(self.get_sound())
        else:
            print(self.get_sound()*how_many)


cleon = Dog(name='Cleon',
            height=120,
            weight=13,
            sound='wooofooo',
            owner='kitta'
            )

print(cleon.tostring())


class AnimalTesting:
    def get_type(self, animal):
        animal.get_type()


test_animals = AnimalTesting()

# ?something with polymorphism
test_animals.get_type(bromley)
test_animals.get_type(cleon)

cleon.multiple_sounds(4)
cleon.multiple_sounds(1)
