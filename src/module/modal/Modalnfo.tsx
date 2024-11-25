import {
    Button,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
} from "@nextui-org/react";

import CountryDetails from "./CountryDetails";

import { useCountriesStore } from "@/store";

const ModalInfo = () => {
    const { selectedCountry } = useCountriesStore();

    return (
        <ModalContent>
            {(onClose) => (
                <>
                    <ModalHeader className="flex flex-col gap-1">
                        {selectedCountry}
                    </ModalHeader>
                    <ModalBody>
                        {selectedCountry && (
                            <div className="flex flex-row">
                                <CountryDetails country={selectedCountry} />
                            </div>
                        )}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onPress={onClose}>
                            Close
                        </Button>
                        <Button color="primary" onPress={onClose}>
                            Action
                        </Button>
                    </ModalFooter>
                </>
            )}
        </ModalContent>
    );
};

export default ModalInfo;
