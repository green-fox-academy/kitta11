import itertools


def permutationsum(num):
    solution = [int(''.join(list(set))) for set in (
        itertools.permutations(list(str(num))))]
    return solution


print(permutationsum(12))
print(permutationsum(369))
