import { LanguageFilter } from "../../components/filters/LanguageFilter";
import { RegionFilter } from "../../components/filters/RegionFilter";

import { CountryNameFilter } from "@/components/filters/CountryNameFilter";

export default function Filters() {
    return (
        <div className="w-full flex flex-row gap-4 items-center mb-5">
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 justify-between">
                <CountryNameFilter />
                <LanguageFilter />
                <RegionFilter />
            </div>
        </div>
    );
}
