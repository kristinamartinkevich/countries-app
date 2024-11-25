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

const columns = [
    "Flag",
    "Name",
    "Capital",
    "Region",
    "Languages"
];

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

    const resetModalState = () => {
        setSelectedCountry(null);
        setCapitalInfo(null);
    };

    const renderLanguages = (languages) =>
        languages.map((lang) => lang.name).join(", ");

    return (
        <div>
            <Table
                aria-label="Country Table"
                color="primary"
                selectionMode="single"
            >
                <TableHeader>
                    {columns.map((column) => (
                        <TableColumn key={column}>{column}</TableColumn>
                    ))}
                </TableHeader>
                <TableBody>
                    {filteredCountries.map((country, index) => (
                        <TableRow
                            key={index}
                            className="cursor-pointer hover:bg-violet-600 transition duration-200"
                            onClick={() => openModal(country)}
                        >
                            <TableCell>{country.emoji}</TableCell>
                            <TableCell>{country.name}</TableCell>
                            <TableCell>{country.capital || "N/A"}</TableCell>
                            <TableCell>{country.continent.name}</TableCell>
                            <TableCell>{renderLanguages(country.languages)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Modal
                isOpen={isOpen}
                size="5xl"
                onClose={resetModalState}
                onOpenChange={onOpenChange}
            >
                <ModalInfo />
            </Modal>
        </div>
    );
};

export default CountryTable;
