import pandas as pd
import math
import numpy as np
from sklearn import preprocessing, svm, cross_validation
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt
from matplotlib import style
from statistics import mean

style.use('fivethirtyeight')

# resetting the display settings
pd.options.display.max_columns = 15

# read text file into a dataframe
filename = 'weatherHistory.csv'
df = pd.read_csv(filename)

df_analyzed = df[['Formatted Date',
                  'Temperature (C)', 'Apparent Temperature (C)', 'Humidity']]

# print(df_analyzed.head())
# print(df_analyzed.tail())
# print(df_analyzed['Humidity'].mean())
# print(df_analyzed['Humidity'].median())

# xs = np.array(df['Formatted Date'])
xs = np.array(df['Humidity'][-500:])
ys = np.array(df['Temperature (C)'][-500:])
zs = np.array(df['Apparent Temperature (C)'][-500:])


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


mtemp, btemp = bestfit_slope_and_intercept(xs, ys)
mapptemp, bapptemp = bestfit_slope_and_intercept(xs, zs)


# lets create the line with m and b
regression_line_temp = [(mtemp*x)+btemp for x in xs]
regression_line_apptemp = [(mapptemp*x)+bapptemp for x in xs]

r_squared_temp = coefficent_of_determination(ys, regression_line_temp)
r_squared_apptemp = coefficent_of_determination(zs, regression_line_apptemp)


print('mtemp: ', mtemp, 'btemp: ', btemp)
print('r_squared_temp: ', r_squared_temp)
print('mapptemp: ', mapptemp, 'bapptemp: ', bapptemp)
print('r_squared_apptemp: ', r_squared_apptemp)

# plt.scatter(xs, ys, color='r')
# plt.plot(xs, regression_line_temp)
# plt.show()

predict_x = 0.58
predict_z = mapptemp*predict_x+bapptemp

plt.scatter(xs, zs, color='g')
plt.scatter(predict_x, predict_z, color='r')
plt.plot(xs, regression_line_apptemp)
plt.show()
