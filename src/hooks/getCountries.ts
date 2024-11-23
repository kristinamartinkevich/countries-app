import axios from 'axios';
import { useEffect, useState } from 'react';

const getCountries = () => {
    const [countries, setCountries] = useState(null);

    useEffect(() => {
        const fetchCountries = async () => {
            const { data } = await axios.get(
                `https://restcountries.com/v3.1/all`
            );
            setCountries(data);
        };
        fetchCountries();
    }, []);

    return countries;
};

export default getCountries;
