import React, { useEffect } from "react";
import "./App.css";
//import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com?apikey=3f369e06";

const App = () => {
  const searchMovies = async (title: string) => {
    const repsonse = await fetch(`${API_URL}&s={title}`);
    const data = await repsonse.json();
    console.log(data.Search);
  };
  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return <h1>App</h1>;
};

export default App;
