import DefaultLayout from "@/layouts/default";
import SearchBar from "@/module/SearchBar";
import { Weather } from "@/module/Weather";
import { useState } from "react";

export default function IndexPage() {
  const [selectedCountryCode, setSelectedCountryCode] = useState<string | null>(null);

  const handleCountryChange = (countryCode: string) => {
    setSelectedCountryCode(countryCode);
  };

  return (
    <DefaultLayout>
      <SearchBar onCountryChange={handleCountryChange} />
    </DefaultLayout>
  );
}
