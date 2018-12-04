# # Read a full line of input from stdin and save it to our dynamically typed variable, input_string.
# input_string = input()

# # Print a string literal saying "Hello, World." to stdout.
# print('Hello, World.')

# # TODO: Write a line of code here that prints the contents of input_string to stdout.
# print(input_string)

numoflines = int(input())
# str_odd = []
# str_even = []

for i in range(numoflines):
    inputstring = input()
    print(inputstring[::2], inputstring[1::2])

# for N in range(int(input())):
#     S = input()
#     print(S[::2], S[1::2])
