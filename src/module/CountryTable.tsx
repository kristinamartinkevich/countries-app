import {
    Table,
    Spinner,
    TableHeader,
    TableColumn,
    TableCell,
    TableRow,
    TableBody,
    Modal,
    useDisclosure,
} from "@nextui-org/react";

import ModalInfo from "./Modalnfo";

import { useCountriesStore } from "@/store";


const CountryTable = () => {
    const {
        setSelectedCountry,
        setCapital,
        getFilteredCountries,
    } = useCountriesStore();

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const filteredCountries = getFilteredCountries();

    const openModal = (country) => {
        setSelectedCountry(country.name);
        setCapital(country.capital);
        onOpen();
    };

    return (
        <div>
            <Table aria-label="Country Table" color="primary">
                <TableHeader>
                    <TableColumn>Flag</TableColumn>
                    <TableColumn allowsSorting>Name</TableColumn>
                    <TableColumn>Capital</TableColumn>
                    <TableColumn>Region</TableColumn>
                    <TableColumn>Languages</TableColumn>
                </TableHeader>
                <TableBody>
                    {filteredCountries.map((country, index) => (
                        <TableRow key={index} onClick={() => openModal(country)}>
                            <TableCell>{country.emoji}</TableCell>
                            <TableCell>{country.name}</TableCell>
                            <TableCell>{country.capital}</TableCell>
                            <TableCell>{country.continent.name}</TableCell>
                            <TableCell>
                                {country.languages.map((lang) => lang.name).join(", ")}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Modal isOpen={isOpen} size="lg" onOpenChange={onOpenChange}>
                <ModalInfo />
            </Modal>
        </div>
    );
};

export default CountryTable;
