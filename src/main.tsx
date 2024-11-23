import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "./provider.tsx";
import "@/styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";


const client = new ApolloClient({
  uri: `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${import.meta.env.VITE_WEATHER_API_KEY}`,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Provider>
          <App />
        </Provider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
);
