from flask import Flask, render_template, jsonify, json
from flask_cors import CORS
import requests
import pandas as pd

# app = Flask(__name__)

app = Flask(__name__,
            static_url_path='',
            static_folder='static',
            template_folder='templates')


CORS(app)

url = 'http://api.openweathermap.org/data/2.5/forecast?id=7284825&units=metric&APPID=f828526a36ae26c25bd6b87ed578af84'
source = requests.get(url)
parsed_source = json.loads(source.content)

keylist = parsed_source.keys()
weatherlist = parsed_source['list']


def iconsrc(iconid):
    return "http://openweathermap.org/img/w/" + iconid + ".png"


main_data = []

for item in weatherlist:
    temp_dict = {}
    temp_dict['date'] = item['dt_txt']
    temp_dict['weather'] = item['weather'][0]['description']
    temp_dict['temp'] = item['main']['temp']
    temp_dict['temp_min'] = item['main']['temp_min']
    temp_dict['temp_max'] = item['main']['temp_max']
    temp_dict['icon'] = iconsrc(item['weather'][0]['icon'])
    main_data.append(temp_dict)

columns_list = main_data[0].keys()

df = pd.DataFrame(main_data, columns=columns_list)


lowest_temp = df.loc[df['temp_min'].idxmin()]
highest_temp = df.loc[df['temp_max'].idxmax()]
avg_temp = df.loc[:, "temp"].mean()


@app.route('/', methods=['GET'])
def homepage():
    return render_template('index.html', lowest_temp=lowest_temp, main_data=main_data, highest_temp=highest_temp)


if __name__ == '__main__':
    app.run(debug=True)
