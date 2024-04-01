import React from 'react'

const Card = ({movieName,movieType, img, date, rate="not avl"}) => {
        // console.log("props:", props)
        // console.log(props.userName);

  return (
    <div className="relative h-[500px] w-[300px] rounded-lg mt-4">
        <div className="relative h-[400px] w-[300px] rounded-md mt-4 overflow-hidden">
            <img
                src={img}
                alt=""
                className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute bottom-4 right-4 text-right bg-pink-600 rounded-md">
            <p className="text-sm px-1 text-white">{movieType}</p>
            </div>
        </div>

        <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-xl font-semibold text-white mt-10">{movieName}</h1>
            <p className="text-sm text-gray-500">{date}</p>
        </div>
        <div className="absolute bottom-20 left-4">
            <p className="mt-2 pt-2 text-xl text-gray-900 pb-2 bg-gray-200 h-14 w-14 text-center border-green-500 border-4 rounded-full flex items-center justify-center">{rate}</p>
        </div>
    </div>
  
    )
}

export default Card
