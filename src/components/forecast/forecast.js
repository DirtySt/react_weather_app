import React from 'react';
import css from './forecast.module.css'
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";

const Forecast = ({data}) => {

    const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    const forecast = data.list.filter((val) => val.dt_txt.split(' ')[1] === '12:00:00');

    return (
        <div>
            <label className={css.title}>Daitly</label>
            <Accordion allowZeroExpanded>
                {forecast.map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className={css.dailyItem}>
                                    <img alt={"weather"} className={css.iconSmall}
                                         src={`../../icons/${item.weather[0].icon}.png`}/>
                                    <label className={css.day}>{forecastDays[idx]} {item.dt_txt.slice(8,10)}</label>
                                    <label className={css.description}>{item.weather[0].description}</label>
                                    <label className={css.minMax}>{Math.round(item.main.temp_min)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className={css.dailyDetailsGrid}>
                                <div className={css.dailyDetailsGridItem}>
                                    <label>Pressure</label>
                                    <label>{item.main.pressure} hPa</label>
                                </div>
                                <div className={css.dailyDetailsGridItem}>
                                    <label>Humidity</label>
                                    <label>{item.main.humidity}</label>
                                </div>
                                <div className={css.dailyDetailsGridItem}>
                                    <label>Clouds</label>
                                    <label>{item.clouds.all}</label>
                                </div>
                                <div className={css.dailyDetailsGridItem}>
                                    <label>Wind Speed</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className={css.dailyDetailsGridItem}>
                                    <label>Sea Level</label>
                                    <label>{item.main.sea_level} m</label>
                                </div>
                                <div className={css.dailyDetailsGridItem}>
                                    <label>Feels like</label>
                                    <label>{Math.round(item.main.feels_like)}°C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default Forecast;