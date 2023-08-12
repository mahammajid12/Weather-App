import React from 'react'
import spinner from '../public/loading_spinner.gif'
import Image from 'next/image'

function Spinner() {
  return (
    <>
    <Image className='w-[200px] m-auto block' src={spinner} alt='Loading...'/>
    </>
  )
}

export default Spinner