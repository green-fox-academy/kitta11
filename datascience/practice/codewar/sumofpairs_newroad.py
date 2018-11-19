import time

start_time = time.time()


def sum_pairs(ints, s):
    solution = []
    limit = len(ints)
    ylimit = len(ints)
    for i in range(0, limit):
        pair = s-ints[i]
        for y in range(i+1, limit)
           try:
                if ints.index(pair) and ints.index(pair) > i:
                    print(i, ints[i], ints.index(pair), pair)
                    if len(solution) == 0:
                        solution = [ints[i], ints[ints.index(pair)]]
                        ylimit = ints.index(pair)
                        print(i, ylimit)
                    else:
                        if ylimit > ints.index(pair):
                            solution = [ints[i], ints[ints.index(pair)]]
                            ylimit = ints.index(pair)
                            print(i, ylimit)
            except ValueError:
                pass
    if len(solution) == 0:
        return None
    else:
        return solution


end = time.time()
print(end - start_time)

# print(sum_pairs([1, 4, 8, 7, 3, 15], 8))
print(sum_pairs([1, 2, 3, 4, 1, 0], 2))
# print(sum_pairs([10, 50, 21, 32, 7, 5, 95, 4, 23, 45, 50], 100))

# print([10, 50, 21, 32, 7, 5, 95, 4, 23, 45, 50].index(5))
# print([10, 50, 21, 32, 7, 5, 95, 4, 23, 45, 50].index(3))
