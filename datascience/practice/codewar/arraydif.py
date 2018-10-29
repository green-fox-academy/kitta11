array1 = [1, 2, 2, 2, 3]
array2 = [2]

array3 = [1, 2, 6]
array4 = []


def array_diff(a, b):
    if len(b) > 0:
        for y in b:
            while y in a:
                a.remove(y)
        return a
    else:
        return a


print(array_diff(array1, array2))
print(array_diff(array3, array4))
print(array_diff([2, -2, -2, -18, 6], [4, 1, -2, 6]))

# and the elegant solution from the pros


def array_diff_pro(a, b):
    return [x for x in a if x not in b]


print(array_diff_pro(array1, array2))
print(array_diff_pro(array3, array4))
print(array_diff_pro([2, -2, -2, -18, 6], [4, 1, -2, 6]))


def array_diff_superpro(a, b):
    return list(filter(lambda i: i not in b, a))


print(array_diff_superpro([2, -2, -2, -18, 6], [4, 1, -2, 6]))
