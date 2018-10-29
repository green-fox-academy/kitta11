import math
testNum1 = 70304
testNum2 = 42


def expanded_form(num):
    x = len(str(num))
    if x > 1:
        y = math.pow(10, (x-1))
        return f'{int(num // y * y)} + {expanded_form(int(num % y))}'

    else:
        return f'{int(num)}'


# print(testNum1 % math.pow(10, 4))
# print(testNum1 // math.pow(10, 4)*math.pow(10, 4))

print(expanded_form(testNum1))
# expanded_form(65432)
# expanded_form(5432)
print(expanded_form(testNum2))
print(expanded_form(65432))
