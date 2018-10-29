testarray1 = [2, 4, 0, 100, 4, 11, 2602, 36]
# Should return: 11 (the only odd number)

testarray2 = [160, 3, 1719, 19, 11, 13, -21]
# Should return: 160 (the only even number)


def find_outlier(integers):
    if len(list(filter(lambda i: i % 2 == 0, integers))) == 1:
        return list(filter(lambda i: i % 2 == 0, integers))[0]
    else:
        return list(filter(lambda i: i % 2 == 1, integers))[0]


print(find_outlier(testarray1))
print(find_outlier(testarray2))
