import random
import sys
import os


class Animal:

    def __init__(self, name, height, weight, sound):
        self.__name = name
        self.__height = height
        self.__weight = weight
        self.__sound = sound

    # setters and getters

    def set_name(self, name):
        self.__name = name

    def get_name(self):
        return self.__name

    def set_height(self, height):
        self.__height = height

    def get_height(self):
        return self.__height

    def set_weight(self, weight):
        self.__weight = weight

    def get_weight(self):
        return self.__weight

    def set_sound(self, sound):
        self.__sound = sound

    def get_sound(self):
        return self.__sound

    def get_type(self):
        print("Animal")

    def tostring(self):
        return "{} is {} cm tall and {} kilograms and say {}".format(self.__name,
                                                                     self.__height,
                                                                     self.__weight,
                                                                     self.__sound)


murry = Animal('Murryka', 50, 70, 'Miau')
print(murry.tostring())


class Dog(Animal):

    def __init__(self, name, height, weight, sound, owner):
        super().__init__(name, height, weight, sound)
        self.__owner = owner

    def set_owner(self, owner):
        self.__owner = owner

    def get_owner(self):
        return self.__owner

    def get_type(self):
        print("Dog")

    def tostring(self):
        return "{} is {} cm tall and {} kilograms and say {}. Owner: {}".format(self.__name,
                                                                                self.__height,
                                                                                self.__weight,
                                                                                self.__sound,
                                                                                self.__owner)

    def multiple_sounds(self, how_many=None):
        if how_many is None:
            print(self.get_sound())
        else:
            print(self.get_sound()*how_many)


foooo = Dog(name='spotty',
            height=60,
            weight=20,
            sound='wau',
            owner='kitta'
            )

print(foooo.tostring())


class AnimalTesting:
    def get_type(self, animal):
        animal.get_type()


test_animals = AnimalTesting()

# ?something with polymorphism
test_animals.get_type(murry)
test_animals.get_type(foooo)

foooo.multiple_sounds(4)
foooo.multiple_sounds(1)
