import getCountryDetails from "@/hooks/getCountryDetail";
import { Listbox, ListboxItem } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import CapitalWeatherInfo from "./CapitalCityInfo";

interface CountryDetailsProps {
    country: Object;
}

const CountryDetails: React.FC<CountryDetailsProps> = ({ country }) => {
    const [neighbours, setNeighbours] = useState(null);
    const [capital, setCapital] = useState(null);
    const countryDetails = getCountryDetails(country);


    useEffect(() => {
        if (!countryDetails) return;
        setCapital(countryDetails[0].capital[0]);
        const getNeighbours = async () => {
            if (countryDetails[0]?.borders?.length > 0) {
                const borders = countryDetails[0]?.borders?.toString();
                const countryNames = await axios.get(
                    `https://restcountries.com/v3.1/alpha?codes=${borders}`
                    ,
                    {
                        headers: {
                            'x-requested-with': 'XMLHttpRequest',
                        },
                    }
                );
                const borderingCountries = countryNames.data.map((country) => country.name?.common).toString()
                setNeighbours(borderingCountries)
            }
        };
        getNeighbours();
    }, [countryDetails]);

    return (
        <>
            {countryDetails?.length >= 0 &&
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <Listbox>
                            <ListboxItem key="languages" description="Languages spoken" textValue="Languages">
                                {Object.entries(countryDetails[0]?.languages).map(([key, value]) => (
                                    <span key={key}>{value}</span>
                                ))}
                            </ListboxItem>
                            <ListboxItem key="currencies" description="Currencies" textValue="Currencies">
                                {Object.entries(countryDetails[0]?.currencies).map(([code, { name, symbol }]) => (
                                    <span key={code}>{name}
                                    </span>
                                ))}
                            </ListboxItem>
                            <ListboxItem key="population" description="Population"> {countryDetails[0]?.population}</ListboxItem>
                            <ListboxItem key="neighbours" description="Neighbouring countries">{neighbours}</ListboxItem>
                            <ListboxItem key="timezones" description="Time zones">{countryDetails[0]?.timezones}</ListboxItem>
                        </Listbox>
                    </div>
                    <div className="flex flex-col">
                        {capital}
                        <CapitalWeatherInfo capital={capital} />
                    </div>
                </div>
            }
        </>
    )
};

export default CountryDetails;
