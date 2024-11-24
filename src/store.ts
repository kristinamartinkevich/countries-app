import { create } from "zustand";

interface CountriesStore {
    loading: boolean;
    countries: any[];
    selectedCountry: string | null;
    neighbours: string[] | null;
    capitalInfo: Object | null;
    regionFilter: string | null;
    languageFilter: string | null;
    nameFilter: string | null;
    setLoading: (loading: boolean) => void;
    setCountries: (countries: any[]) => void;
    setSelectedCountry: (country: string | null) => void;
    setNeighbours: (neighbours: string[] | null) => void;
    setCapitalInfo: (info: Object | null) => void;
    setRegionFilter: (region: string | null) => void;
    setLanguageFilter: (language: string | null) => void;
    setNameFilter: (name: string | null) => void;
    getFilteredCountries: () => any[];
}

export const useCountriesStore = create<CountriesStore>((set, get) => ({
    loading: false,
    countries: [],
    selectedCountry: null,
    neighbours: null,
    capitalInfo: null,
    regionFilter: null,
    languageFilter: null,
    nameFilter: null,

    setLoading: (loading) => set({ loading }),
    setCountries: (countries) => set({ countries }),
    setSelectedCountry: (country) => set({ selectedCountry: country }),
    setNeighbours: (neighbours) => set({ neighbours }),
    setCapitalInfo: (info) => set({ capitalInfo: info }),
    setRegionFilter: (region) => set({ regionFilter: region }),
    setLanguageFilter: (language) => set({ languageFilter: language }),
    setNameFilter: (name) => set({ nameFilter: name }),
    getFilteredCountries: () => {
        const { countries, regionFilter, nameFilter, languageFilter } = get();
        const filteredCountries = countries.filter((country) => {
            const matchesRegion =
                !regionFilter || country.continent?.name === regionFilter;
            const matchesLanguage =
                !languageFilter ||
                country.languages.some((lang) => lang.name === languageFilter);
            const matchesName = !nameFilter || country.name === nameFilter;

            return matchesRegion && matchesLanguage && matchesName;
        });

        return filteredCountries;
    },
}));
