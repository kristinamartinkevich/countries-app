import {
    Image,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
} from "@nextui-org/react";
import axios from "axios";
import { useEffect } from "react";

import { useCountriesStore } from "@/store";
import getCountryDetails from "@/hooks/getCountryDetail";

interface CountryDetailsProps {
    country: Object;
}

const columns = [
    "Languages Spoken",
    "Currencies",
    "Population",
    "Neighbouring Countries",
    "Time Zones",
    "Capital",
    "Temperature",
    "Weather",
]

const CountryDetails: React.FC<CountryDetailsProps> = ({ country }) => {
    const { neighbours, setNeighbours, capitalInfo, setCapitalInfo } = useCountriesStore();

    const countryDetails = getCountryDetails(country);

    useEffect(() => {
        if (!countryDetails) return;
        const getNeighbours = async () => {
            if (countryDetails[0]?.borders?.length > 0) {
                const borders = countryDetails[0]?.borders?.toString();
                const countryNames = await axios.get(
                    `https://restcountries.com/v3.1/alpha?codes=${borders}`,
                    {
                        headers: {
                            "x-requested-with": "XMLHttpRequest",
                        },
                    },
                );
                const borderingCountries = countryNames.data
                    .map((country) => country.name?.common)
                    .toString();

                setNeighbours(borderingCountries);
            }
        };

        getNeighbours();
    }, [countryDetails]);


    useEffect(() => {
        const getNeighbours = async () => {
            const weatherInfo = await axios.get(
                `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${countryDetails[0].capital[0]}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`,
                {
                    headers: {
                        "x-requested-with": "XMLHttpRequest",
                    },
                },
            );

            setCapitalInfo(weatherInfo.data);
        };

        getNeighbours();
    }, []);

    return (
        <>
            {countryDetails?.length >= 0 && capitalInfo && (
                <Table>
                    <TableHeader>
                        {columns.map((header, index) => (
                            <TableColumn key={index}>{header}</TableColumn>
                        ))}
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                {Object.entries(countryDetails[0]?.languages).map(
                                    ([key, value]) => (
                                        <span key={key}>{value}</span>
                                    ),
                                )}
                            </TableCell>
                            <TableCell>
                                {Object.entries(countryDetails[0]?.currencies).map(
                                    ([code, { name }]) => (
                                        <span key={code}>{name}</span>
                                    ),
                                )}
                            </TableCell>
                            <TableCell>{countryDetails[0]?.population}</TableCell>
                            <TableCell>{neighbours}</TableCell>
                            <TableCell>{countryDetails[0]?.timezones}</TableCell>
                            <TableCell>{capitalInfo.name}</TableCell>
                            <TableCell>{capitalInfo.main.temp}</TableCell>
                            <TableCell>
                                <Image
                                    alt={capitalInfo.weather[0].main}
                                    size="sm"
                                    src={`https://openweathermap.org/img/wn/${capitalInfo.weather[0].icon}.png`}
                                />
                                {capitalInfo.weather[0].main}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            )}
        </>
    );
};

export default CountryDetails;
