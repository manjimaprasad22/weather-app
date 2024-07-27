import React, { useEffect, useState } from 'react'
import '../assets/style.css'
import '../assets/responsive.css'
import WeatherCard from '../components/WeatherCard';
import Prediction from '../components/Prediction';
import { getWeatherDetailbyplace, getWeatherDetails, getWeatherPrediction } from '../service/ApiService';
import { useDispatch, useSelector } from 'react-redux';
import { setlatitute, setlongitude } from '../redux/LatAndLong';
const Home = () => {
    const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [Data, setData] = useState([]);
  const [predictData, setpredictData] = useState([]);
  const [place, setplace] = useState();
  const dispatch = useDispatch()
  const { latitute, longitude} = useSelector((state) => state.location);
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        console.log('Latitude:', position.coords.latitude, 'Longitude:', position.coords.longitude);
      });
    } else {
      console.log('Geolocation is not available in your browser.');
    }
  }, []);
  useEffect(() => {
   handlefetchweather()
   handleprediction()
   dispatch(setlatitute(lat))
   dispatch(setlongitude(long))
  }, [lat,long])
  const handlefetchweather = async ()  =>{
    try {
        const response = await getWeatherDetails({lat,long});
        setData(response)
    } catch (error) {
        console.log(error);
    }
  }
  const handlesearch = async ()  =>{
    try {
        const response = await getWeatherDetailbyplace({place});
        setData(response)
        console.log(response);
        dispatch(setlatitute(response?.coord?.lat ))
        dispatch(setlongitude(response?.coord?.lon))
        handleprediction()
    } catch (error) {
        console.log(error);
    }
  }
  const handleprediction = async ()  =>{

    try {
        const response = await getWeatherPrediction({latitute,longitude});
        setpredictData(response)
    } catch (error) {
        console.log(error);
    }
  }
  
  return (
    <div className='home'>
  <div className="container d-flex flex-wrap">
    <div className="w-100 mb-3 d-flex justify-content-center">
      <div className="box">
        <input type="text" placeholder="Search place" value={place} onChange={(e)=>setplace(e.target.value)}/>
        <i className="fa-solid fa-search" onClick={handlesearch}></i>
      </div>
    </div>
    <div className="col-lg-6 col-12 mb-3">
      <WeatherCard data={Data}/>
    </div>
    <div className="col-lg-6 col-12 mb-3">
      <Prediction data={predictData}/>
    </div>
  </div>
</div>

  )
}

export default Home
