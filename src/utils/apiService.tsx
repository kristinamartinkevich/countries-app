import axios from "axios";
import toast from 'react-hot-toast';

export const fetchWeatherInfo = async (capital: string) => {
    try {
        const weatherInfo = await axios.get(
            `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`,
            {
                headers: {
                    "x-requested-with": "XMLHttpRequest",
                },
            }
        );
        return weatherInfo;
    } catch (error) {
        toast.error(`Failed to fetch weather names: ${error.message}`);
        console.error("Error fetching weather names:", error);
        throw error;
    }
};

export const fetchCountryNames = async (codes: string) => {
    try {
        const countryNames = await axios.get(
            `https://restcountries.com/v3.1/alpha?codes=${codes}`,
            {
                headers: {
                    "x-requested-with": "XMLHttpRequest",
                },
            }
        );
        return countryNames.data;
    } catch (error) {
        toast.error(`Failed to fetch country names: ${error.message}`);
        console.error("Error fetching country names:", error);
        throw error;
    }
};


export const fetchCountryDetail = async (country: string) => {
    try {
        const countryDetail = await axios.get(
            `https://restcountries.com/v3.1/name/${country}`,
        );

        return countryDetail.data;
    } catch (error) {
        toast.error(`Failed to fetch country details: ${error.message}`);
        console.error("Error fetching country details:", error);
        throw error;
    }
};
