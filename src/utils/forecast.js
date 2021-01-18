const chalk = require('chalk')
const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3ed99cf20a4a8e3b9abba5a4bc07afb3&query=' + latitude + ',' + longitude + '&units=m'

    request({url, json: true},(error,{body}) => {
        if (error) { 
            callback('Unable to connect to location services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.',undefined)
        } else {
            callback(undefined, body.current.weather_descriptions+'. It is currently '+ body.current.temperature+' degress out. There is a '+ body.current.precip+'% chance of rain.')
            // callback(undefined, response.body)
        }
    })
}

module.exports = forecast