phonebook = {}

for i in range(int(input())):
    giveninfo = input().split()
    phonebook[giveninfo[0]] = giveninfo[1]

while True:
    try:
        query = input()
        if query in phonebook:
            print(query+'='+phonebook[query])
        else:
            print('Not found')
    except EOFError:
        break
