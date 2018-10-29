testarray = ["Ryan", "Kieran", "Mark"]


def friend(x):
    output = []
    for i in x:
        if(len(i) == 4):
            output.append(i)
    return output


print(friend(testarray))


def friendPro(x):
    return [f for f in x if len(f) == 4]
