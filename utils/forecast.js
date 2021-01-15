const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=[ACCESS KEY HIDDEN]&query=' + latitude + ',' + longitude + '&units=f'
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect to weather services!")
        } else if (body.error) {
            callback("Unable to find location. Try another search.")
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out. It feels like " + body.current.feelslike + " degrees out.")
        }
    })
}

module.exports = forecast
