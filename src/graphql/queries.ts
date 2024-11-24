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
