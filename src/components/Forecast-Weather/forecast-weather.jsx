import React from "react";
import "./forecast-weather.css";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const dayInAWeek = new Date().getDay();
const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

const ForecastWeather = ({ weekly }) => {
   
    return (
        <div className="weather bg-cyan-100 container mx-auto rounded-lg shadow-md p-12">
            <h3 className="title">Weekly Weather</h3>
            <div className="mt-8 text-2xl font-bold object-left">
                    <p className="">{weekly.city.name}</p>
                </div>
            <div className="forecast-display mt-8">
               
                {weekly.list.splice(0, 7).map((item, idx) => (
                    <div className="w-7/12" key={idx}>
                        <div className="weekly-weather p-4">
                            <h6>{forecastDays[idx]}</h6>
                            <img alt="weather" className="weather-icon" src={`icons/${item.weather[0].icon}.png`} />
                            <p className="description">{item.weather[0].description}</p>
                            <span className="min-max">{Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ForecastWeather;