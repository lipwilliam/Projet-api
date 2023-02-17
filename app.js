import Weather from './Weather.js'
import Infos from './Infos.js'

//instanciation des classes
const weather = new Weather()
const infos = new Infos()

const search = document.getElementById('searchCity')
const button = document.getElementById('submit')

button.addEventListener('click', () => {
    const currentValue = search.value

    weather.getCurrent(currentValue).then((data) => {
        infos.show(data)
    })
})
























/* meteo.getCurrent("Paris")
.then(data =>
    console.log(data) //show meteo, creation d'une fonction qui attend de la data piur construire l'HTML
) */