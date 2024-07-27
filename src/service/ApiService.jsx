import axios from "axios";
const base_path = process.env.REACT_APP_API_URL;
const base_path_time = process.env.REACT_APP_API_URL_TIME;
const api_key = process.env.REACT_APP_API_KEY;

export const getWeatherDetails = async ({lat,long}) => {
  const response = await axios.get(`${base_path}/data/2.5/weather?q=&lat=${lat}&&lon=${long}&units=metric&appid=${api_key}`);
  return response.data;
};
export const getWeatherDetailbyplace = async ({place}) => {
    console.log(place);
  const response = await axios.get(`${base_path}/data/2.5/weather?q=${place}&units=metric&appid=${api_key}`);
  return response.data;
};
export const getWeatherPrediction = async ({latitute,longitude}) => {
  const response = await axios.get(`${base_path_time}/v1/forecast?latitude=${latitute}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
  return response.data;
};