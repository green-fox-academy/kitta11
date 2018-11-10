import math


def diamond(n):
    if n <= 0:
        return None
    elif n % 2 == 0:
        return "please provide an odd number"
    else:
        return ("\n").join([(int(num*2)*("*")+"*").center(n)
                            for num in range(0, (n//2)+1)]+[(int(num*2)*("*")+"*").center(n)
                                                            for num in range((n//2)-1, -1, -1)])


print(diamond(15))
