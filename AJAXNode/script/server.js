var express = require('express');
var app = express();

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

app.get('/:name', function(req, res) {
    switch (req.params.name) {
        case "Vladivostok":
            res.json(Vladivostok);
            break;
        case "Dubai":
            res.json(Dubai);
            break;
        case "Tokyo":
            res.json(Tokyo);
            break;
    }
})

app.listen(3000, function() {
    console.log('App listening on port 3000!');
});

var Vladivostok = {
    "cod": "200",
    "message": 0.0022,
    "cnt": 40,
    "list": [{
            "dt": 1522022400,
            "main": {
                "temp": 5.15,
                "temp_min": 4.87,
                "temp_max": 5.15,
                "pressure": 1025.11,
                "sea_level": 1031.39,
                "grnd_level": 1025.11,
                "humidity": 74,
                "temp_kf": 0.28
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.15,
                "deg": 332.503
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-26 00:00:00"
        },
        {
            "dt": 1522033200,
            "main": {
                "temp": 8.64,
                "temp_min": 8.45,
                "temp_max": 8.64,
                "pressure": 1024.2,
                "sea_level": 1030.21,
                "grnd_level": 1024.2,
                "humidity": 66,
                "temp_kf": 0.19
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.57,
                "deg": 104.001
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-26 03:00:00"
        },
        {
            "dt": 1522044000,
            "main": {
                "temp": 9.39,
                "temp_min": 9.3,
                "temp_max": 9.39,
                "pressure": 1022.97,
                "sea_level": 1028.89,
                "grnd_level": 1022.97,
                "humidity": 60,
                "temp_kf": 0.09
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.26,
                "deg": 170.506
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-26 06:00:00"
        },
        {
            "dt": 1522054800,
            "main": {
                "temp": 6.2,
                "temp_min": 6.2,
                "temp_max": 6.2,
                "pressure": 1022.15,
                "sea_level": 1028.08,
                "grnd_level": 1022.15,
                "humidity": 67,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.27,
                "deg": 151
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-26 09:00:00"
        },
        {
            "dt": 1522065600,
            "main": {
                "temp": 3.13,
                "temp_min": 3.13,
                "temp_max": 3.13,
                "pressure": 1021.95,
                "sea_level": 1028.01,
                "grnd_level": 1021.95,
                "humidity": 75,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.37,
                "deg": 148.5
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-26 12:00:00"
        },
        {
            "dt": 1522076400,
            "main": {
                "temp": 1.19,
                "temp_min": 1.19,
                "temp_max": 1.19,
                "pressure": 1021.16,
                "sea_level": 1027.26,
                "grnd_level": 1021.16,
                "humidity": 88,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.55,
                "deg": 166.5
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-26 15:00:00"
        },
        {
            "dt": 1522087200,
            "main": {
                "temp": 0.24,
                "temp_min": 0.24,
                "temp_max": 0.24,
                "pressure": 1020.37,
                "sea_level": 1026.58,
                "grnd_level": 1020.37,
                "humidity": 92,
                "temp_kf": 0
            },
            "weather": [{
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02n"
            }],
            "clouds": {
                "all": 20
            },
            "wind": {
                "speed": 3.42,
                "deg": 158.001
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-26 18:00:00"
        },
        {
            "dt": 1522098000,
            "main": {
                "temp": -0.13,
                "temp_min": -0.13,
                "temp_max": -0.13,
                "pressure": 1020.4,
                "sea_level": 1026.67,
                "grnd_level": 1020.4,
                "humidity": 94,
                "temp_kf": 0
            },
            "weather": [{
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
            }],
            "clouds": {
                "all": 24
            },
            "wind": {
                "speed": 2.32,
                "deg": 160.005
            },
            "rain": {
                "3h": 0.01
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-26 21:00:00"
        },
        {
            "dt": 1522108800,
            "main": {
                "temp": 3.42,
                "temp_min": 3.42,
                "temp_max": 3.42,
                "pressure": 1020.62,
                "sea_level": 1026.78,
                "grnd_level": 1020.62,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [{
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.15,
                "deg": 164.003
            },
            "rain": {
                "3h": 0.01
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-27 00:00:00"
        },
        {
            "dt": 1522119600,
            "main": {
                "temp": 6.99,
                "temp_min": 6.99,
                "temp_max": 6.99,
                "pressure": 1019.25,
                "sea_level": 1025.14,
                "grnd_level": 1019.25,
                "humidity": 73,
                "temp_kf": 0
            },
            "weather": [{
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }],
            "clouds": {
                "all": 48
            },
            "wind": {
                "speed": 2.06,
                "deg": 165.004
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-27 03:00:00"
        },
        {
            "dt": 1522130400,
            "main": {
                "temp": 6.79,
                "temp_min": 6.79,
                "temp_max": 6.79,
                "pressure": 1016.98,
                "sea_level": 1022.86,
                "grnd_level": 1016.98,
                "humidity": 71,
                "temp_kf": 0
            },
            "weather": [{
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 2.81,
                "deg": 167.001
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-27 06:00:00"
        },
        {
            "dt": 1522141200,
            "main": {
                "temp": 4.73,
                "temp_min": 4.73,
                "temp_max": 4.73,
                "pressure": 1016.52,
                "sea_level": 1022.34,
                "grnd_level": 1016.52,
                "humidity": 78,
                "temp_kf": 0
            },
            "weather": [{
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }],
            "clouds": {
                "all": 44
            },
            "wind": {
                "speed": 1.93,
                "deg": 155.501
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-27 09:00:00"
        },
        {
            "dt": 1522152000,
            "main": {
                "temp": 2.03,
                "temp_min": 2.03,
                "temp_max": 2.03,
                "pressure": 1016.08,
                "sea_level": 1022.12,
                "grnd_level": 1016.08,
                "humidity": 90,
                "temp_kf": 0
            },
            "weather": [{
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02n"
            }],
            "clouds": {
                "all": 12
            },
            "wind": {
                "speed": 2.46,
                "deg": 131.5
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-27 12:00:00"
        },
        {
            "dt": 1522162800,
            "main": {
                "temp": 1.16,
                "temp_min": 1.16,
                "temp_max": 1.16,
                "pressure": 1015.31,
                "sea_level": 1021.4,
                "grnd_level": 1015.31,
                "humidity": 95,
                "temp_kf": 0
            },
            "weather": [{
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
            }],
            "clouds": {
                "all": 64
            },
            "wind": {
                "speed": 3.21,
                "deg": 157.504
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-27 15:00:00"
        },
        {
            "dt": 1522173600,
            "main": {
                "temp": 1.15,
                "temp_min": 1.15,
                "temp_max": 1.15,
                "pressure": 1013.92,
                "sea_level": 1020.05,
                "grnd_level": 1013.92,
                "humidity": 95,
                "temp_kf": 0
            },
            "weather": [{
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
            }],
            "clouds": {
                "all": 56
            },
            "wind": {
                "speed": 2.66,
                "deg": 145.005
            },
            "rain": {
                "3h": 0.01
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-27 18:00:00"
        },
        {
            "dt": 1522184400,
            "main": {
                "temp": 1.4,
                "temp_min": 1.4,
                "temp_max": 1.4,
                "pressure": 1013.84,
                "sea_level": 1019.86,
                "grnd_level": 1013.84,
                "humidity": 96,
                "temp_kf": 0
            },
            "weather": [{
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
            }],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 2.52,
                "deg": 160
            },
            "rain": {
                "3h": 0.01
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-27 21:00:00"
        },
        {
            "dt": 1522195200,
            "main": {
                "temp": 3.45,
                "temp_min": 3.45,
                "temp_max": 3.45,
                "pressure": 1014,
                "sea_level": 1019.97,
                "grnd_level": 1014,
                "humidity": 87,
                "temp_kf": 0
            },
            "weather": [{
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }],
            "clouds": {
                "all": 76
            },
            "wind": {
                "speed": 2.66,
                "deg": 151.501
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-28 00:00:00"
        },
        {
            "dt": 1522206000,
            "main": {
                "temp": 7.89,
                "temp_min": 7.89,
                "temp_max": 7.89,
                "pressure": 1013.92,
                "sea_level": 1019.78,
                "grnd_level": 1013.92,
                "humidity": 74,
                "temp_kf": 0
            },
            "weather": [{
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
            }],
            "clouds": {
                "all": 20
            },
            "wind": {
                "speed": 2.86,
                "deg": 154.502
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-28 03:00:00"
        },
        {
            "dt": 1522216800,
            "main": {
                "temp": 9.62,
                "temp_min": 9.62,
                "temp_max": 9.62,
                "pressure": 1013.6,
                "sea_level": 1019.51,
                "grnd_level": 1013.6,
                "humidity": 72,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.87,
                "deg": 185.5
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-28 06:00:00"
        },
        {
            "dt": 1522227600,
            "main": {
                "temp": 8.5,
                "temp_min": 8.5,
                "temp_max": 8.5,
                "pressure": 1014.56,
                "sea_level": 1020.55,
                "grnd_level": 1014.56,
                "humidity": 66,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.31,
                "deg": 225.502
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-28 09:00:00"
        },
        {
            "dt": 1522238400,
            "main": {
                "temp": 5.73,
                "temp_min": 5.73,
                "temp_max": 5.73,
                "pressure": 1017.39,
                "sea_level": 1023.5,
                "grnd_level": 1017.39,
                "humidity": 69,
                "temp_kf": 0
            },
            "weather": [{
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03n"
            }],
            "clouds": {
                "all": 44
            },
            "wind": {
                "speed": 2.56,
                "deg": 293.501
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-28 12:00:00"
        },
        {
            "dt": 1522249200,
            "main": {
                "temp": 6.9,
                "temp_min": 6.9,
                "temp_max": 6.9,
                "pressure": 1019.65,
                "sea_level": 1025.76,
                "grnd_level": 1019.65,
                "humidity": 61,
                "temp_kf": 0
            },
            "weather": [{
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
            }],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 4.06,
                "deg": 317
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-28 15:00:00"
        },
        {
            "dt": 1522260000,
            "main": {
                "temp": 6.15,
                "temp_min": 6.15,
                "temp_max": 6.15,
                "pressure": 1021.13,
                "sea_level": 1027.23,
                "grnd_level": 1021.13,
                "humidity": 60,
                "temp_kf": 0
            },
            "weather": [{
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
            }],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 4.08,
                "deg": 324.501
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-28 18:00:00"
        },
        {
            "dt": 1522270800,
            "main": {
                "temp": 4.38,
                "temp_min": 4.38,
                "temp_max": 4.38,
                "pressure": 1023.24,
                "sea_level": 1029.42,
                "grnd_level": 1023.24,
                "humidity": 67,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.19,
                "deg": 321.508
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-28 21:00:00"
        },
        {
            "dt": 1522281600,
            "main": {
                "temp": 5.96,
                "temp_min": 5.96,
                "temp_max": 5.96,
                "pressure": 1026.02,
                "sea_level": 1032.07,
                "grnd_level": 1026.02,
                "humidity": 63,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.84,
                "deg": 309.004
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-29 00:00:00"
        },
        {
            "dt": 1522292400,
            "main": {
                "temp": 6.98,
                "temp_min": 6.98,
                "temp_max": 6.98,
                "pressure": 1026.53,
                "sea_level": 1032.68,
                "grnd_level": 1026.53,
                "humidity": 57,
                "temp_kf": 0
            },
            "weather": [{
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }],
            "clouds": {
                "all": 44
            },
            "wind": {
                "speed": 4.81,
                "deg": 314.502
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-29 03:00:00"
        },
        {
            "dt": 1522303200,
            "main": {
                "temp": 7.46,
                "temp_min": 7.46,
                "temp_max": 7.46,
                "pressure": 1026.57,
                "sea_level": 1032.68,
                "grnd_level": 1026.57,
                "humidity": 52,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 5.61,
                "deg": 320.005
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-29 06:00:00"
        },
        {
            "dt": 1522314000,
            "main": {
                "temp": 6.11,
                "temp_min": 6.11,
                "temp_max": 6.11,
                "pressure": 1028.92,
                "sea_level": 1035.1,
                "grnd_level": 1028.92,
                "humidity": 54,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 5.62,
                "deg": 333.002
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-29 09:00:00"
        },
        {
            "dt": 1522324800,
            "main": {
                "temp": 3.76,
                "temp_min": 3.76,
                "temp_max": 3.76,
                "pressure": 1032.76,
                "sea_level": 1039.08,
                "grnd_level": 1032.76,
                "humidity": 60,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.1,
                "deg": 340.5
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-29 12:00:00"
        },
        {
            "dt": 1522335600,
            "main": {
                "temp": 1.6,
                "temp_min": 1.6,
                "temp_max": 1.6,
                "pressure": 1034.85,
                "sea_level": 1041.25,
                "grnd_level": 1034.85,
                "humidity": 70,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.81,
                "deg": 324.501
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-29 15:00:00"
        },
        {
            "dt": 1522346400,
            "main": {
                "temp": 0.13,
                "temp_min": 0.13,
                "temp_max": 0.13,
                "pressure": 1036.19,
                "sea_level": 1042.5,
                "grnd_level": 1036.19,
                "humidity": 78,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.87,
                "deg": 313.002
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-29 18:00:00"
        },
        {
            "dt": 1522357200,
            "main": {
                "temp": -1.17,
                "temp_min": -1.17,
                "temp_max": -1.17,
                "pressure": 1036.61,
                "sea_level": 1043.09,
                "grnd_level": 1036.61,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.96,
                "deg": 313.002
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-29 21:00:00"
        },
        {
            "dt": 1522368000,
            "main": {
                "temp": 3.31,
                "temp_min": 3.31,
                "temp_max": 3.31,
                "pressure": 1037.56,
                "sea_level": 1043.87,
                "grnd_level": 1037.56,
                "humidity": 71,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.56,
                "deg": 328
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-30 00:00:00"
        },
        {
            "dt": 1522378800,
            "main": {
                "temp": 5.64,
                "temp_min": 5.64,
                "temp_max": 5.64,
                "pressure": 1036.48,
                "sea_level": 1042.55,
                "grnd_level": 1036.48,
                "humidity": 62,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.87,
                "deg": 167.005
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-30 03:00:00"
        },
        {
            "dt": 1522389600,
            "main": {
                "temp": 5.27,
                "temp_min": 5.27,
                "temp_max": 5.27,
                "pressure": 1034.63,
                "sea_level": 1040.52,
                "grnd_level": 1034.63,
                "humidity": 61,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.86,
                "deg": 184.509
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-30 06:00:00"
        },
        {
            "dt": 1522400400,
            "main": {
                "temp": 3.27,
                "temp_min": 3.27,
                "temp_max": 3.27,
                "pressure": 1034.09,
                "sea_level": 1040.08,
                "grnd_level": 1034.09,
                "humidity": 66,
                "temp_kf": 0
            },
            "weather": [{
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }],
            "clouds": {
                "all": 76
            },
            "wind": {
                "speed": 3.91,
                "deg": 185.006
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-30 09:00:00"
        },
        {
            "dt": 1522411200,
            "main": {
                "temp": 2.42,
                "temp_min": 2.42,
                "temp_max": 2.42,
                "pressure": 1033.83,
                "sea_level": 1040.15,
                "grnd_level": 1033.83,
                "humidity": 70,
                "temp_kf": 0
            },
            "weather": [{
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
            }],
            "clouds": {
                "all": 76
            },
            "wind": {
                "speed": 3.41,
                "deg": 178.502
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-30 12:00:00"
        },
        {
            "dt": 1522422000,
            "main": {
                "temp": 1.62,
                "temp_min": 1.62,
                "temp_max": 1.62,
                "pressure": 1033.33,
                "sea_level": 1039.67,
                "grnd_level": 1033.33,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [{
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
            }],
            "clouds": {
                "all": 56
            },
            "wind": {
                "speed": 3.26,
                "deg": 165.002
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-30 15:00:00"
        },
        {
            "dt": 1522432800,
            "main": {
                "temp": 1.28,
                "temp_min": 1.28,
                "temp_max": 1.28,
                "pressure": 1032.76,
                "sea_level": 1039.02,
                "grnd_level": 1032.76,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [{
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
            }],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 3.07,
                "deg": 154.002
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-30 18:00:00"
        },
        {
            "dt": 1522443600,
            "main": {
                "temp": 1.4,
                "temp_min": 1.4,
                "temp_max": 1.4,
                "pressure": 1031.95,
                "sea_level": 1038.3,
                "grnd_level": 1031.95,
                "humidity": 90,
                "temp_kf": 0
            },
            "weather": [{
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 2.98,
                "deg": 148.503
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-30 21:00:00"
        }
    ],
    "city": {
        "id": 2013348,
        "name": "Vladivostok",
        "coord": {
            "lat": 43.1151,
            "lon": 131.8856
        },
        "country": "RU",
        "population": 587022
    }
};

var Dubai = {
    "cod": "200",
    "message": 0.0021,
    "cnt": 40,
    "list": [{
            "dt": 1522022400,
            "main": {
                "temp": 21.51,
                "temp_min": 19.92,
                "temp_max": 21.51,
                "pressure": 1027.54,
                "sea_level": 1029.68,
                "grnd_level": 1027.54,
                "humidity": 100,
                "temp_kf": 1.59
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.65,
                "deg": 12.5032
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-26 00:00:00"
        },
        {
            "dt": 1522033200,
            "main": {
                "temp": 20.46,
                "temp_min": 19.4,
                "temp_max": 20.46,
                "pressure": 1029.15,
                "sea_level": 1031.18,
                "grnd_level": 1029.15,
                "humidity": 100,
                "temp_kf": 1.06
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.87,
                "deg": 116.501
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-26 03:00:00"
        },
        {
            "dt": 1522044000,
            "main": {
                "temp": 27.65,
                "temp_min": 27.12,
                "temp_max": 27.65,
                "pressure": 1029.86,
                "sea_level": 1031.93,
                "grnd_level": 1029.86,
                "humidity": 69,
                "temp_kf": 0.53
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.66,
                "deg": 161.506
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-26 06:00:00"
        },
        {
            "dt": 1522054800,
            "main": {
                "temp": 29.27,
                "temp_min": 29.27,
                "temp_max": 29.27,
                "pressure": 1028.31,
                "sea_level": 1030.35,
                "grnd_level": 1028.31,
                "humidity": 63,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.77,
                "deg": 306.5
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-26 09:00:00"
        },
        {
            "dt": 1522065600,
            "main": {
                "temp": 28.78,
                "temp_min": 28.78,
                "temp_max": 28.78,
                "pressure": 1026.57,
                "sea_level": 1028.58,
                "grnd_level": 1026.57,
                "humidity": 63,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.87,
                "deg": 314
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-26 12:00:00"
        },
        {
            "dt": 1522076400,
            "main": {
                "temp": 25.54,
                "temp_min": 25.54,
                "temp_max": 25.54,
                "pressure": 1026.84,
                "sea_level": 1028.92,
                "grnd_level": 1026.84,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.55,
                "deg": 294
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-26 15:00:00"
        },
        {
            "dt": 1522087200,
            "main": {
                "temp": 22.51,
                "temp_min": 22.51,
                "temp_max": 22.51,
                "pressure": 1027.59,
                "sea_level": 1029.66,
                "grnd_level": 1027.59,
                "humidity": 96,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.82,
                "deg": 272.001
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-26 18:00:00"
        },
        {
            "dt": 1522098000,
            "main": {
                "temp": 21.35,
                "temp_min": 21.35,
                "temp_max": 21.35,
                "pressure": 1026.65,
                "sea_level": 1028.69,
                "grnd_level": 1026.65,
                "humidity": 98,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.92,
                "deg": 248.005
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-26 21:00:00"
        },
        {
            "dt": 1522108800,
            "main": {
                "temp": 20.37,
                "temp_min": 20.37,
                "temp_max": 20.37,
                "pressure": 1025.8,
                "sea_level": 1027.87,
                "grnd_level": 1025.8,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.8,
                "deg": 224.003
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-27 00:00:00"
        },
        {
            "dt": 1522119600,
            "main": {
                "temp": 19.96,
                "temp_min": 19.96,
                "temp_max": 19.96,
                "pressure": 1026.87,
                "sea_level": 1028.95,
                "grnd_level": 1026.87,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.31,
                "deg": 204.504
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-27 03:00:00"
        },
        {
            "dt": 1522130400,
            "main": {
                "temp": 26.51,
                "temp_min": 26.51,
                "temp_max": 26.51,
                "pressure": 1027.68,
                "sea_level": 1029.71,
                "grnd_level": 1027.68,
                "humidity": 74,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.31,
                "deg": 205.001
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-27 06:00:00"
        },
        {
            "dt": 1522141200,
            "main": {
                "temp": 28.26,
                "temp_min": 28.26,
                "temp_max": 28.26,
                "pressure": 1026.25,
                "sea_level": 1028.22,
                "grnd_level": 1026.25,
                "humidity": 67,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.33,
                "deg": 268.501
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-27 09:00:00"
        },
        {
            "dt": 1522152000,
            "main": {
                "temp": 27.7,
                "temp_min": 27.7,
                "temp_max": 27.7,
                "pressure": 1024.26,
                "sea_level": 1026.29,
                "grnd_level": 1024.26,
                "humidity": 66,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.36,
                "deg": 273
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-27 12:00:00"
        },
        {
            "dt": 1522162800,
            "main": {
                "temp": 24.86,
                "temp_min": 24.86,
                "temp_max": 24.86,
                "pressure": 1024.39,
                "sea_level": 1026.38,
                "grnd_level": 1024.39,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.51,
                "deg": 265.504
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-27 15:00:00"
        },
        {
            "dt": 1522173600,
            "main": {
                "temp": 21.5,
                "temp_min": 21.5,
                "temp_max": 21.5,
                "pressure": 1025.11,
                "sea_level": 1027.22,
                "grnd_level": 1025.11,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.66,
                "deg": 239.505
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-27 18:00:00"
        },
        {
            "dt": 1522184400,
            "main": {
                "temp": 20.2,
                "temp_min": 20.2,
                "temp_max": 20.2,
                "pressure": 1024.05,
                "sea_level": 1026.22,
                "grnd_level": 1024.05,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.22,
                "deg": 215
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-27 21:00:00"
        },
        {
            "dt": 1522195200,
            "main": {
                "temp": 19.4,
                "temp_min": 19.4,
                "temp_max": 19.4,
                "pressure": 1023.4,
                "sea_level": 1025.48,
                "grnd_level": 1023.4,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.21,
                "deg": 217.001
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-28 00:00:00"
        },
        {
            "dt": 1522206000,
            "main": {
                "temp": 19.24,
                "temp_min": 19.24,
                "temp_max": 19.24,
                "pressure": 1024.29,
                "sea_level": 1026.46,
                "grnd_level": 1024.29,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.71,
                "deg": 210.002
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-28 03:00:00"
        },
        {
            "dt": 1522216800,
            "main": {
                "temp": 25.17,
                "temp_min": 25.17,
                "temp_max": 25.17,
                "pressure": 1025.36,
                "sea_level": 1027.37,
                "grnd_level": 1025.36,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.97,
                "deg": 221
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-28 06:00:00"
        },
        {
            "dt": 1522227600,
            "main": {
                "temp": 27.35,
                "temp_min": 27.35,
                "temp_max": 27.35,
                "pressure": 1024.28,
                "sea_level": 1026.34,
                "grnd_level": 1024.28,
                "humidity": 74,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.56,
                "deg": 311.002
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-28 09:00:00"
        },
        {
            "dt": 1522238400,
            "main": {
                "temp": 27.18,
                "temp_min": 27.18,
                "temp_max": 27.18,
                "pressure": 1022.58,
                "sea_level": 1024.52,
                "grnd_level": 1022.58,
                "humidity": 73,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.01,
                "deg": 329.501
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-28 12:00:00"
        },
        {
            "dt": 1522249200,
            "main": {
                "temp": 24.75,
                "temp_min": 24.75,
                "temp_max": 24.75,
                "pressure": 1022.9,
                "sea_level": 1024.87,
                "grnd_level": 1022.9,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.16,
                "deg": 318.5
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-28 15:00:00"
        },
        {
            "dt": 1522260000,
            "main": {
                "temp": 21.63,
                "temp_min": 21.63,
                "temp_max": 21.63,
                "pressure": 1024.05,
                "sea_level": 1026.06,
                "grnd_level": 1024.05,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [{
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02n"
            }],
            "clouds": {
                "all": 24
            },
            "wind": {
                "speed": 1.73,
                "deg": 325.001
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-28 18:00:00"
        },
        {
            "dt": 1522270800,
            "main": {
                "temp": 20.41,
                "temp_min": 20.41,
                "temp_max": 20.41,
                "pressure": 1023.97,
                "sea_level": 1025.98,
                "grnd_level": 1023.97,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "02n"
            }],
            "clouds": {
                "all": 8
            },
            "wind": {
                "speed": 1.17,
                "deg": 348.008
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-28 21:00:00"
        },
        {
            "dt": 1522281600,
            "main": {
                "temp": 19.11,
                "temp_min": 19.11,
                "temp_max": 19.11,
                "pressure": 1023.75,
                "sea_level": 1025.86,
                "grnd_level": 1023.75,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.69,
                "deg": 85.0038
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-29 00:00:00"
        },
        {
            "dt": 1522292400,
            "main": {
                "temp": 19.33,
                "temp_min": 19.33,
                "temp_max": 19.33,
                "pressure": 1025.07,
                "sea_level": 1027.17,
                "grnd_level": 1025.07,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [{
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
            }],
            "clouds": {
                "all": 12
            },
            "wind": {
                "speed": 1.16,
                "deg": 70.0016
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-29 03:00:00"
        },
        {
            "dt": 1522303200,
            "main": {
                "temp": 24.66,
                "temp_min": 24.66,
                "temp_max": 24.66,
                "pressure": 1026.33,
                "sea_level": 1028.35,
                "grnd_level": 1026.33,
                "humidity": 88,
                "temp_kf": 0
            },
            "weather": [{
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.96,
                "deg": 105.005
            },
            "rain": {
                "3h": 0.02
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-29 06:00:00"
        },
        {
            "dt": 1522314000,
            "main": {
                "temp": 29.26,
                "temp_min": 29.26,
                "temp_max": 29.26,
                "pressure": 1024.87,
                "sea_level": 1026.91,
                "grnd_level": 1024.87,
                "humidity": 68,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.47,
                "deg": 346.502
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-29 09:00:00"
        },
        {
            "dt": 1522324800,
            "main": {
                "temp": 29.46,
                "temp_min": 29.46,
                "temp_max": 29.46,
                "pressure": 1022.87,
                "sea_level": 1024.81,
                "grnd_level": 1022.87,
                "humidity": 63,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.4,
                "deg": 335
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-29 12:00:00"
        },
        {
            "dt": 1522335600,
            "main": {
                "temp": 25.85,
                "temp_min": 25.85,
                "temp_max": 25.85,
                "pressure": 1023.18,
                "sea_level": 1025.2,
                "grnd_level": 1023.18,
                "humidity": 80,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.61,
                "deg": 341.501
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-29 15:00:00"
        },
        {
            "dt": 1522346400,
            "main": {
                "temp": 22.28,
                "temp_min": 22.28,
                "temp_max": 22.28,
                "pressure": 1024.11,
                "sea_level": 1026.13,
                "grnd_level": 1024.11,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.5,
                "deg": 340.002
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-29 18:00:00"
        },
        {
            "dt": 1522357200,
            "main": {
                "temp": 20.91,
                "temp_min": 20.91,
                "temp_max": 20.91,
                "pressure": 1022.83,
                "sea_level": 1024.97,
                "grnd_level": 1022.83,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.21,
                "deg": 31.0016
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-29 21:00:00"
        },
        {
            "dt": 1522368000,
            "main": {
                "temp": 20.14,
                "temp_min": 20.14,
                "temp_max": 20.14,
                "pressure": 1021.99,
                "sea_level": 1024.09,
                "grnd_level": 1021.99,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.76,
                "deg": 106.5
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-30 00:00:00"
        },
        {
            "dt": 1522378800,
            "main": {
                "temp": 20.39,
                "temp_min": 20.39,
                "temp_max": 20.39,
                "pressure": 1022.7,
                "sea_level": 1024.72,
                "grnd_level": 1022.7,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "02d"
            }],
            "clouds": {
                "all": 8
            },
            "wind": {
                "speed": 1.52,
                "deg": 86.0046
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-30 03:00:00"
        },
        {
            "dt": 1522389600,
            "main": {
                "temp": 28.32,
                "temp_min": 28.32,
                "temp_max": 28.32,
                "pressure": 1023.44,
                "sea_level": 1025.48,
                "grnd_level": 1023.44,
                "humidity": 69,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.61,
                "deg": 135.509
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-30 06:00:00"
        },
        {
            "dt": 1522400400,
            "main": {
                "temp": 31.02,
                "temp_min": 31.02,
                "temp_max": 31.02,
                "pressure": 1021.93,
                "sea_level": 1023.87,
                "grnd_level": 1021.93,
                "humidity": 60,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.06,
                "deg": 284.006
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-30 09:00:00"
        },
        {
            "dt": 1522411200,
            "main": {
                "temp": 30.37,
                "temp_min": 30.37,
                "temp_max": 30.37,
                "pressure": 1020.13,
                "sea_level": 1022.03,
                "grnd_level": 1020.13,
                "humidity": 58,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.36,
                "deg": 326.502
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-30 12:00:00"
        },
        {
            "dt": 1522422000,
            "main": {
                "temp": 26.77,
                "temp_min": 26.77,
                "temp_max": 26.77,
                "pressure": 1020.69,
                "sea_level": 1022.72,
                "grnd_level": 1020.69,
                "humidity": 72,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.41,
                "deg": 16.5024
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-30 15:00:00"
        },
        {
            "dt": 1522432800,
            "main": {
                "temp": 23.33,
                "temp_min": 23.33,
                "temp_max": 23.33,
                "pressure": 1021.73,
                "sea_level": 1023.82,
                "grnd_level": 1021.73,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.37,
                "deg": 38.0021
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-30 18:00:00"
        },
        {
            "dt": 1522443600,
            "main": {
                "temp": 22.9,
                "temp_min": 22.9,
                "temp_max": 22.9,
                "pressure": 1020.53,
                "sea_level": 1022.65,
                "grnd_level": 1020.53,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.68,
                "deg": 113.003
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-30 21:00:00"
        }
    ],
    "city": {
        "id": 292223,
        "name": "Dubai",
        "coord": {
            "lat": 25.2684,
            "lon": 55.2962
        },
        "country": "AE",
        "population": 1137347
    }
};

var Tokyo = {
    "cod": "200",
    "message": 0.0028,
    "cnt": 40,
    "list": [{
            "dt": 1522022400,
            "main": {
                "temp": 12.35,
                "temp_min": 12.35,
                "temp_max": 13.8,
                "pressure": 1032,
                "sea_level": 1035.85,
                "grnd_level": 1032,
                "humidity": 84,
                "temp_kf": -1.45
            },
            "weather": [{
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
            }],
            "clouds": {
                "all": 12
            },
            "wind": {
                "speed": 1.28,
                "deg": 286.503
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-26 00:00:00"
        },
        {
            "dt": 1522033200,
            "main": {
                "temp": 15.29,
                "temp_min": 15.29,
                "temp_max": 16.25,
                "pressure": 1030.53,
                "sea_level": 1034.22,
                "grnd_level": 1030.53,
                "humidity": 72,
                "temp_kf": -0.96
            },
            "weather": [{
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }],
            "clouds": {
                "all": 32
            },
            "wind": {
                "speed": 2.77,
                "deg": 207.001
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-26 03:00:00"
        },
        {
            "dt": 1522044000,
            "main": {
                "temp": 16.69,
                "temp_min": 16.69,
                "temp_max": 17.17,
                "pressure": 1028.72,
                "sea_level": 1032.42,
                "grnd_level": 1028.72,
                "humidity": 66,
                "temp_kf": -0.48
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.96,
                "deg": 201.006
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-26 06:00:00"
        },
        {
            "dt": 1522054800,
            "main": {
                "temp": 14.92,
                "temp_min": 14.92,
                "temp_max": 14.92,
                "pressure": 1028.96,
                "sea_level": 1032.79,
                "grnd_level": 1028.96,
                "humidity": 70,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.22,
                "deg": 186.5
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-26 09:00:00"
        },
        {
            "dt": 1522065600,
            "main": {
                "temp": 11.6,
                "temp_min": 11.6,
                "temp_max": 11.6,
                "pressure": 1029.65,
                "sea_level": 1033.69,
                "grnd_level": 1029.65,
                "humidity": 93,
                "temp_kf": 0
            },
            "weather": [{
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02n"
            }],
            "clouds": {
                "all": 24
            },
            "wind": {
                "speed": 1.87,
                "deg": 201
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-26 12:00:00"
        },
        {
            "dt": 1522076400,
            "main": {
                "temp": 10.42,
                "temp_min": 10.42,
                "temp_max": 10.42,
                "pressure": 1029.51,
                "sea_level": 1033.59,
                "grnd_level": 1029.51,
                "humidity": 92,
                "temp_kf": 0
            },
            "weather": [{
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
            }],
            "clouds": {
                "all": 56
            },
            "wind": {
                "speed": 0.15,
                "deg": 112
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-26 15:00:00"
        },
        {
            "dt": 1522087200,
            "main": {
                "temp": 10.19,
                "temp_min": 10.19,
                "temp_max": 10.19,
                "pressure": 1029.13,
                "sea_level": 1033.11,
                "grnd_level": 1029.13,
                "humidity": 92,
                "temp_kf": 0
            },
            "weather": [{
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
            }],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 1.07,
                "deg": 26.5013
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-26 18:00:00"
        },
        {
            "dt": 1522098000,
            "main": {
                "temp": 10.18,
                "temp_min": 10.18,
                "temp_max": 10.18,
                "pressure": 1029.81,
                "sea_level": 1033.68,
                "grnd_level": 1029.81,
                "humidity": 95,
                "temp_kf": 0
            },
            "weather": [{
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }],
            "clouds": {
                "all": 68
            },
            "wind": {
                "speed": 2.07,
                "deg": 358.505
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-26 21:00:00"
        },
        {
            "dt": 1522108800,
            "main": {
                "temp": 15.04,
                "temp_min": 15.04,
                "temp_max": 15.04,
                "pressure": 1030.34,
                "sea_level": 1034.27,
                "grnd_level": 1030.34,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [{
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }],
            "clouds": {
                "all": 32
            },
            "wind": {
                "speed": 1.9,
                "deg": 1.00327
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-27 00:00:00"
        },
        {
            "dt": 1522119600,
            "main": {
                "temp": 17.21,
                "temp_min": 17.21,
                "temp_max": 17.21,
                "pressure": 1029.46,
                "sea_level": 1033.2,
                "grnd_level": 1029.46,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [{
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }],
            "clouds": {
                "all": 32
            },
            "wind": {
                "speed": 1.11,
                "deg": 321.004
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-27 03:00:00"
        },
        {
            "dt": 1522130400,
            "main": {
                "temp": 17.54,
                "temp_min": 17.54,
                "temp_max": 17.54,
                "pressure": 1027.92,
                "sea_level": 1031.69,
                "grnd_level": 1027.92,
                "humidity": 70,
                "temp_kf": 0
            },
            "weather": [{
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }],
            "clouds": {
                "all": 32
            },
            "wind": {
                "speed": 1.31,
                "deg": 224.501
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-27 06:00:00"
        },
        {
            "dt": 1522141200,
            "main": {
                "temp": 15.21,
                "temp_min": 15.21,
                "temp_max": 15.21,
                "pressure": 1028.28,
                "sea_level": 1032.11,
                "grnd_level": 1028.28,
                "humidity": 71,
                "temp_kf": 0
            },
            "weather": [{
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
            }],
            "clouds": {
                "all": 56
            },
            "wind": {
                "speed": 2.93,
                "deg": 202.501
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-27 09:00:00"
        },
        {
            "dt": 1522152000,
            "main": {
                "temp": 12.95,
                "temp_min": 12.95,
                "temp_max": 12.95,
                "pressure": 1028.72,
                "sea_level": 1032.69,
                "grnd_level": 1028.72,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [{
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02n"
            }],
            "clouds": {
                "all": 12
            },
            "wind": {
                "speed": 1.51,
                "deg": 194.5
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-27 12:00:00"
        },
        {
            "dt": 1522162800,
            "main": {
                "temp": 10.66,
                "temp_min": 10.66,
                "temp_max": 10.66,
                "pressure": 1028.84,
                "sea_level": 1032.74,
                "grnd_level": 1028.84,
                "humidity": 90,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.76,
                "deg": 256.004
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-27 15:00:00"
        },
        {
            "dt": 1522173600,
            "main": {
                "temp": 9.63,
                "temp_min": 9.63,
                "temp_max": 9.63,
                "pressure": 1028.75,
                "sea_level": 1032.73,
                "grnd_level": 1028.75,
                "humidity": 92,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.76,
                "deg": 303.005
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-27 18:00:00"
        },
        {
            "dt": 1522184400,
            "main": {
                "temp": 8.72,
                "temp_min": 8.72,
                "temp_max": 8.72,
                "pressure": 1029.64,
                "sea_level": 1033.6,
                "grnd_level": 1029.64,
                "humidity": 93,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.37,
                "deg": 337.5
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-27 21:00:00"
        },
        {
            "dt": 1522195200,
            "main": {
                "temp": 15.38,
                "temp_min": 15.38,
                "temp_max": 15.38,
                "pressure": 1030.86,
                "sea_level": 1034.56,
                "grnd_level": 1030.86,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.16,
                "deg": 4.00143
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-28 00:00:00"
        },
        {
            "dt": 1522206000,
            "main": {
                "temp": 17.69,
                "temp_min": 17.69,
                "temp_max": 17.69,
                "pressure": 1029.48,
                "sea_level": 1033.31,
                "grnd_level": 1029.48,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.31,
                "deg": 20.5018
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-28 03:00:00"
        },
        {
            "dt": 1522216800,
            "main": {
                "temp": 18.47,
                "temp_min": 18.47,
                "temp_max": 18.47,
                "pressure": 1028.03,
                "sea_level": 1031.79,
                "grnd_level": 1028.03,
                "humidity": 63,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.57,
                "deg": 201
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-28 06:00:00"
        },
        {
            "dt": 1522227600,
            "main": {
                "temp": 15.9,
                "temp_min": 15.9,
                "temp_max": 15.9,
                "pressure": 1028.5,
                "sea_level": 1032.22,
                "grnd_level": 1028.5,
                "humidity": 69,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.56,
                "deg": 192.502
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-28 09:00:00"
        },
        {
            "dt": 1522238400,
            "main": {
                "temp": 14.18,
                "temp_min": 14.18,
                "temp_max": 14.18,
                "pressure": 1029.72,
                "sea_level": 1033.6,
                "grnd_level": 1029.72,
                "humidity": 79,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.21,
                "deg": 194.501
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-28 12:00:00"
        },
        {
            "dt": 1522249200,
            "main": {
                "temp": 13.47,
                "temp_min": 13.47,
                "temp_max": 13.47,
                "pressure": 1029.14,
                "sea_level": 1033.1,
                "grnd_level": 1029.14,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.86,
                "deg": 207.5
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-28 15:00:00"
        },
        {
            "dt": 1522260000,
            "main": {
                "temp": 11.78,
                "temp_min": 11.78,
                "temp_max": 11.78,
                "pressure": 1028.51,
                "sea_level": 1032.46,
                "grnd_level": 1028.51,
                "humidity": 93,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.03,
                "deg": 217.001
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-28 18:00:00"
        },
        {
            "dt": 1522270800,
            "main": {
                "temp": 10.38,
                "temp_min": 10.38,
                "temp_max": 10.38,
                "pressure": 1029,
                "sea_level": 1033.03,
                "grnd_level": 1029,
                "humidity": 95,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.44,
                "deg": 242.508
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-28 21:00:00"
        },
        {
            "dt": 1522281600,
            "main": {
                "temp": 16.06,
                "temp_min": 16.06,
                "temp_max": 16.06,
                "pressure": 1029.42,
                "sea_level": 1033.24,
                "grnd_level": 1029.42,
                "humidity": 80,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.26,
                "deg": 241.504
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-29 00:00:00"
        },
        {
            "dt": 1522292400,
            "main": {
                "temp": 18.08,
                "temp_min": 18.08,
                "temp_max": 18.08,
                "pressure": 1028.24,
                "sea_level": 1031.91,
                "grnd_level": 1028.24,
                "humidity": 70,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.46,
                "deg": 198.002
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-29 03:00:00"
        },
        {
            "dt": 1522303200,
            "main": {
                "temp": 18.51,
                "temp_min": 18.51,
                "temp_max": 18.51,
                "pressure": 1026.17,
                "sea_level": 1029.85,
                "grnd_level": 1026.17,
                "humidity": 65,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 7.06,
                "deg": 198.005
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-29 06:00:00"
        },
        {
            "dt": 1522314000,
            "main": {
                "temp": 16.81,
                "temp_min": 16.81,
                "temp_max": 16.81,
                "pressure": 1026.09,
                "sea_level": 1029.79,
                "grnd_level": 1026.09,
                "humidity": 71,
                "temp_kf": 0
            },
            "weather": [{
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02n"
            }],
            "clouds": {
                "all": 12
            },
            "wind": {
                "speed": 7.32,
                "deg": 200.002
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-29 09:00:00"
        },
        {
            "dt": 1522324800,
            "main": {
                "temp": 15.71,
                "temp_min": 15.71,
                "temp_max": 15.71,
                "pressure": 1026.27,
                "sea_level": 1030.2,
                "grnd_level": 1026.27,
                "humidity": 75,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 6.1,
                "deg": 202.5
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-29 12:00:00"
        },
        {
            "dt": 1522335600,
            "main": {
                "temp": 14.85,
                "temp_min": 14.85,
                "temp_max": 14.85,
                "pressure": 1025.85,
                "sea_level": 1029.82,
                "grnd_level": 1025.85,
                "humidity": 79,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.61,
                "deg": 208.001
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-29 15:00:00"
        },
        {
            "dt": 1522346400,
            "main": {
                "temp": 12.73,
                "temp_min": 12.73,
                "temp_max": 12.73,
                "pressure": 1026.14,
                "sea_level": 1030.1,
                "grnd_level": 1026.14,
                "humidity": 91,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.07,
                "deg": 283.002
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-29 18:00:00"
        },
        {
            "dt": 1522357200,
            "main": {
                "temp": 11.16,
                "temp_min": 11.16,
                "temp_max": 11.16,
                "pressure": 1027.53,
                "sea_level": 1031.5,
                "grnd_level": 1027.53,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [{
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
            }],
            "clouds": {
                "all": 12
            },
            "wind": {
                "speed": 5.51,
                "deg": 355.002
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-29 21:00:00"
        },
        {
            "dt": 1522368000,
            "main": {
                "temp": 12.19,
                "temp_min": 12.19,
                "temp_max": 12.19,
                "pressure": 1030.75,
                "sea_level": 1034.59,
                "grnd_level": 1030.75,
                "humidity": 94,
                "temp_kf": 0
            },
            "weather": [{
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
            }],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 8.26,
                "deg": 39.5
            },
            "rain": {
                "3h": 0.33
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-30 00:00:00"
        },
        {
            "dt": 1522378800,
            "main": {
                "temp": 9.69,
                "temp_min": 9.69,
                "temp_max": 9.69,
                "pressure": 1033.08,
                "sea_level": 1036.88,
                "grnd_level": 1033.08,
                "humidity": 97,
                "temp_kf": 0
            },
            "weather": [{
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
            }],
            "clouds": {
                "all": 80
            },
            "wind": {
                "speed": 7.87,
                "deg": 31.5046
            },
            "rain": {
                "3h": 0.65
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-30 03:00:00"
        },
        {
            "dt": 1522389600,
            "main": {
                "temp": 9.42,
                "temp_min": 9.42,
                "temp_max": 9.42,
                "pressure": 1033.09,
                "sea_level": 1036.91,
                "grnd_level": 1033.09,
                "humidity": 89,
                "temp_kf": 0
            },
            "weather": [{
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
            }],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 7.11,
                "deg": 29.0088
            },
            "rain": {
                "3h": 0.07
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-30 06:00:00"
        },
        {
            "dt": 1522400400,
            "main": {
                "temp": 9.32,
                "temp_min": 9.32,
                "temp_max": 9.32,
                "pressure": 1033.85,
                "sea_level": 1037.77,
                "grnd_level": 1033.85,
                "humidity": 87,
                "temp_kf": 0
            },
            "weather": [{
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 5.66,
                "deg": 28.0061
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-30 09:00:00"
        },
        {
            "dt": 1522411200,
            "main": {
                "temp": 8.97,
                "temp_min": 8.97,
                "temp_max": 8.97,
                "pressure": 1034.8,
                "sea_level": 1038.73,
                "grnd_level": 1034.8,
                "humidity": 88,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 5.34,
                "deg": 21.0016
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-30 12:00:00"
        },
        {
            "dt": 1522422000,
            "main": {
                "temp": 8.32,
                "temp_min": 8.32,
                "temp_max": 8.32,
                "pressure": 1034.63,
                "sea_level": 1038.41,
                "grnd_level": 1034.63,
                "humidity": 92,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.76,
                "deg": 10.5024
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-30 15:00:00"
        },
        {
            "dt": 1522432800,
            "main": {
                "temp": 7.48,
                "temp_min": 7.48,
                "temp_max": 7.48,
                "pressure": 1033.89,
                "sea_level": 1037.8,
                "grnd_level": 1033.89,
                "humidity": 97,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.59,
                "deg": 359.502
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-03-30 18:00:00"
        },
        {
            "dt": 1522443600,
            "main": {
                "temp": 7.22,
                "temp_min": 7.22,
                "temp_max": 7.22,
                "pressure": 1034.22,
                "sea_level": 1038.22,
                "grnd_level": 1034.22,
                "humidity": 99,
                "temp_kf": 0
            },
            "weather": [{
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.93,
                "deg": 358.003
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-03-30 21:00:00"
        }
    ],
    "city": {
        "id": 1850147,
        "name": "Tokyo",
        "coord": {
            "lat": 35.6828,
            "lon": 139.759
        },
        "country": "JP",
        "population": 8336599
    }
};