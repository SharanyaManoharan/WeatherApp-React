import React from "react";
import "./current-weather.css";


const CurrentWeather = ({ daily }) => {


    return (
        <div className="weather bg-cyan-100 container mx-auto rounded-lg shadow-md p-8">
            <h3 className="title">Current Weather</h3>
            <div className="mt-8 text-2xl font-bold object-left">
                <p className="">{daily.name}</p>
            </div>
            <div className="flex flex-col items-center w-6/12 float-left mb-10 ">
                <div className="flex flex-row items-center ">
                    <p className="temperature mr-4">{Math.round(daily.main.temp)}°C</p>
                    <img
                        alt="weather"
                        className="weather-icon"
                        src={`icons/${daily.weather[0].icon}.png`}
                    />
                </div>
                <p className="weather-description text-2xl">{daily.weather[0].description}</p>
            </div>


            <div className=" details-container w-6/12  flex flex-col items-center float-right">
                <div className=" p-8 flex flex-col items-center justify-between">
                    <span className="flex">
                        <div className="parameter-row">
                            <span className="text-xl">Feels like</span>
                            <span className="font-semibold text-xl">
                            {Math.round(daily.main.feels_like)}°C
                            </span>
                        </div>
                        <div className="parameter-row">
                            <span className="text-xl">Wind</span>
                            <span className="font-semibold text-xl">{daily.wind.speed} m/s</span>
                        </div>
                    </span>
                    <span className="flex">
                        <div className="parameter-row">
                            <span className="text-xl">Humidity</span>
                            <span className="font-semibold text-xl">{daily.main.humidity}%</span>
                        </div>
                        <div className="parameter-row">
                            <span className="text-xl">Pressure</span>
                            <span className="font-semibold text-xl">{daily.main.pressure} hPa</span>
                        </div>
                    </span>


                </div>
            </div>

        </div>
    );
};

export default CurrentWeather;