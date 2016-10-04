import React from 'react';
import ReactDOM from 'react-dom';

import WeatherView from './components/WeatherView';
import WeatherClick from './container/WeatherClick';

ReactDOM.render(
    <WeatherView />,
    document.getElementById("weather")
);
