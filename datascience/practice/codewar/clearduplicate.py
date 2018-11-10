def delete_nth(order, max_e):
    storage = {}
    newlist = []
    for item in order:
        if item in storage:
            storage[item] += 1
            if storage[item] <= max_e:
                newlist.append(item)
        else:
            storage[item] = 1
            newlist.append(item)
    return newlist


testlist = [1, 2, 3, 1, 2, 1, 2, 3]

print(delete_nth(testlist, 2))


def delete_nth_pro(order, max_e):
    ans = []
    for o in order:
        if ans.count(o) < max_e:
            ans.append(o)
    return ans


from collections import defaultdict

def delete_nth_pro2(order,max_e):
    c = defaultdict(int)
    def count(x):
        c[x] += 1
        return c[x] <= max_e
    return filter(count, order)