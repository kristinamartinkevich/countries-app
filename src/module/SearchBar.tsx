import { Avatar, Autocomplete, AutocompleteItem, AutocompleteSection } from '@nextui-org/react';
import { useState } from 'react';
import getCountries from '@/hooks/getCountries';
import CountryDetails from './CountryDetails';

interface SearchBarProps {
    onCountryChange: (countryCode: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onCountryChange }) => {
    const [selectedCountry, setSelectedCountry] = useState<Object>();

    const countries = getCountries();

    const groupedCountries = countries?.reduce((acc, country) => {
        const region = country.region || 'Other';
        if (!acc[region]) acc[region] = [];
        acc[region].push(country);
        return acc;
    }, {});

    return (
        <>
            <div className="flex flex-col gap-4">
                {countries && (
                    <Autocomplete
                        label="Select a country"
                        variant="bordered"
                        placeholder="Search a country"
                        className="max-w-xs"
                        selectedKey={selectedCountry}
                        onSelectionChange={(key) => setSelectedCountry(key)}
                    >
                        {Object.entries(groupedCountries).map(([region, regionCountries]) => (
                            <AutocompleteSection
                                key={region}
                                title={region}
                                items={regionCountries}
                            >
                                {(item) => (
                                    <AutocompleteItem
                                        key={item.name.common}
                                        textValue={item.name.common}
                                        value={item}
                                    >
                                        <div className="flex gap-2 items-center">
                                            <Avatar
                                                alt={item.name.common}
                                                className="flex-shrink-0"
                                                size="sm"
                                                src={item.flags.png}
                                            />
                                            <div className="flex flex-col">
                                                <span className="text-small">{item.name.common}</span>
                                                <span className="text-tiny text-default-400">
                                                    Capital: {item.capital}
                                                </span>
                                            </div>
                                        </div>
                                    </AutocompleteItem>
                                )}
                            </AutocompleteSection>
                        ))}
                    </Autocomplete>
                )}
            </div>
            {selectedCountry && (
                <div className="flex flex-row">
                    <CountryDetails country={selectedCountry} />
                </div>
            )}
        </>
    );
};

export default SearchBar;
