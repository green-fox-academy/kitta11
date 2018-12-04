import string
# string reverse tricks

# test_string = 'Oh hell yeah'
# print(test_string[::-1])

# print(''.join(reversed(test_string)))
# # https://stackoverflow.com/questions/931092/reverse-a-string-in-python


import string


def ispangram(str1, alphabet=string.ascii_lowercase):
    print(sorted(set(str1.lower())))
    return len(set(str1.lower())) == len(alphabet)


print(ispangram("The quick brown fox jumps over the lazy dog"))

def master_yoda(text):
    # return ' '.join(reversed(text.split()))
    return ' '.join(text.split()[::-1])