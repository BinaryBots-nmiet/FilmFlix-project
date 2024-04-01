import React from 'react'
import Cards from '../../components/Cards'

const Trending = () => {
  return (
    <div className='w-full px-40 h-80'>
        <div className="flex flex-row items-center justify-between font-font-semibold text-white py-2 pb-4">
            <h1 className=' text-2xl'>Trending</h1>
            <div className="flex flex-row items-center justify-between bg-white text-black rounded-[3rem] h-8 w-2xl">
                <button className='mx-5'>Day</button>
                <button className='mx-5'>Week</button>
            </div>
        </div>
        <Cards />
    </div>
  )
}

export default Trending
