def done_or_not(board):
    numbers = []
    for row in range(len(board)):
        for col in range(len(board[row])):
            numbers.append(board[row][col])
            if numbers.count(board[row][col]) > 1:
                return 'Try again!'
        numbers = []
    for col in range(len(board)):
        for row in range(len(board)):
            numbers.append(board[row][col])
            if numbers.count(board[row][col]) > 1:
                return 'Try again!'
        numbers = []
    for n in range(0, 3):
        for subrow in range(0+3*n, 3+3*n):
            for subcol in range(0+3*n, 3 + 3*n):
                numbers.append(board[subrow][subcol])
                if numbers.count(board[subrow][subcol]) > 1:
                    return 'Try again!'
        numbers = []
    return 'Finished!'


undone = [[1, 3, 2, 5, 7, 9, 4, 6, 8], [4, 9, 8, 2, 6, 1, 3, 7, 5], [7, 5, 6, 3, 8, 4, 2, 1, 9], [6, 4, 3, 1, 5, 8, 7, 9, 2], [
    5, 2, 1, 7, 9, 3, 8, 4, 6], [9, 8, 7, 4, 2, 6, 5, 3, 1], [2, 1, 4, 9, 3, 5, 6, 8, 7], [3, 6, 5, 8, 1, 7, 9, 2, 4], [8, 7, 9, 6, 4, 2, 1, 3, 5]]

done = [[1, 3, 2, 5, 7, 9, 4, 6, 8],
        [4, 9, 8, 2, 6, 1, 3, 7, 5],
        [7, 5, 6, 3, 8, 4, 2, 1, 9],
        [6, 4, 3, 1, 5, 8, 7, 9, 2],
        [5, 2, 1, 7, 9, 3, 8, 4, 6],
        [9, 8, 7, 4, 2, 6, 5, 3, 1],
        [2, 1, 4, 9, 3, 5, 6, 8, 7],
        [3, 6, 5, 8, 1, 7, 9, 2, 4],
        [8, 7, 9, 6, 4, 2, 1, 5, 3]]
print(done_or_not(done))
print(done_or_not(undone))


import numpy as np


def done_or_not_pro(aboard):  # board[i][j]
    board = np.array(aboard)

    rows = [board[i, :] for i in range(9)]
    cols = [board[:, j] for j in range(9)]
    sqrs = [board[i:i+3, j:j+3].flatten() for i in [0, 3, 6]
            for j in [0, 3, 6]]

    for view in np.vstack((rows, cols, sqrs)):
        if len(np.unique(view)) != 9:
            return 'Try again!'

    return 'Finished!'
