import Head from 'next/head';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import { useState } from 'react';
import {BsSearch} from 'react-icons/bs'
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import Weather from '../components/Weather';
import Spinner from '../components/Spinner';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherData } from '../store/actions/WeatherActions';

export default function Home() {

  const [city,setCity] = useState('')

  const dispatch = useDispatch();
  const {weatherData,loading,error} = useSelector((state) => state.weather);


  const fetchWeather = (e) => {
    e.preventDefault();
    dispatch(fetchWeatherData(city));
  };

  console.log(weatherData)

  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`

  // const fetchWeather = async (e) => {
  //   e.preventDefault()
  //   setError('')
  //   setWeather({})
  //   setLoading(true)
  //   try{
  //   await axios.get(url).then((response)=>{
  //      setWeather(response.data)
  //     //console.log(response.data)
  //   })
  //   }catch{
  //     setError('City name not valid')
  //   }
  //    setCity('')
  //   setLoading(false)
  // }

  if (loading){
    return <Spinner/>
  }

  else{

  return (
    <div>
      <Head>
        <title>Weather - Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles/global.css" />
      </Head>
      
      <div className='absolute top-0 left-0 right-0 bottom-0'/>
      <Image src='/images/weather.webp' layout='fill' className={`${styles.bgimage} object-cover z-[-1]`}/>

      {/* Search form */}
      <div className='container mx-auto px-[15%] relative justify-between items-center max-w-[500] w-full m-auto pt-10 text-white z-10'>
        <h1 className='text-center text-2xl text-gray-700 font-bold mb-8'>Know the weather of your City </h1>
        <form onSubmit={fetchWeather} className='flex justify-between items-center w-full m-auto p-3 bg-transparent border border-grey-300 text-white rounded-2xl'>
          <div className='w-full'> 
            <input onChange={(e)=>setCity(e.target.value)} className='bg-transparent w-full border-none text-white focus:outline-none text:2xl' type='text' placeholder='Enter city name'/>
          </div>
          <button onClick={fetchWeather}><BsSearch size={20}/></button>
        </form>
        <p className='text-xl text-red-600 py-6'>{error}</p>
      </div>

      {/* Weather */}
      {/* <Weather data={weatherData}/> */}
      {weatherData.main && <Weather data={weatherData}/>}
      
    </div>
  )
  }
}
