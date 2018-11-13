def move_zeros(array):
    notzero = [item for item in array if item != 0 or item is False]
    for i in range(0, (len(array)-len(notzero))):
        notzero.append(0)
    return notzero


# print(move_zeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]))
# print(move_zeros(["a", 0, 0, "b", "c", "d", 0,
    # 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9]))
print(move_zeros(["a", 0, 0, "b", None, "c", "d", 0, 1,
                  False, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9]))


# pro version

def move_zeros_PRO(arr):
    l = [i for i in arr if isinstance(i, bool) or i != 0]
    return l+[0]*(len(arr)-len(l))
