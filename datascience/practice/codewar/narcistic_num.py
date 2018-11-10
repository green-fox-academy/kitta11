def narcissistic(value):
    return sum([pow(int(num), len(str(value)))
                for num in str(value)]) == value


print(narcissistic(153))


def narcissistic_pro(value):
    digs = map(int, str(value))
    l = len(digs)
    return value == sum(map(lambda x: x**l, digs))
