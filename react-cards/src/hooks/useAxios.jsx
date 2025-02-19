import { useState } from "react";
import axios from "axios";

function useAxios(baseUrl, formatData = (data) => data) {
  const [data, setData] = useState([]);

  async function fetchData(endpoint = "", isBulk = false) {
    try {
      const response = await axios.get(`${baseUrl}${endpoint}`);

      if (isBulk) {
        // Fetch each Pokémon's details from its URL
        const allPokemon = await Promise.all(
          response.data.results.map(p => axios.get(p.url))
        );

        // Format each Pokémon and add to state
        setData(prevData => [
          ...prevData,
          ...allPokemon.map(res => formatData(res.data))
        ]);
      } else {
        setData(prevData => [...prevData, formatData(response.data)]);
      }

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function clearData() {
    setData([]);
  }

  return [data, fetchData, clearData];
}

export default useAxios;
