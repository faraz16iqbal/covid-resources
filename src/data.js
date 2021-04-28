import axios from "axios";

export const fetchData = async (location) => {
  const data = await axios.get(
    `https://covid-resources-backend.herokuapp.com/api/resources/${location}`
  );
  return data.data;
};

export const fetchMHData = async (location) => {
  const data = await axios.get(
    `https://covid-resources-backend.herokuapp.com/api/mentalhealth`
  );
  return data.data;
};
