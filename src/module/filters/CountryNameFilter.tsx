import {
    Autocomplete,
    AutocompleteItem,
} from "@nextui-org/react";

import { useCountriesStore } from "@/store";

export function CountryNameFilter() {
    const { setNameFilter, countries } = useCountriesStore();

    return (
        <Autocomplete
            isClearable
            label="Search by country"
            placeholder="Search by country"
            onSelectionChange={(key) => setNameFilter(key)}
        >
            {countries.map((country) => (
                <AutocompleteItem
                    key={country.name}
                    textValue={country.name}
                    value={country.name}
                >
                    {country.name}
                </AutocompleteItem>
            ))}
        </Autocomplete>
    );
}
