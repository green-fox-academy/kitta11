samplearray = [-20, 34, 21, -87, 92, 2147483647]
testlist = [12, 45, 2, 41, 31, 10, 8, 6, 4]


def minmax(array):
    min = array[0]
    max = array[0]
    for item in array:
        if item > max:
            max = item
        elif item < min:
            min = item
    return min, max


print(minmax(samplearray))
print(minmax(testlist))
