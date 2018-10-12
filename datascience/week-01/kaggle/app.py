import pandas as pd
import numpy as np
import time as time


def header(msg):
    print('-'*50)
    print('[' + msg + ']')


# resetting the display settings
pd.options.display.max_columns = 15

# read text file into a dataframe
header("read text file in  to a dataframe")
filename = 'googleplaystore.csv'
df = pd.read_csv(filename)

# REVIEW DATASET AND CLEANING WHERE IT IS NECESSARY

print("TIME OF RUNNING THE SCRIPT: ", time.ctime())


header("checking extreme values - rating higher than the maximum")
print(df[df.Rating > 5])

header("checking extreme values - Type")
print(df[(df['Type'] != 'Free') & (df['Type'] != 'Paid')])

header('need to reset the value of Type 0 to Free')
print(df.loc[9148])

df.iat[9148, 6] = 'Free'
header('record after correction')
print(df.loc[9148])

header("error in data in row 10472")
print(df.loc[10472])
# need to push all data with one column + adding a category
for x in range(12, 1, -1):
    df.iat[10472, x] = df.iat[10472, (x-1)]

df.iat[10472, 1] = 'TOOLS'
header("corrected data in row 10472")
print(df.loc[10472])

header("ELIMINATING DUPLICATES")
print('Number of duplicates: ', df.duplicated().sum())
# cleaning the dataframe from duplicates
df.drop_duplicates(keep='first', inplace=True)
print('Number of records after filtering out the duplicates: ',
      df.count()['App'])


header("checking extreme values - rating not null")
print(df[df['Rating'].notnull()].count()['App'])
# only 8893 app has rating different from NaN, but built in math computation can handle NaN in median etc calc

header("checking extreme values - App not null")
print(df[df['App'].notnull()].count()['App'])


header("checking extreme values - Unique categories ordered by app number")
catlist = df.groupby('Category').count().sort_values(
    'App', ascending=False)['App']
print(catlist)


header("checking extreme values - Content rating ordered by app number")
contentrating = df.groupby('Content Rating').count(
).sort_values('App', ascending=False)['App']
print(contentrating)

header("checking extreme values - Genres ordered by app number")
genres = df.groupby('Genres').count().sort_values(
    'App', ascending=False)['App']
print(genres)
# we have a couple of items having more than one genres. Q: what should we do with them?

header("checking extreme values - Android Ver ordered by app number")
androidver = df.groupby('Android Ver').count()['App']
print(androidver)
# I can imagine a reduction in the android version option list


header("Printing datatypes after reading")
print(df.dtypes)

df['Reviews'] = pd.to_numeric(df['Reviews'], errors='coerce')
df['Size'] = df['Size'].str.replace('M', '')
df['Size'] = pd.to_numeric(df['Size'], errors='coerce')


header("Printing datatypes after converting Reviews and Size to numeric type")
print(df.dtypes)

# min and max rating record
header("app having the highest rating")
print(df.loc[df['Rating'].idxmax()])
header("app having the lowest rating")
print(df.loc[df['Rating'].idxmin()])

# check how many other apps have rating=1
header("app having the lowest rating")
print('Amount of app having Rating = 1:', df[df['Rating'] == 1].count()['App'])
lowestRating = df[df['Rating'] == 1]
print(lowestRating.loc[0:, ['App', 'Category', 'Reviews', 'Ratings']])

# Which app has the lowest number of reviews?
header("app having the highest review numb")
print(df.loc[df['Reviews'].idxmax()])
header("app having the lowest review numb")
print(df.loc[df['Reviews'].idxmin()])

# check how many other apps have reviews=0
header("app having the lowest reviews")
print('Amount of app having Reviews = 0:',
      df[df['Reviews'] == 0].count()['App'])
lowestRating = df[df['Reviews'] == 0]
print(lowestRating.loc[0:, ['App', 'Category', 'Ratings']])

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

# What are the most popular categories?
header("MOST POPULAR CATEGORIES")
catlist = df.groupby('Category').count().sort_values(
    'App', ascending=False)['App']
print('Three most popular categories based on number of apps:', catlist[0:3])

# What are the most popular genres?
header("MOST POPULAR GENRES")
genrelist = df.groupby('Genres').count().sort_values(
    'App', ascending=False)['App']
print('Three most popular genres based on number of apps:', genrelist[0:3])


# Convert the Last Updated column to YYYYY-MM-DD format and insert it as an extra column next to Last Updated, with the name "Last Updated Readable" and save it as a new, separate CSV file.
transformed_date = pd.to_datetime(df['Last Updated'], errors='coerce')
df['Last Updated Readable'] = transformed_date
print(df[1:10])

# # Create a new, separate CSV that has all rows of data in reverse.

reversed_df = df[::-1]
reversed_df.to_csv('reversed_data.csv', encoding='utf-8', index=False)
