import pandas as pd
import quandl
import math
import numpy as np
from sklearn import preprocessing, svm, cross_validation
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt

df = quandl.get('WIKI/GOOGL')
df = df[['Adj. Open', 'Adj. High', 'Adj. Low', 'Adj. Close', 'Adj. Volume']]

# lets create new columns from the relation between these data, like the high/low values ratio in percentage
df['HL_PCT'] = (df['Adj. High']-df['Adj. Close']/df['Adj. Close']*100.0)
df['PCT_change'] = (df['Adj. Close']-df['Adj. Open']/df['Adj. Open']*100.0)

df = df[['Adj. Close', 'HL_PCT', 'PCT_change', 'Adj. Volume']]

forecast_col = 'Adj. Close'

# In ML yoy cant work with not existing data so you need to get
# rid of these items or fill in with some extreme value
# in case of the last the system will handle it as an outlier

df.fillna(-99999, inplace=True)

# lets start forecasting out, generally you use regression to forecast out
# we will try to predict out the 10% of the dataframe
forecast_out = int(math.ceil(0.01*len(df)))
print('forecast_out: ', forecast_out)
df['label'] = df[forecast_col].shift(-forecast_out)
df.dropna(inplace=True)
# print(df.head())

# x will be features and will be equal to a numpy array, y will be labels...?
X = np.array(df.drop(['label'], 1))
y = np.array(df['label'])
# in that case everything except of the label column, and since the drop
# returns a new dataframe we convert it to a numpy array and assign this to variable X

# lets scale x, here the guy started to elaborate whether we need to scale before train...
X = preprocessing.scale(X)
y = np.array(df['label'])

X_train, X_test, y_train, y_test = cross_validation.train_test_split(
    X, y, test_size=0.2)

# lets define our classifier
clf = LinearRegression()
# change our used algorithm to supported vector model
# clf = svm.SVR()

# fit means train
clf.fit(X_train, y_train)
# lets test our classifier accuracy
# score means test
# accuracy will be the so called squared error
accuracy = clf.score(X_test, y_test)

# print(accuracy)
