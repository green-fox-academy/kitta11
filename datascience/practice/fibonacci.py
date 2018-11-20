import time

start_time = time.time()


def fibonacci(n):
    result = [1, 1]
    for i in range(2, n):
        result.append(result[i-2]+result[i-1])
    return result


def fibonacci_yield():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a+b


print(fibonacci(10))
end1 = time.time()

f = fibonacci_yield()
f.__next__()
for x in range(10):
    print(f.__next__())
end2 = time.time()

print('with array:', end2 - start_time)
print('with yield:', end1 - start_time)
