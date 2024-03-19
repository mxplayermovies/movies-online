
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from 'next/link';
import {Carousel}  from "@components/ACarousel";


function Most() {
  const [showAd, setShowAd] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [remainingTime, setRemainingTime] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAd(true);
    }, 1000); // Display ad after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosed(true);
  };

  return (
    <div>
    <Head>
   

    </Head>

      {showAd && !isClosed && (
        // ,Add your ad component here
        <>



<div className="flex bg-gray-500 bg-opacity-75 transition-opacity " >
  <div className="carousel-inner relative w-full cursor-pointer mx-10 flex-col overflow-hidden " >


  <h1 className="mb-4 py-5  font-bold leading-none tracking-tight text-white  flex flex-col items-center justify-center text-2xl dark:text-white"style={{ color: "#40D7BC", textShadow: "5px 5px 2px #000" }}  >
    Latest Adult Movies
   </h1>
 
              <Carousel />
             

     <div className="mb-4 py-5  font-bold leading-none tracking-tight text-white  flex flex-col items-center justify-center text-3xl dark:text-white"  >      
      {remainingTime > 0 && (
        <div>
          Ad will be Skippable in {remainingTime} <p className="mb-4 py-5  font-bold leading-none tracking-tight text-white  flex flex-col items-center justify-center text-2xl dark:text-white"  >  Seconds...</p>
        </div>
      )}
       {remainingTime <= 0 && (
        <Link href="/Movies">
      <button onClick={handleClose} type="button" className=" inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900  group-hover:bg-opacity-0 ">Skip Ad</button></Link>
       )}
      </div></div> </div> 

  


          
        </>
      )}
    </div>
  );
}

export default Most;