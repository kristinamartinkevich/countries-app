import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

import { useCountriesStore } from "@/store";

export function LanguageFilter() {
    const { countries, setLanguageFilter } = useCountriesStore();

    return (
        <Autocomplete
            isClearable
            label="Filter by Language"
            placeholder="Select a language"
            onSelectionChange={(key) => setLanguageFilter(key)}
        >
            {[
                ...new Set(
                    countries.flatMap((c) => c.languages.map((lang) => lang.name)),
                ),
            ].map((language) => (
                <AutocompleteItem key={language} value={language}>
                    {language}
                </AutocompleteItem>
            ))}
        </Autocomplete>
    );
}
