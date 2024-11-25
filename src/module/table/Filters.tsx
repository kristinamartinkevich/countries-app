import { LanguageFilter } from "../../components/filters/LanguageFilter";
import { RegionFilter } from "../../components/filters/RegionFilter";

import { CountryNameFilter } from "@/components/filters/CountryNameFilter";

export default function Filters() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 m-3">
            <div className="md:col-span-2 lg:col-span-1">
                <CountryNameFilter />
            </div>
            <div className="md:col-span-2 lg:col-span-1">
                <LanguageFilter />
            </div>
            <div className="md:col-span-2 lg:col-span-1">
                <RegionFilter />
            </div>
        </div>
    );
}
