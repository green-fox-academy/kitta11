string1 = "abcd"
# "A-Bb-Ccc-Dddd"
string2 = "RqaEzty"
# "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
string3 = "cwAt"
# "C-Ww-Aaa-Tttt"


def accum(s):
    newarray = []
    for x in range(0, len(s)):
        newarray.append((s[x]*(x+1)).capitalize())
    return ('-').join(newarray)


print(accum(string1))
print(accum(string2))
print(accum(string3))
