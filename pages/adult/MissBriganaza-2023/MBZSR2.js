
import Link from 'next/link'
import Rating from 'pages/Rating';
import Head from 'next/head'

import React, { useEffect, useState } from 'react';
import styles from '@styles/video-player.module.css'
import AdultSkipAds from '@components/AdultSkipAds'
import Max from 'pages/Max';

import ShareButtons from '@components/ShareButtons';
import Script from 'next/script';
import Ads from '@components/Ads';






const MBZSR2  = () => {

  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowAd(true);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleAdClose = () => {
    setShowAd(false);
  };
  
  useEffect(() => {
    const handleContextmenu = e => {
        e.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextmenu)
    return function cleanup() {
        document.removeEventListener('contextmenu', handleContextmenu)
    }
}, [ ])
const schemaData   = {
  "@context": "https://schema.org",
  
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "http://localhost:3000/Adult/MissBriganaza-2023/MissBriganaza"
    
  },
  "headline": "Miss Briganaza (2023) Full Movie Online Free | Uwatchfree™",
  "image": "https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681610082/miss-briganaza-2023_calsho.webp",

  "datePublished": '2023-01-01T09:00:00.000Z',
  "dateModified": '2023-01-01T09:00:00.000Z',
  "author": [{
      "@type": "Person",
      "name": "DrTrailer",
      "url": "http://localhost:3000/DrTrailer.png"
    }],
  
  "publisher": {
      "@type": "Organization",
      "name": "Uwatchfree",
      "logo": {
        "@type": "ImageObject",
        "url": "http://localhost:3000/og_image.jpg"
      }
    },
  "description": "Uwatchfree™ Miss Briganaza (2023) Full Movie Online Free | Watch Movies, TV-Series & Sports Live Online Free."

};
const scrollSearch = myKey => {
  window.scrollTo(0, 0);
  frontMatter.handleSearch(myKey)
};
const [showPopup, setShowPopup] = useState(false);

