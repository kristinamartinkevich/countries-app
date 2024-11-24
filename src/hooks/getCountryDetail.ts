import axios from "axios";
import { useEffect, useState } from "react";

const getCountryDetails = (country: string) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (!country) return;
    const fetchCountryDetail = async () => {
      const { data } = await axios.get(
        `https://restcountries.com/v3.1/name/${country}`,
      );

      setWeather(data);
    };

    fetchCountryDetail();
  }, [country]);

  return weather;
};

export default getCountryDetails;
