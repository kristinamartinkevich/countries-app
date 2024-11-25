# Countries Explorer Application with Weather Integration

## Technologies Used

- [Vite](https://vitejs.dev/guide/)
- [NextUI](https://nextui.org)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [Framer Motion](https://www.framer.com/motion)
- [Zustand](https://zustand-demo.pmnd.rs)
- [Jest](https://jestjs.io)

## How to Use

### Go to [https://cors-anywhere.herokuapp.com/corsdemo](https://cors-anywhere.herokuapp.com/corsdemo)

and press on "Request temporary access to the demo server"


### Obtain OpenWeather API keys
To create an API key for a free OpenWeather, follow these steps:

1. **Step 1**: Sign in to OpenWeather or create a new account on OpenWeather’s registration page.
2. **Step 2**: When registering for the first time, provide your email address and wait for a confirmation email from OpenWeather. The email will hold the API key linked to your free plan.


### Install dependencies


```bash
npm install
```

### Run the development server and the mock database

```bash
npm run dev
```


# Task: Countries Explorer Application with Weather Integration

## Objective
Build a single-page application using **React**, **TypeScript**, and **GraphQL** that demonstrates your expertise in front-end development. The application will display data about countries by consuming the public Countries GraphQL API and integrating weather information using a public weather API.

---

## Requirements

### Core Features

1. **Country Search**
   - Allow users to search for countries by name.
   - Display a list of matching countries with key details, such as:
     - Country name
     - Capital
     - Region
     - Flag

2. **Country Details with Weather Information**
   - Enable users to select a country to view more detailed information, such as:
     - Languages spoken
     - Currencies
     - Population
     - Neighboring countries
     - Time zones
   - **Weather Information**:
     - Display the current weather for the country's capital city.
     - Include:
       - Temperature
       - Weather conditions
       - An icon representing the weather.

3. **Filter and Sort**
   - Implement functionality to filter countries by:
     - Region
     - Language
   - Provide options to sort the list by:
     - Name
     - Population
     - Area

4. **Responsivity**
   - Ensure the application is responsive and visually coherent on various devices.

---

## Implementation Requirements

1. **GraphQL and RESTful API Integration**
   - Use a GraphQL client library to manage queries and handle data from the Countries GraphQL API.
   - Integrate a public weather API to fetch weather data for the capital cities.
   - Handle both GraphQL and RESTful API calls.
   - Manage asynchronous data fetching with appropriate loading and error states.

2. **Type Safety**
   - Use **TypeScript** for type safety and reliability.

3. **Build Configuration**
   - Configure the build process using **Vite** or **Webpack**.

4. **Testing**
   - Write tests to ensure the reliability of your application.

5. **Error Handling**
   - Implement comprehensive error handling for:
     - Network failures
     - API errors
     - Invalid inputs

---

## Written Explanations

### Architecture and Design
- Explain the overall architecture of your application and the benefits of these design choices for stakeholders.

### Challenges Faced
- Reflect on challenges encountered and how they were addressed.
- Discuss regrets or next steps if more time was available.

---

## Submission Guidelines

1. **Code Repository**
   - Host your code on a platform like GitHub or GitLab.
   - Ensure the repository is publicly accessible.

2. **Instructions**
   - Include clear instructions to set up and run your application.

3. **Documentation**
   - Include written explanations (architecture, challenges, etc.) within the `README`.

---

## Notes

### Weather API Integration
- **Suggested Weather API**: [OpenWeatherMap API](https://api.openweathermap.org/data/2.5/weather)
  - Requires a free API key. Include instructions on how to obtain one.
- **Alternative**: Use another public weather API, such as WeatherAPI, which may offer a free tier.
- **Endpoint**: `https://api.openweathermap.org/data/2.5/weather`

### API Rate Limits
- Be mindful of API rate limits and handle them appropriately to ensure smooth application performance.