function togglePopup() {
  setShowPopup(!showPopup);
}

  return (
    <div>
       <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
  />
     <Head>
     <title>Watch Miss Briganaza (2023) Full Movie Online Free | Uwatchfree™</title>
<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
<meta name="keywords" content="uwatchfree,watch free movies,full movie online free,hd movies,movie 2023,latest movie,dubbed movies,free movie download,watch miss briganaza movie,index of miss briganaza movie,miss briganaza movie 2023,miss briganaza movie online,watch miss briganaza movie online free,miss briganaza tv series,miss briganaza movie download,miss briganaza movie free download,miss briganaza movie download" />

<meta property="og:locale" content="en_US" />   

<meta name="robots" content="index, follow" />  
<meta name="revisit-after" content="1 days" />
<meta property="og:site_name" content="Uwatchfree™ | Watch Movies, TV-Series & Sports Live Online Free" />
<meta property="og:type" content="movie" />

<meta property="og:title" content="Watch Miss Briganaza (2023) | Uwatchfree™" />
<meta property="og:url" content="http://localhost:3000/Adult/MissBriganaza-2023/MissBriganaza" />
<meta property="og:image" content="https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681610082/miss-briganaza-2023_calsho.webp" />
<meta property="og:image:secure_url" content="http://localhost:3000/" />
<meta property="og:image:width" content="1280" />
<meta property="og:image:height" content="720" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="Watch Miss Briganaza (2023) | Uwatchfree™" />
<meta name="twitter:image" content="https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681610082/miss-briganaza-2023_calsho.webp" />
<meta name="description" content="Watch Miss Briganaza Full Movie Online on Uwatchfree™, You can also download  Miss Briganaza (2023) in full HD quality to watch later offline." />
<script src="../../propler/ads.js" defer></script>
<link rel="canonical" href="http://localhost:3000/Adult/MissBriganaza-2023/" />
 

      </Head>
<Script src="../../propler/ads.js" defer />

      <div className="bg-gray-600 ">


        
         <AdultSkipAds />
    <h1 className="mb-4 py-5 font-bold leading-none tracking-tight text-white  text-center md:text-2xl lg:text-3xl dark:text-white"  style={{ color: "#40D7BC", textShadow: "5px 5px 2px #000" }}>Watch Miss Briganaza (2023) </h1>

    <div className={styles['iframe-container']}>
      <iframe className="  rounded-3xl  mr-8 flex  border-1 border-blue-600 bg-gray-600 p-2 " webkitallowFullScreen mozallowFullScreen allowFullScreen src="https://dood.yt/e/9lxjw6mmyfm5" />
    </div>    
    <h3 className="mb-9 text-bg  text-black-500 text-red-600 text-center xl:px-4 ">*Note: Pls Select the in the Player to Change your Language of your Choice and Setting  to Change the Quality of Video.</h3>
<ShareButtons url="http://localhost:3000" title="Watch Movies, TV-Series & Sports Live Online Free" image="http://localhost:3000/og_image.jpg" />


<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
    <a href="../MissBriganaza-2023/MissBriganaza" > 
      <h2 > Watch Miss Briganaza (2023) Server 1</h2></a></button>
    <div className="flex flex-col space-y-4 m-8">
    <Rating /></div>
    <div className="flex flex-col space-y-4 ...">
    <div className="flex items-center  justify-center">
    <svg aria-hidden="true" className="w-10 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-10 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-10 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-10 h-10 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
   <h2 className="text-white font-bold text-xl ">  5.5 Out of 10</h2>
    
</div>
 <div className="flex container flex-col items-center justify-center space-y-3 text-xl font-bold text-center text-yellow-100/50"style={{ textShadow: "0px 0px 2px #000" }} >
<h2 ><strong>Genre:</strong> Adult, Hot, Romance.</h2>
<h2 ><strong>Release year:</strong> 2023</h2>
<h2 ><strong>Director:</strong> WoW</h2>
<h2 ><strong>Country:</strong> India</h2>
<h2 ><strong>Starring:</strong> NA.</h2>
<h2 ><strong>Description:</strong> Miss Briganaza (2023) is Hot Adult WoW Web series.</h2>
</div>
<div className="flex flex-col py-10  text-blue-600 text-center items-center justify-center">

<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 "  onClick={togglePopup} >

        <h2 >Watch Offical Trailer</h2></button>
        </div>
   
        {showPopup && (
        <div className="popup-overlay">
         
         <div className="popup ">
               <button className="close-button" onClick={togglePopup}>
               <h2 className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 " >  Close</h2>  
          </button>
          <h2 className="text-2xl font-bold" >Offical Trailer Miss Briganaza (2023) </h2>
           <div className={styles['iframe-container']}>
 <iframe className="  rounded-3xl  mr-8 flex  border-1 border-blue-600 bg-gray-600 p-2 " webkitallowFullScreen mozallowFullScreen allowFullScreen src="https://sbhight.com/e/cma5z6i7ciop.html" />
                   
             </div>
          </div> </div>
       
      )}

      <style jsx>{`
        .popup-overlay {
          position: relative;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }

             .popup {
          width: 800px;
          background-color: gray;
          padding: 10px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          animation: slide-down 0.5s ease;
        }

       
        @keyframes slide-down {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>


    <div className="flex flex-col py-10  text-blue-600 text-center items-center justify-center">
 
 <h3  className="text-xl font-bold leading-normal mt-0 mb-2 text-blue-600 "> Miss Briganaza (2023) </h3>
 <Link href="../../Adult/MissBriganaza-2023/DownloadMBZ1">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
Download 

</button></Link>

<h3 className="text-xl font-bold leading-normal mt-0 mb-2 text-blue-600 ">  Miss Briganaza (2023)</h3>
<Link href="../../Adult/MissBriganaza-2023/DownloadMBZ2">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
Download 

</button></Link>


<Max /> 
<Link href="../../AdultAds">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
  Back To Adult Section

</button></Link>



</div>
    </div> </div>


  )
}

export default MBZSR2 ;