import axios from 'axios';
import { useEffect, useState } from 'react';

const useWeather = (city: string) => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        if (!city) return;
        const fetchWeather = async () => {
            const { data } = await axios.get(
                `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
            );
            setWeather(data);
        };
        fetchWeather();
    }, [city]);

    return weather;
};

export default useWeather;
