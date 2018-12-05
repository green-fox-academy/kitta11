import pandas as pd
import numpy as np
from sklearn import preprocessing, cross_validation, neighbors
import seaborn as sns
import matplotlib.pyplot as plt

filename = 'cleanbeer.csv'
df = pd.read_csv(filename)

df = df.dropna(subset=['style_new', 'srm'])

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


df_simplified = df[['abv', 'ibu', 'srm', 'style_new']]

X_norm = df_simplified[['abv']].values.astype(float)
Y_norm = df_simplified[['ibu']].values.astype(float)
Z_norm = df_simplified[['srm']].values.astype(float)

min_max_scaler = preprocessing.MinMaxScaler()

df_simplified['abv_norm'] = min_max_scaler.fit_transform(X_norm)
df_simplified['ibu_norm'] = min_max_scaler.fit_transform(Y_norm)
df_simplified['srm_norm'] = min_max_scaler.fit_transform(Z_norm)

## Correlations - coeffs
print(np.corrcoef(df_simplified.ibu_norm, df_simplified.srm_norm))
print(np.corrcoef(df_simplified.abv_norm, df_simplified.srm_norm))
print(np.corrcoef(df_simplified.ibu_norm, df_simplified.abv_norm))

## Correlations - plots
pairplot_df_simplified = df_simplified.loc[:, ['abv_norm', 'srm_norm']]
sns.set(style="dark")
sns.pairplot(data=pairplot_df_simplified)
plt.show()

pairplot_df_simplified = df_simplified.loc[:, ['abv_norm', 'ibu_norm']]
sns.set(style="dark")
sns.pairplot(data=pairplot_df_simplified)
plt.show()

pairplot_df_simplified = df_simplified.loc[:, ['srm_norm', 'ibu_norm']]
sns.set(style="dark")
sns.pairplot(data=pairplot_df_simplified)
plt.show()

# Boxplot - outliers with red
myvar = ['abv_norm']
f, ax = plt.subplots(figsize=(8, 6))
flierprops = dict(markerfacesrm_norm="red", markersize=5,
                  linestyle='none')
ax = sns.boxplot(
    data=df_simplified.loc[:, myvar], orient='h', flierprops=flierprops)
ax.set(title='Boxplot', xlabel='Alcohol content')
plt.show()

myvar = ['ibu_norm']
f, ax = plt.subplots(figsize=(8, 6))
flierprops = dict(markerfacesrm_norm="red", markersize=5,
                  linestyle='none')
ax = sns.boxplot(
    data=df_simplified.loc[:, myvar], orient='h', flierprops=flierprops)
ax.set(title='Boxplot', xlabel='ibu_norm')
plt.show()

myvar = ['srm_norm']
f, ax = plt.subplots(figsize=(8, 6))
flierprops = dict(markerfacesrm_norm="red", markersize=5,
                  linestyle='none')
ax = sns.boxplot(
    data=df_simplified.loc[:, myvar], orient='h', flierprops=flierprops)
ax.set(title='Boxplot', xlabel='srm_norm')
plt.show()
