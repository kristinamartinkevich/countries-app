import {
    Avatar,
    Spinner,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
} from "@nextui-org/react";
import { useEffect, useCallback } from "react";

import { useCountriesStore } from "@/store";
import { fetchCountryDetail, fetchCountryNames, fetchWeatherInfo } from "@/utils/apiService";

interface CountryDetailsProps {
    country: string;
}

const columns = [
    "Languages Spoken",
    "Currencies",
    "Population",
    "Area",
    "Neighbouring Countries",
    "Time Zones",
    "Capital",
    "Temperature",
    "Weather",
];

const CountryDetails: React.FC<CountryDetailsProps> = ({ country }) => {
    const {
        neighbours,
        setNeighbours,
        capitalInfo,
        setCapitalInfo,
        setCountryDetails,
        countryDetails,
    } = useCountriesStore();

    const fetchDetails = useCallback(async () => {
        const details = await fetchCountryDetail(country);
        setCountryDetails(details);

        if (details[0]?.borders?.length) {
            const borders = details[0].borders;
            const countryNames = await fetchCountryNames(borders.join(","));
            const borderingCountries = countryNames
                .map((country) => country.name?.common)
                .join(", ");
            setNeighbours(borderingCountries);
        }

        const capital = details[0]?.capital?.[0];
        if (capital) {
            const weatherInfo = await fetchWeatherInfo(capital);
            setCapitalInfo(weatherInfo.data);
        }
    }, [country, setCountryDetails, setNeighbours, setCapitalInfo]);

    useEffect(() => {
        fetchDetails();
    }, [fetchDetails]);

    if (!countryDetails || countryDetails.length === 0 || !capitalInfo) {
        return <Spinner />;
    }

    const renderLanguages = (languages: Record<string, string>) =>
        Object.values(languages || {}).join(", ");

    const renderCurrencies = (currencies: Record<string, { name: string }>) =>
        Object.values(currencies || {})
            .map(({ name }) => name)
            .join(", ");

    return (
        <Table aria-label="Country Details">
            <TableHeader>
                {columns.map((header, index) => (
                    <TableColumn key={index}>{header}</TableColumn>
                ))}
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>{renderLanguages(countryDetails[0]?.languages)}</TableCell>
                    <TableCell>{renderCurrencies(countryDetails[0]?.currencies)}</TableCell>
                    <TableCell>{countryDetails[0]?.population}</TableCell>
                    <TableCell>{countryDetails[0]?.area}</TableCell>
                    <TableCell>{neighbours}</TableCell>
                    <TableCell>{countryDetails[0]?.timezones.join(", ")}</TableCell>
                    <TableCell>{capitalInfo.name}</TableCell>
                    <TableCell>{capitalInfo.main.temp}°C</TableCell>
                    <TableCell>
                        <div className="flex items-center">
                            <Avatar
                                alt={capitalInfo.weather[0]?.main}
                                size="lg"
                                src={`https://openweathermap.org/img/wn/${capitalInfo.weather[0]?.icon}.png`}
                            />
                            <span>{capitalInfo.weather[0]?.main}</span>
                        </div>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};

export default CountryDetails;
