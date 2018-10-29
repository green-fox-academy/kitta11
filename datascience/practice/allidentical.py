

def allidentical(myList):
    return all(x == myList[0] for x in myList)


print(allidentical([2, 2, 2, 2]))
print(allidentical([1, 2, 2, 2]))
