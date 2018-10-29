
# list comprehension

[print(it) for it in range(200)]


# yield

def iteratorObj(until, power):
    for i in range(until):
        yield i**power


uccuneki = iteratorObj(20000, 4)
