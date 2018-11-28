from statistics import mean
import numpy as np
import matplotlib.pyplot as plt
from matplotlib import style

style.use('fivethirtyeight')
xs = np.array([1, 2, 3, 4, 5, 6], dtype=np.float64)
ys = np.array([5, 4, 6, 5, 6, 7], dtype=np.float64)

# to visualize what we have as a starter
# plt.scatter(xs, ys)
# plt.show()

# lets calculate

# calculation of the slope of the best fit line
# calculation b, the Y intercept


def bestfit_slope_and_intercept(xs, ys):
    m = (((mean(xs)*mean(ys)) - mean(xs*ys)) / ((mean(xs)**2) - mean(xs**2)))
    b = mean(ys) - m*mean(xs)
    return m, b


def squared_error(ys_orig, ys_line):
    return sum((ys_line-ys_orig)**2)


def coefficent_of_determination(ys_orig, ys_line):
    y_mean_line = [mean(ys_orig) for y in ys_orig]
    squared_error_regr = squared_error(ys_orig, ys_line)
    squared_error_y_mean = squared_error(ys_orig, y_mean_line)
    return 1 - (squared_error_regr/squared_error_y_mean)


m, b = bestfit_slope_and_intercept(xs, ys)
print(m, b)

# lets create the line with m and b
regression_line = [(m*x)+b for x in xs]

predict_x = 8
predict_y = m*predict_x+b

# how accurate is the best fit line
r_squared = coefficent_of_determination(ys, regression_line)
print(r_squared)

plt.scatter(xs, ys)
plt.scatter(predict_x, predict_y, color='r')
plt.plot(xs, regression_line)
plt.show()
