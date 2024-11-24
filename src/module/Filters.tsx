import { LanguageFilter } from "./filters/LanguageFilter";
import { RegionFilter } from "./filters/RegionFilter";

import { CountryNameFilter } from "@/module/filters/CountryNameFilter";

export default function Filters() {
    return (
        <div className="flex gap-4">
            <div className="w-full md:flex-1">
                <CountryNameFilter />
            </div>
            <div className="w-full md:flex-1">
                <LanguageFilter />
            </div>
            <div className="w-full md:flex-1">
                <RegionFilter />
            </div>
        </div>

    );
}
