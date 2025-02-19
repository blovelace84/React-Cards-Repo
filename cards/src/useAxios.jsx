import { useState } from "react";
import axios from "axios";

function useAxios(baseUrl) {
  const [data, setData] = useState([]);

  const addData = async (endpoint = "") => {
    try {
      const response = await axios.get(`${baseUrl}${endpoint}`);
      console.log("API Response:", response.data);
      setData((prevData) => [...prevData, response.data]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return [data, addData];
}

export default useAxios;
