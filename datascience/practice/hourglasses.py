testarray = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
]

pattern = [
    [1, 1, 1],
    [0, 1, 0],
    [1, 1, 1]
]

for i in range(len(testarray)-3):
    for y in range(len(pattern)-1):
        print(testarray[i][y], pattern[y])
