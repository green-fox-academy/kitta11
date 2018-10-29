def tribonacci(signature, n):
    if n == 0:
        return []
    elif n == 1:
        return [signature[0]]
    elif n == 2:
        return [signature[0], signature[1]]
    else:
        output = signature
        for i in range(0, (n-3)):
            output.append(output[i]+output[i+1]+output[i+2])
        return output


print(tribonacci([1, 1, 1], 10))
print(tribonacci([3, 2, 1], 10))

def tribonacci_pro(signature, n): 
  res = signature[:n]
  for i in range(n - 3): res.append(sum(res[-3:]))
  return res
