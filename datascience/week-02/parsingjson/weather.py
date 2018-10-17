import requests
import json
import pandas as pd
import matplotlib.pyplot as plt


url = 'http://api.openweathermap.org/data/2.5/forecast?id=7284825&units=metric&APPID=f828526a36ae26c25bd6b87ed578af84'
source = requests.get(url)
# print(source.content)

parsed_source = json.loads(source.content)

# print(parsed_source['list'])
keylist = parsed_source.keys()
weatherlist = parsed_source['list']
# print(weatherlist[0])
print(weatherlist[0]['main']['temp'])

main_data = []

for item in weatherlist:
    temp_dict = {}
    temp_dict['date'] = item['dt_txt']
    temp_dict['weather'] = item['weather'][0]['description']
    temp_dict['temp'] = item['main']['temp']
    temp_dict['temp_min'] = item['main']['temp_min']
    temp_dict['temp_max'] = item['main']['temp_max']
    temp_dict['icon'] = item['weather'][0]['icon']
    main_data.append(temp_dict)

columns_list = main_data[0].keys()

df = pd.DataFrame(main_data, columns=columns_list)

# resetting the display settings
pd.options.display.max_columns = 15


def header(msg):
    print('-'*50)
    print('[' + msg + ']')


header("the lowest temp in the upcoming days")
print(df.loc[df['temp_min'].idxmin()])
header("the highest temp in the upcoming days")
print(df.loc[df['temp_max'].idxmax()])

header("average temp of the upcoming days")
print(df.loc[:, "temp"].mean())

header("median of temp")
print(df.loc[:, "temp"].median())

header("mode of temp")
print(df.loc[:, "temp"].mode())

print(main_data[0]['icon'])
print(df)


def iconsrc(iconid):
    return "http://openweathermap.org/img/w/" + iconid + ".png"


# print(iconsrc(main_data[0]['icon']))

# box_plot_data = [df['temp'], df['temp_min'], df['temp_max']]
# plt.boxplot(box_plot_data, notch='True', patch_artist=True,
#             labels=['temp', 'temp min', 'temp max'])
# # plt.boxplot(box_plot_data)
# plt.show()


# line_chart1 = plt.plot(df['date'], df['temp'], 'g')
# line_chart2 = plt.plot(df['date'], df['temp_min'], 'b')
# # line_chart3 = plt.plot(df['date'], df['temp_max'], 'r')

# plt.title('Weather prediction for Budapest')
# plt.xlabel('Days')
# plt.ylabel('Celsius')
#
# plt.legend(['Temp', 'Min temp', 'Max temp'], loc=4)
# plt.show()
