def longest_consec(strarr, k):
    if len(strarr) == 0 or len(strarr) < k or k <= 0:
        return ""
    else:
        concetstring = ''
        maxstring = ''
        for i in range(len(strarr)):
            for y in range(0, k):
                if i+y < (len(strarr)):
                    concetstring += strarr[i+y]
            if (len(concetstring)) > len(maxstring):
                maxstring = concetstring
            concetstring = ''
    return maxstring


print(longest_consec(["zone", "abigail", "theta", "form",
                      "libe", "zasssssssssssssssssss", "theta", "abigail"], 3))


def longest_consecPro(s, k):
    return max(["".join(s[i:i+k]) for i in range(len(s)-k+1)], key=len) if s and 0 < k <= len(s) else ""
