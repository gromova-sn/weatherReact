import dispatcher from '../dispatcher';
import axios from 'axios';

export function getWeather () {
    axios.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22moscow%22%20)%20and%20u%3D%22c%22%20&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys").then((data) => {
        dispatcher.dispatch({
            type: "CREATE_WEATHER",
            weather:  data.data.query.results.channel.item
        });
    });
}
