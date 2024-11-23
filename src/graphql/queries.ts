import { gql } from '@apollo/client';

export const GET_COUNTRY_DETAILS = gql`
query GetCountryDetails($code: ID!) {
    country(code: $code) {
        name
        capital
        population
    languages {
            name
        }
    currencies {
            name
        }
    borders {
            name
        }
        timezones
    }
}`;
