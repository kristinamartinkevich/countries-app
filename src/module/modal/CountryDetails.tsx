import {
    Image,
    Spinner,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
} from "@nextui-org/react";
import { useEffect } from "react";

import { useCountriesStore } from "@/store";
import { fetchCountryDetail, fetchCountryInfo, fetchWeatherInfo } from "@/utils/apiService";
import toast from "react-hot-toast";

interface CountryDetailsProps {
    country: string;
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
    const { neighbours, setNeighbours, capitalInfo, setCapitalInfo, setCountryDetails, countryDetails } = useCountriesStore();

    useEffect(() => {
        const getInfo = async () => {
            const details = await fetchCountryDetail(country);
            setCountryDetails(details);

            if (countryDetails[0]?.borders?.length > 0) {
                const borders = countryDetails[0]?.borders?.toString();
                const countryNames = await fetchCountryInfo(borders);
                const borderingCountries = countryNames.data
                    .map((country) => country.name?.common)
                    .toString();

                setNeighbours(borderingCountries);
            }
            if (countryDetails[0].capital[0]) {
                const capital = countryDetails[0].capital[0];
                const weatherInfo = await fetchWeatherInfo(capital);
                setCapitalInfo(weatherInfo.data);
            }
        };

        getInfo();
    }, []);


    return (
        <>
            {countryDetails?.length >= 0 && capitalInfo ? (
                <Table aria-label="Country Details">
                    <TableHeader>
                        {columns.map((header, index) => (
                            <TableColumn key={index}>{header}</TableColumn>
                        ))}
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                {Object.entries(countryDetails[0]?.languages || {})
                                    .map(([_, value]) => value)
                                    .join(", ")}
                            </TableCell>
                            <TableCell>
                                {Object.entries(countryDetails[0]?.currencies).map(
                                    ([code, { name }]) => (
                                        <span key={code}>{name}</span>
                                    )
                                )}
                            </TableCell>
                            <TableCell>{countryDetails[0]?.population}</TableCell>
                            <TableCell>{neighbours}</TableCell>
                            <TableCell>{countryDetails[0]?.timezones}</TableCell>
                            <TableCell>{capitalInfo.name}</TableCell>
                            <TableCell>{capitalInfo.main.temp}</TableCell>
                            <TableCell>
                                <div className="flex items-center">
                                    <Image
                                        alt={capitalInfo.weather[0].main}
                                        size="lg"
                                        src={`https://openweathermap.org/img/wn/${capitalInfo.weather[0].icon}.png`}
                                    />
                                    <span>{capitalInfo.weather[0].main}</span>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            ) : <Spinner />}
        </>
    );
};

export default CountryDetails;
