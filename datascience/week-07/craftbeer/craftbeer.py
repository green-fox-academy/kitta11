import pandas as pd
import numpy as np
import pandas as pd
import quandl
import math
import datetime
from sklearn import preprocessing, cross_validation, neighbors
import matplotlib.pyplot as plt
from matplotlib import style
import random

filename = 'beers.csv'
df = pd.read_csv(filename)
# print(df.head())

# print(len(df['style'].unique()))
# print(len(df))


df2 = df.dropna(subset=['ibu'])
# print(df2.head())
# print(len(df2))


srm_dict = {
    'Pilsner': 4,
    'Witbier': 3,
    'Belgian Ale': 6,
    'Maibock': 7,
    'Lager': 11,
    'Oktoberfest': 8,
    'APA': 10,
    'IPA': 10,
    'ESB': 11,
    'Märzen': 12,
    'Imperial Pale Ale': 8,
    'Dunkel Weizen': 12,
    'Amber': 15,
    'Brown Ale': 18,
    'Bock': 22,
    'Porter': 30,
    'Oatmeal Stout': 32,
    'Imperial Stout': 65,
    'Stout': 45,
    'Blonde Ale': 4,
    'Barleywine': 15,
    'Strong Ale': 15,
    'Pale Ale': 7,
    'Weissbier': 4,
    'Fruit / Vegetable Beer': 8,
    'Red Ale': 12
}

for i, style in enumerate(df2['style']):
    for key in srm_dict:
        if key in str(style):
            df2.loc[df2.index[i], 'style_new'] = key
            df2.loc[df2.index[i], 'srm'] = srm_dict[key]

df2.to_csv('cleanbeer.csv')
# print(df2.groupby('style_new').count().sort_values(['name'], ascending=False))


# df3 = df2[['abv', 'ibu', 'srm']]
# print(df3.head(30))
# print(df3.dtypes)

# # X aka features
# X = np.array((df3.drop(['stylerandom'], 1)))
# # y for label
# y = np.array(df3['stylerandom'])


# X_train, X_test, y_train, y_test = cross_validation.train_test_split(
#     X, y, test_size=0.2)


# clf = neighbors.KNeighborsClassifier(100)
# clf.fit(X_train, y_train)

# accuracy = clf.score(X_test, y_test)
# print(accuracy)

# # # example_measures = np.array([7, 2, 3, 4, 5, 3, 1, 2, 1])
# # # Reshape your data either using array.reshape(-1, 1)
# # # if your data has a single feature or array.reshape(1, -1)
# # # if it contains a single sample.
# # # if you have one sample
# # # example_measures = example_measures.reshape(1, -1)

# # example_measures = np.array(
# #     [[7, 2, 3, 4, 5, 3, 1, 2, 1], [2, 2, 3, 4, 8, 3, 1, 2, 1], [8, 6, 3, 4, 8, 3, 1, 2, 1]])

# # # # if you have 2 samples
# # # example_measures = example_measures.reshape(2, -1)
# # example_measures = example_measures.reshape(len(example_measures), -1)

# # prediction = clf.predict(example_measures)
# # print(prediction)
