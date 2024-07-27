import React from 'react'
import '../assets/style.css'

const WeatherCard = ({data}) => {
  console.log(data);
  const dateObject = new Date();
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  const formattedDate = dateObject.toLocaleDateString('en-US', options);
  return (
    <div className='d-block weather-card'>
      <h4>Today</h4>
      <h1><i class="fa-solid fa-temperature-quarter"></i> {data?.main?.temp} &deg;</h1>
      <div> feels like {data?.main?.feels_like} &deg;</div>
      <div>{data?.name}</div>
      <div><i class="fa-solid fa-calendar-days"></i> {formattedDate}</div>
      <div> <i class="fa-solid fa-smog"></i> humidity {data?.main?.humidity} | <i class="fa-solid fa-wind"></i> wind speed {data?.wind?.speed} | <i class="fa-solid fa-water"></i> sea level {data?.main?.sea_level}</div>

    </div>
  )
}

export default WeatherCard
