# the lock

# ┌───┬───┬───┐
# │ 1 │ 2 │ 3 │
# ├───┼───┼───┤
# │ 4 │ 5 │ 6 │
# ├───┼───┼───┤
# │ 7 │ 8 │ 9 │
# └───┼───┼───┘
#     │ 0 │
#     └───┘

import itertools

lock_dict = {
    1: [1, 2, 4],
    2: [2, 1, 3, 5],
    3: [3, 2, 6],
    4: [4, 1, 5, 7],
    5: [5, 2, 4, 6, 8],
    6: [6, 3, 5, 9],
    7: [7, 4, 8],
    8: [8, 7, 5, 9, 0],
    9: [9, 6, 8],
    0: [0, 8]
}


def get_pins(observed):
    tobeiterated = [lock_dict[elem]
                    for elem in [int(item) for item in observed]]
    solution = list(itertools.product(*tobeiterated))
    strlist = [list(item) for item in solution]
    finallist = []
    for miniarray in strlist:
        tobeappend = ''
        for item in miniarray:
            tobeappend += str(item)
        finallist.append(tobeappend)
    return finallist


mylist = get_pins('1357')


from itertools import product

ADJACENTS = ('08', '124', '2135', '326', '4157',
             '52468', '6359', '748', '85790', '968')


def get_pins_pro(observed):
    return [''.join(p) for p in product(*(ADJACENTS[int(d)] for d in observed))]
