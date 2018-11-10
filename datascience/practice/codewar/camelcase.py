def camel_case(string):
    return ''.join([word.capitalize() for word in string.split()])


print(camel_case("camel case word"))


# This method returns a copy of the string in which first characters
# of all the words are capitalized.
def camel_case_pro(string):
    return string.title().replace(" ", "")
