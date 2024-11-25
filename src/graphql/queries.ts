import { gql } from "@apollo/client";

export const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
      capital
      currency
      languages {
        name
      }
      continent {
        name
      }
      emoji
    }
  }
`;

export const GET_CITY_BY_NAME = gql`
  query GetCityByName($name: String!) {
    getCityByName(name: $name) {
      id
      name
      country
      coord {
        lon
        lat
      }
      weather {
        summary {
          title
          description
          icon
        }
        temperature {
          actual
          feelsLike
          min
          max
        }
        wind {
          speed
          deg
        }
        clouds {
          all
          visibility
          humidity
        }
        timestamp
      }
    }
  }
`;