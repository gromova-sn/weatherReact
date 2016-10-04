import React from 'react';

export default class WeatherView extends React.Component {
    render () {
        return (
            <div>
                <h2>Погода в Москве</h2>
                <button onClick={this.props.showWeather}>
                    Show Weather
                </button>
            </div>
        );
    }
}

