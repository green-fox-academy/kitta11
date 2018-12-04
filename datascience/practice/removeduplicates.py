sampleinput = [2, 4, 10, 20, 5, 2, 20, 4]


def notduplicated(duplicate):
    sortedinput = sorted(duplicate)
    return [sortedinput[i]
            for i in range(len(sortedinput))if sortedinput[i] - sortedinput[i-1] != 0]


def Remove(duplicate):
    final_list = []
    for num in duplicate:
        if num not in final_list:
            final_list.append(num)
    return final_list


print(notduplicated(sampleinput))
print(Remove(sampleinput))
