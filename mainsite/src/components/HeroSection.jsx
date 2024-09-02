import React from 'react'

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        {/* the h1 Heading*/}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          Weka biz yako online
          <span  className="bg-gradient-to-r from-orange-500  to-red-800 text-transparent bg-clip-text"> Kila Mtu akuone</span>
        </h1>
        {/* the h1 Heading ends*/}
        {/* the p tag*/}

        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
            BizPesa ni jukwaa la kisasa linalokupa uwezo wa kuweka biashara yako mtandaoni kwa urahisi na kwa gharama nafuu
        </p>
        {/* the p tag ends*/}
        {/* the buttons*/}
        <div className="flex justify-center my-10">
            <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md'>Start for free</a>
            <a href="#" className='py-3 px-4 mx-3 rounded-md border'>Documentation</a>
        </div>
        {/* the buttons ends*/}

        {/* the images*/}
        <div className="flex mt-10 justify-center">
            <img src="https://via.placeholder.com/150" className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4' alt="" />
            <img src="https://via.placeholder.com/150" className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4' alt="" />
        </div>

        {/* the images ends*/}
    </div>
  )
}

export default HeroSection