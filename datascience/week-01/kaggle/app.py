import pandas as pd
import numpy as np


def header(msg):
    print('-'*50)
    print('[' + msg + ']')


# read text file into a dataframe
header("read text file in  to a dataframe")
filename = 'googleplaystore.csv'
df = pd.read_csv(filename)

# header("Printing datatypes after reading")
# print(df.dtypes)

# not working in case we have string chars in the col
# df['Reviews'] = df.Reviews.astype(float)

df['Reviews'] = pd.to_numeric(df['Reviews'], errors='coerce')
df['Size'] = df['Size'].str.replace('M', '')
df['Size'] = pd.to_numeric(df['Size'], errors='coerce')
# print(df.loc[0:10, ['Size']])

header("Printing datatypes after converting Reviews and Size to numeric type")
print(df.dtypes)

# min and max rating record
header("app having the highest rating")
print(df.loc[df['Rating'].idxmax()])
header("app having the lowest rating")
print(df.loc[df['Rating'].idxmin()])

# Which app has the lowest number of reviews?
header("app having the highest review numb")
print(df.loc[df['Reviews'].idxmax()])
header("app having the lowest review numb")
print(df.loc[df['Reviews'].idxmin()])


# What is the average, median and mode of the App ratings (Rating column)?
header("average of app ratings")
print(df.loc[:, "Rating"].mean())

header("median of app ratings")
print(df.loc[:, "Rating"].median())

header("mode of app ratings")
print(df.loc[:, "Rating"].mode())


# What is the estimated average/median/mode file size?
header("average of file size")
print(df.loc[:, "Size"].mean())

header("median of file siz")
print(df.loc[:, "Size"].median())

header("mode of file siz")
print(df.loc[:, "Size"].mode())

# What are the most popular genres?
catlist = df.groupby('Category').count().sort_values('App', ascending=False)
# print(catlist)

three_most_popular = catlist[0:3]
header("Three most popular genres")
print(three_most_popular)

# print(df['Category'].value.counts())

# Convert the Last Updated column to YYYYY-MM-DD format and insert it as an extra column next to Last Updated, with the name "Last Updated Readable" and save it as a new, separate CSV file.

# Create a new, separate CSV that has all rows of data in reverse.
