import random
import sys
import os

test_file = open("testfile.txt", "wb")
print(test_file.mode)
print(test_file.name)
# it is not working with 2 params like in the video
# test_file.write(bytes("write me to the file", "UTF-8"))
test_file.write(bytes("write me to the file"))

test_file.close()

test_file = open("testfile.txt", "r+")

textinfile = test_file.read()
print(textinfile)

# os.remove("testfile.txt")
