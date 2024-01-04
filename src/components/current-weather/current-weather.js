import React from 'react';
import css from './current.-weather.module.css'

const CurrentWeather = ({data}) => {

    const weatherIcon = `../../icons/${data.weather[0].icon}.png`

    return (
        <div className={css.weather}>
            <div className={css.top}>
                <div>
                    <p className={css.city}>{data.name}</p>
                    <p className={css.weatherDescription}>{data.weather[0].description}</p>
                </div>
                <img alt={'weather'} className={css.weatherIcon} src={weatherIcon}/>
            </div>
            <div className={css.bottom}>
                <p className={css.temperature}>{Math.round(data.main.temp)}°C</p>
                <div className={css.details}>
                    <div className={css.parameterRow}>
                        <span className={css.parameterLabel}>Details</span>
                    </div>
                    <div className={css.parameterRow}>
                        <span className={css.parameterLabel}>Wind</span>
                        <span className={css.parameterValue}>{Math.round(data.wind.speed)} m/ s</span>
                    </div>
                    <div className={css.parameterRow}>
                        <span className={css.parameterLabel}>Feels like</span>
                        <span className={css.parameterValue}>{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className={css.parameterRow}>
                        <span className={css.parameterLabel}>Humidity</span>
                        <span className={css.parameterValue}>{data.main.humidity}%</span>
                    </div>
                    <div className={css.parameterRow}>
                        <span className={css.parameterLabel}>Pressure</span>
                        <span className={css.parameterValue}>{data.main.pressure} hPa</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CurrentWeather;