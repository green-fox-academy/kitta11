import time
import random

start_time = time.time()


def sum_pairs(ints, s):
    solution = []
    for i in range(0, int(len(ints)*0.5)+1):
        for y in range(1, len(ints)):
            if ints[i]+ints[y] == s and i != y:
                if len(solution) == 0:
                    solution.append([ints[i], i, ints[y], y])
                else:
                    if solution[0][3] > y:
                        solution[0] = (ints[i], i, ints[y], y)
                    elif solution[0][3] < y and solution[0][0] < i:
                        break
    if len(solution) == 0:
        return None
    else:
        return [solution[0][0], solution[0][2]]


end = time.time()
print(end - start_time)

print(sum_pairs([1, 4, 8, 7, 3, 15], 8))
print(sum_pairs([10, 5, 2, 3, 7, 5], 10))
