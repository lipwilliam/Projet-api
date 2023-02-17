class Weather {
    async getCurrent(input) {
        const myKey = ''

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}&units=metric`)
        const data = await response.json()

        console.log(data)
        return data
    }
}

export default Weather
