import { LIST_COUNTRIES } from "@/graphql/queries";
import DefaultLayout from "@/layouts/default";
import CountryTable from "@/module/table/CountryTable";
import Filters from "@/module/table/Filters";
import { useCountriesStore } from "@/store";
import { ApolloClient, InMemoryCache, useQuery } from "@apollo/client";
import { Spinner } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";


const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com",
});


export default function IndexPage() {

  const {
    setCountries,
    setLoading,
  } = useCountriesStore();


  const { loading, error } = useQuery(LIST_COUNTRIES, {
    client,
    onCompleted: (data) => {
      setCountries(data.countries);
      setLoading(false);
    },
    onError: () => setLoading(false),
  });


  if (loading) return <Spinner color="primary" />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <DefaultLayout>
      <Filters />
      <CountryTable />
      <Toaster />
    </DefaultLayout>
  );
}
