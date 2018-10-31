import random
num = random.randint(1, 100)
guesses = [0]

while True:
    userguess = int(input('Give me your guess: '))
    if userguess < 1 or userguess > 100:
        print('OUT OF BOUNDS! Please try again: ')
        continue
    elif userguess == num:
        print('congrats')
    else:
        if abs(num - userguess) < 10:
            if len(guesses) > 1:
                if abs(num - userguess) < abs(num - guesses[-2]):
                    print('Warmer')
                    guesses.append(userguess)
                    continue
                else:
                    print('Warmer but you were already closer')
                    continue
            else:
                print('Warmer')
                guesses.append(userguess)
                continue
        else:
            print('Cold')
            continue
    break
