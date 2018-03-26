// получение данных с внешнего API

function getResponse(cityName) {
    var URL = `${API_URL}forecast?q=${cityName}&units=metric&${API_KEY}`;
    fetch(URL).then(async function(forecast) {
        var forecast = await forecast.json();
        getCurrentForecast(forecast);
        getForecastOnTheWeek(forecast);
    })
}

// получение данных с локального сервера

function getDataFromMyServer(cityName) {
    const url = `${LOCAL_URL}${cityName}`;
    fetch(url).then(async function(forecast) {
        var forecast = await forecast.json();
        getCurrentForecast(forecast);
        getForecastOnTheWeek(forecast);
    })
}
// форматирование даты

function getDayNumber(date) {
    let day = "";
    date = new Date(date).getDate();
    return date;
}

function getDayName(date) {
    let dayName = "";
    date = new Date(date);
    switch (date.getDay()) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
    }
    return dayName;
}

function getMonthName(date) {
    let monthName = "";
    date = new Date(date);
    switch (date.getMonth()) {
        case 0:
            monthName = "January";
            break;
        case 1:
            monthName = "February";
            break;
        case 2:
            monthName = "March";
            break;
        case 3:
            monthName = "April";
            break;
        case 4:
            monthName = "May";
            break;
        case 5:
            monthName = "June";
            break;
        case 6:
            monthName = "July";
            break;
        case 7:
            monthName = "August";
            break;
        case 8:
            monthName = "September";
            break;
        case 9:
            monthName = "October";
            break;
        case 10:
            monthName = "November";
            break;
        case 11:
            monthName = "December";
            break;
    }
    return monthName;
}

// обновление верхнего виджета

function getCurrentForecast(forecast) {
    let topWidget = document.getElementById("current_widget"),
        cityName = forecast.city.name,
        lessForecast = forecast.list[0],
        currentDate = lessForecast.dt_txt,
        type = lessForecast.weather[0].description,
        image = lessForecast.weather[0].icon,
        temperature = lessForecast.main.temp,
        pressure = lessForecast.main.pressure,
        humidity = lessForecast.main.humidity,
        windSpeed = lessForecast.wind.speed,
        insert = "";

    insert += `<div class="location-date">
                        <h1>${cityName}</h1>
                        <span>${getDayName(currentDate)}, ${getMonthName(currentDate)} ${getDayNumber(currentDate)}th <br>
					${type} <br></span>
                    </div>
                    <div class="tuesday">
                        <div class="wrapper-today">
                            <img class="today-img" src="assets/Weather/${image}.png">
                            <div class="temperature" id="temp_field">
                                ${temperature.toFixed()}<sup>°C</sup>
                            </div>
                        </div>
                        <div class="today-info">
                            <span>Preasure: <span class="value">${pressure}%</span><br></span>
                            <span>Humidity: <span class="value">${humidity}%</span><br></span>
                            <span>Wind: <span class="value">${windSpeed} m/s</span><br></span>
                        </div>
                    </div>`;
    topWidget.innerHTML = insert;
}

// обновление недельного прогноза

function getForecastOnTheWeek(forecast) {
    let extendedWidget = document.getElementById("under_widget"),
        insert = "",
        weekForecast = forecast.list.filter(item => item.dt_txt.indexOf('18:00:00') > -1);
    for (var i = 0; i < weekForecast.length; i++) {
        var date = weekForecast[i].dt_txt,
            image = weekForecast[i].weather[0].icon,
            type = weekForecast[i].weather[0].description,
            maxTemp = weekForecast[i].main.temp_max,
            minTemp = weekForecast[i].main.temp_min,
            pressure = weekForecast[i].main.pressure;

        insert += `<div>
                        <h5>${getDayName(date)}</h5>
                        <div>
                            <img src="assets/Weather/${image}.png">
                        </div>
                        <div class="vert-temp">
                            <span id="temp_field" style="color: black">${maxTemp.toFixed()}° </span><span style="color: gray">${minTemp.toFixed()}°</span>
                        </div>
                        <div class="pollen">
                            <span style="color: gray">Pressure </span><span style="color: black">${pressure}</span>
                        </div>
                    </div>`
    }
    extendedWidget.innerHTML = insert;
};