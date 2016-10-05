import React from 'react';

import * as WeatherAction from '../actions/WeatherAction';
import WeatherStore from '../stores/WeatherStore';

export default class WeatherLine extends React.Component {
    constructor () {
        super ()
        this.getLines = this.getLines.bind(this);
        this.state = {
            weather: WeatherStore.getAll()
        }
    }

    componentDidMount() {
        WeatherStore.on("change", this.getLines);
    }

    componentWillUnmount() {
        WeatherStore.removeListener("change", this.getLines);
    }

    getLines () {
        this.setState({
            weather: WeatherStore.getAll()
        });
    }

    showWeather () {
        WeatherAction.getWeather();
    }

    render () {
        return (
            <div>
                <h2>Погода в Москве</h2>
                <button onClick={this.showWeather.bind(this)}>
                    Show Weather
                </button>
                {this.state.weather.map((el) => {
                    return (
                        <div key={el.date}>
                            <span>{el.date}</span>
                            <span>{el.text}</span>
                        </div>
                    );
                })}
            </div>
        );
    }
}
