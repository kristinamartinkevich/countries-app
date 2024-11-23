import { Listbox, ListboxItem } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";

interface CapitalCityInfoProps {
    capital: string;
}

const CapitalWeatherInfo: React.FC<CapitalCityInfoProps> = ({ capital }) => {
    const [capitalInfo, setCapitalInfo] = useState(null);

    useEffect(() => {
        if (!capital) return
        const getNeighbours = async () => {
            const weatherInfo = await axios.get(
                `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`,
                {
                    headers: {
                        'x-requested-with': 'XMLHttpRequest',
                    },
                }
            );
            setCapitalInfo(weatherInfo.data)
        };
        getNeighbours();
    }, []);


    return (
        <>
            {capitalInfo &&
                <Listbox>
                    <ListboxItem key="capital" description="Capital" textValue={capitalInfo.name}>
                        {capitalInfo.name}
                    </ListboxItem>
                    <ListboxItem key="temperature" description="Temperature" textValue={capitalInfo.main.temp}>
                        {capitalInfo.main.temp}
                    </ListboxItem>
                    <ListboxItem key="weather" description="Weather" textValue={capitalInfo.weather[0].main}>
                        <img alt={capitalInfo.weather[0].main} src={`https://openweathermap.org/img/wn/${capitalInfo.weather[0].icon}.png`} />
                        {capitalInfo.weather[0].main}
                    </ListboxItem>
                </Listbox>
            }
        </>
    )
};

export default CapitalWeatherInfo;
