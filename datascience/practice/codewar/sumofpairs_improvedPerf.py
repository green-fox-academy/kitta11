import time

start_time = time.time()


def sum_pairs(ints, s):
    solution = []
    limit = len(ints)
    for i in range(0, limit):
        print(limit)
        for y in range(i+1, limit):
            if ints[i]+ints[y] == s:
                solution = [ints[i], ints[y]]
                limit = y
    if len(solution) == 0:
        return None
    else:
        return solution


end = time.time()
print(end - start_time)

# print(sum_pairs([1, 4, 8, 7, 3, 15], 8))
print(sum_pairs([10, 50, 21, 32, 7, 5, 95, 4, 23, 45, 50], 100))
