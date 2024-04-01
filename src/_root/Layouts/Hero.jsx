import React from 'react'

const Hero = () => {
  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center" 
    // style={{backgroundImage: "url('https://t4.ftcdn.net/jpg/02/71/50/69/360_F_271506927_WWFfd92jDIIDx6DgMflakU14o5jRPgBm.jpg')"}}
    >
      <div className="text-center text-white mb-10">
        <h1 className="text-8xl font-bold">Welcome.</h1>
        <p className="text-2xl">Millions of movies, TV shows and people to discover. Explore now.</p>
      </div>
      <div className="flex h-14 w-6/12 bg-gray-300 rounded-[2rem] overflow-hidden shadow-md mb-20">
          <input type="text" className="w-full px-6 flex items-center bg-transparent text-xl text-gray-800 focus:outline-none" placeholder="Search..." />
          <button className="bg-blue-500 text-white px-10 py-2 w-xl text-xl">Search</button>
        </div>
    </div>
  )
}

export default Hero
