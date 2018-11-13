import re

regexObject = re.compile(r'(\d+)')


def increment_string(strng):
    num = []
    for index in range(len(strng)-1, 0, -1):
        if re.match(regexObject, strng[index]) is not None:
            num.append(strng[index])
        else:
            break
    if len(num) == 0:
        return strng + '1'
    elif '0' in num:
        diff = len(num)-len(str((int(''.join(list(reversed(num))))+1)))
        return strng[0: len(strng)-len(num)] + '0'*diff + str((int(''.join(list(reversed(num))))+1))
    else:
        return strng[0: len(strng)-len(num)] + str((int(''.join(list(reversed(num))))+1))


print(increment_string('foobar99'))
print(increment_string('foobar00'))
print(increment_string('foobar001'))
print(increment_string('foobar11'))


def increment_string_pro(strng):
    head = strng.rstrip('0123456789')
    tail = strng[len(head):]
    if tail == "":
        return strng+"1"
    return head + str(int(tail) + 1).zfill(len(tail))
