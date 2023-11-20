import React from 'react';  // eslint-disable-line

import axios from "axios"


// const URL='https://openweathermap.org/'
// const URL='https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}';
const URL='https://api.openweathermap.org/data/2.5/weather';
const API_ID = '4549d652fc56561eb1ed94121de13f9e';

export const apiOpenWeather = async (city, country) => {

    return await axios.get(`${URL}?q=${city}, ${country}&appid=${API_ID}&units=metric`);
}