import {EventEmitter} from 'events';
import dispatcher from '../dispatcher';

class WeatherStore extends EventEmitter {
    constructor () {
        super ();
        this.weather = [];
    }

    getAll () {
        return this.weather;
    }

    createWeather (action) {
        action.weather.map((el) => {
            return this.weather.push(el);
        })

        this.emit('change');
    }

    handleActions(action) {
        switch(action.type) {
            case "CREATE_WEATHER": {
                this.createWeather(action);
                break;
            }
        }
    }
}

const weatherStore = new WeatherStore;
dispatcher.register(weatherStore.handleActions.bind(weatherStore));

export default weatherStore;