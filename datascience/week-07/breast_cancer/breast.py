import numpy as np
import pandas as pd
from sklearn import preprocessing, cross_validation, neighbors


filename = 'dataset.csv'
df = pd.read_csv(filename)


df.replace('?', -99999, inplace=True)


# what are the useless data?

df.drop(['id'], 1, inplace=True)
# without dropping the ID col, the accuracy is close to 50%

# X aka features
X = np.array(df.drop(['class'], 1))
# y for label
y = np.array(df['class'])

X_train, X_test, y_train, y_test = cross_validation.train_test_split(
    X, y, test_size=0.2)

clf = neighbors.KNeighborsClassifier()
clf.fit(X_train, y_train)

accuracy = clf.score(X_test, y_test)
print(accuracy)

# example_measures = np.array([7, 2, 3, 4, 5, 3, 1, 2, 1])
# Reshape your data either using array.reshape(-1, 1)
# if your data has a single feature or array.reshape(1, -1)
# if it contains a single sample.
# if you have one sample
# example_measures = example_measures.reshape(1, -1)

example_measures = np.array(
    [[7, 2, 3, 4, 5, 3, 1, 2, 1], [2, 2, 3, 4, 8, 3, 1, 2, 1], [8, 6, 3, 4, 8, 3, 1, 2, 1]])

# # if you have 2 samples
# example_measures = example_measures.reshape(2, -1)
example_measures = example_measures.reshape(len(example_measures), -1)

prediction = clf.predict(example_measures)
print(prediction)
