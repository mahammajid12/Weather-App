import React from 'react'
import Image from 'next/image'

function Weather({data}) {
    console.log(data)
  return (
    <div className='z-[20] container mx-auto px-[15%] relative flex flex-col justify-between max-w-[500] w-full h-[60vh] m-auto p-4'>
        <div className='relative flex justify-between pt-12'>
            <div className='flex flex-col items-center'>
                <Image src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt='/'
                width='100'
                height='100'
                />
                <p className='text-white text-2xl'>{data.weather[0].main}</p>
            </div>
            <p className='text-9xl text-white'>{data.main.temp.toFixed(0)}&#176;</p>
        </div>
        <div className='bg-black/50 relative p-8 rounded-md'>
            <p className='text-2xl text-center pb-5 text-white'>Weather in {data.name}</p>
            <div className='flex justify-between flex-center text-white px-[10%]'>
                <div>
                    <p className='text-xl'>Feels Like</p>
                    <p className='font-bold text-3xl'>{data.main.feels_like}&#176;</p>
                </div>
                <div>
                    <p className='text-xl'>Humidity</p>
                    <p className='font-bold text-3xl'>{data.main.humidity}%</p>
                </div>
                <div>
                    <p className='text-xl'>Winds</p>
                    <p className='font-bold text-3xl'>{data.wind.speed.toFixed(0)} MPH</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather