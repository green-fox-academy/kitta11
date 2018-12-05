samplelist = [10, 7, 8, 9, 1, 5, 4]


def partitioning(arr, low, high):
    i = low-1
    pivot = arr[high]
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i+1], arr[high] = arr[high], arr[i+1]
    # print(arr)
    return i+1


def quicksort(arr, low, high):
    if low < high:
        pi = partitioning(arr, low, high)
        quicksort(arr, low, pi-1)
        quicksort(arr, pi+1, high)
    return arr


print(quicksort(samplelist, 0, 6))
