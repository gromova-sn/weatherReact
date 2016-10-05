import React from 'react';

import WeatherLine from './WeatherLine';

export default class Weather extends React.Component {

    render () {
        return (
            <div>
                <WeatherLine>{this.props.children}</WeatherLine>
            </div>
        );
    }
}

