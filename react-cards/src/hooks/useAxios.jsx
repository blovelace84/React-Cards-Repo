// src/hooks/useAxios.js
import { useState } from "react";
import axios from "axios";

function useAxios(baseUrl) {
  const [data, setData] = useState([]);

  async function addData(endpoint = "") {
    try {
      const response = await axios.get(`${baseUrl}${endpoint}`);
      setData(prevData => [...prevData, response.data]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const clearData = () => {
    setData([]);
  }

  return [data, addData, clearData];
}

export default useAxios;
