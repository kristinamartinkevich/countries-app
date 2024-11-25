import {
    Table,
    TableHeader,
    TableColumn,
    TableCell,
    TableRow,
    TableBody,
    Modal,
    useDisclosure,
} from "@nextui-org/react";


import { useCountriesStore } from "@/store";
import ModalInfo from "../modal/Modalnfo";


const CountryTable = () => {
    const {
        setSelectedCountry,
        setCapitalInfo,
        getFilteredCountries,
    } = useCountriesStore();

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const filteredCountries = getFilteredCountries();

    const openModal = (country) => {
        setSelectedCountry(country.name);
        onOpen();
    };

    const reset = () => {
        setSelectedCountry(null);
        setCapitalInfo(null)
    };


    return (
        <div>
            <Table aria-label="Country Table" color="primary" selectionMode="single">
                <TableHeader>
                    <TableColumn>Flag</TableColumn>
                    <TableColumn>Name</TableColumn>
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
            <Modal isOpen={isOpen} size="5xl" onOpenChange={onOpenChange} onClose={reset}>
                <ModalInfo />
            </Modal>
        </div>
    );
};

export default CountryTable;
