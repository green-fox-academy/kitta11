binaryversion = []


def convertToBinary(n):
    # Function to print binary number for the input decimal using recursion
    if n > 1:
        binaryversion.append(str(n % 2))
        convertToBinary(n//2)
    else:
        binaryversion.append(str(n % 2))
    return ''.join(reversed(binaryversion))


def howmanyones(n):
    counter = 1
    binaryversion = convertToBinary(n)
    print(binaryversion)
    countlist = []
    for index in range(len(binaryversion)-1):
        if binaryversion[index] == '1':
            if binaryversion[index+1] == '1':
                counter += 1
            else:
                countlist.append(counter)
                counter = 1
    countlist.append(counter)
    return max(countlist)


# decimal number
dec = 439

print(howmanyones(dec))
