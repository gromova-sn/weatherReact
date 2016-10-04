import React from 'react';
import dispatcher from '../dispatcher';
import axios from 'axios';

import WeatherView from '../components/WeatherView';

export default class WeatherClick extends React.Component {
    showWeather () {
        console.log(1);
        // axios.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22moscow%22%20)%20and%20u%3D%22c%22%20&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys").then((data) => {
        //     console.log(data.data);
        //     dispatcher.dispatch({type: "CREATE_LINE", lines:  data.data });
        // });
    }

    render () {
        return (
            <WeatherView showWeather={this.showWeather} />
        );
    }
}

