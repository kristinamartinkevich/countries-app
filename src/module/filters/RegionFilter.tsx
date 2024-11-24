import { Autocomplete, AutocompleteItem, Select, SelectItem } from "@nextui-org/react";

import { useCountriesStore } from "@/store";

export function RegionFilter() {
    const { countries, setRegionFilter } = useCountriesStore();

    return (
        <Autocomplete
            isClearable
            label="Filter by Region"
            placeholder="Select a region"
            onSelectionChange={(key) => setRegionFilter(key)}
        >
            {[...new Set(countries.map((c) => c.continent.name))].map((region) => (
                <AutocompleteItem key={region} value={region}>
                    {region}
                </AutocompleteItem>
            ))}
        </Autocomplete>
    );
}
