import React from 'react';
import className from 'classnames';

import * as WeatherAction from '../actions/WeatherAction';
import WeatherStore from '../stores/WeatherStore';
import './weather.scss'

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
        this.setState({
            weather: []
        });
        WeatherAction.getWeather();
    }

    render () {
        return (
            <div className="wrapper">
                <h2>Погода в Москве</h2>
                <button onClick={this.showWeather.bind(this)}>
                    Показать погоду
                </button>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>День</th>
                            <th>День недели</th>
                            <th>Максимальная температура, *С</th>
                            <th>Минимальная температура, *С</th>
                            <th>Вероятность осадков</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.weather.map((el) => {
                            return (
                                <tr key={el.id}>
                                    <td>{el.date}</td>
                                    <td>{el.day}</td>
                                    <td>{el.high}</td>
                                    <td>{el.low}</td>
                                    <td>{el.text}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
