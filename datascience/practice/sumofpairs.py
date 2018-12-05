testsample = [1, 5, 7, -1, 5]
sum = 6


def getPairsCount(arr, sum):
    dict = {}
    for item in arr:
        if item in dict:
            dict[item] += 1
        else:
            dict[item] = 1
    counter = 0
    pairs = []
    for key in dict:
        if (sum-key) in dict:
            counter += 1
            if [sum-key, key] not in pairs:
                pairs.append([key, sum-key])
    return counter/2, pairs


print(getPairsCount(testsample, 6))
