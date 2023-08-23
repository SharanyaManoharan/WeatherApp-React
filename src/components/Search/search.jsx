import "./search.css";
import { useState } from "react";
import { WEATHER_API_URL, WEATHER_API_KEY } from '../../api';
import ForecastWeather from "../Forecast-Weather/forecast-weather";
import CurrentWeather from "../Current-Weather/current-weather";
import ErrorMessage from "../ErrorMessage/error";




const SearchWeather = () => {

    
    const [city, setCity] = useState('');
    const [error, setError] = useState('');
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecastWeather, setForecastWeather] = useState(null);


    let errorMessage;
   

    async function displayDailyWeather() {

        try {
            const dailyWeatherFetch = `${WEATHER_API_URL}/weather?q=${city}&units=metric&appid=${WEATHER_API_KEY}`;

            const response = await fetch(dailyWeatherFetch);
            if (response.status === 400 || response.status === 404) {
                errorMessage = 'Invalid city name! Enter a city to get the weather';
                setError(errorMessage);
                setCurrentWeather(null);
            } else {
                const weatherResponse = await response.json();
                console.log(weatherResponse);
                setError('');
                setForecastWeather(null);
                setCurrentWeather({ ...weatherResponse });
            }
         } catch (error) {
            console.log(error);
        }

    }

    async function weeklyWeather () {

        try{
            const weeklyWeatherFetch = `${WEATHER_API_URL}/forecast?q=${city}&units=metric&cnt=7&appid=${WEATHER_API_KEY}`;

            const response = await fetch(weeklyWeatherFetch);
            if (response.status === 400 || response.status === 404) {
                errorMessage = 'Invalid city name! Enter a city to get the weather';
                setError(errorMessage);
                setForecastWeather(null);
            } else {
                const forecastWeather = await response.json();
                console.log(forecastWeather);
                setError('');
                setCurrentWeather(null);
                setForecastWeather({ ...forecastWeather });
            }

        } catch(error) {
            console.log(error);
        }
    }

    return (

        <div className="container container-custom">
            {error && <ErrorMessage data={error} />}

            <div className="search items-center justify-center flex relative">
                <div className="search-container container">
                    <div className=" float-left w-6/12">
                        <input className="placeholder:italic placeholder:text-slate-400 block object-left-top bg-white w-full h-12 border border-slate-300 rounded-md py-2 pl-12 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                            placeholder="Enter City Name" type="text" name="search" onChange={e => setCity(e.target.value)} />
                        <input className="search-btn bg-sky-500 hover:bg-sky-700" type="button" id="image-button" alt="search"></input>
                    </div>

                    <div className="button-container max-auto  float-right flex content-between">
                        <button className="rounded-md bg-sky-500 hover:bg-sky-700 pl-6 pr-6  h-12 mr-12 text-white font-semibold" onClick={displayDailyWeather}>
                            Daily
                       </button>
                        <button className="rounded-md bg-sky-500 hover:bg-sky-700 pl-6 pr-6  h-12 p-2 text-white font-semibold" onClick={weeklyWeather}>
                            Weekly</button>
                    </div>
                </div>
            </div>  
            {city && currentWeather && <CurrentWeather daily={currentWeather} />}
            {city && forecastWeather?.list?.length > 0 && <ForecastWeather weekly={forecastWeather} />}

        </div>

    );
}

export default SearchWeather;