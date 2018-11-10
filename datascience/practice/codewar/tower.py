
def tower_builder(n_floors):
    towerlist = []
    step = (n_floors*2)-1
    for i in range(0, n_floors):
        towerlist.append(int((step-i*2)//2)*(' ') + int(i*2) *
                         ('*') + '*' + int((step-i*2)//2)*(' '))
    return towerlist


# tower_builder(3)
# tower_builder(4)

# print(tower_builder(1))
# print(tower_builder(2))
# print(tower_builder(3))
# print(tower_builder(4))

# ['  *  ', ' *** ', '*****'])

# pro solution

# testing the str.center() method
str = 'muhaha'
print(str.center(40, '*'))
print(str.center(40))


def tower_builder_pro(n):
    return [("*" * (i*2-1)).center(n*2-1) for i in range(1, n+1)]
