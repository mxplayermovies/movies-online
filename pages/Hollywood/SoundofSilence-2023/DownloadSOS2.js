
import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import Max from 'pages/Max';
import ShareButtons from '@components/ShareButtons';
import Script from 'next/script';





function DownloadSOS2({ movie }) {
  

  if (!movie) {
    return <div className="text-3xl text-red-600 text-center">Loading...</div>;
  }
  useEffect(() => {
    const handleContextmenu = e => {
        e.preveSOSefault()
    }
    document.addEventListener('contextmenu', handleContextmenu)
    return function cleanup() {
        document.removeEventListener('contextmenu', handleContextmenu)
    }
}, [ ])
  const scrollSearch = myKey => {
    window.scrollTo(0, 0);
    frontMatter.handleSearch(myKey)
  };
  const [showPopup, setShowPopup] = useState(false);
  
  function togglePopup() {
    setShowPopup(!showPopup);
  }
  const ldJsonData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Movie",
    "name": movie.name,
    "description": movie.synopsis,
    "image": movie.poster,
    "genre": movie.genre,
    "datePublished": movie.yearRelease,
    "director": movie.director,
    "actor": movie.starring,
    "url": movie.link,
    "potentialAction": {
      "@type": "WatchAction",
      "target": [
        {
          "@type": "EntryPoint",
          "name": "Sound of Silence (2023)",
          "urlTemplate": "http://localhost:3000/Hollywood/SoundofSilence-2023/SoundofSilence"
        },
        {
          "@type": "EntryPoint",
          "name": "Sound of Silence (2023)",
          "urlTemplate": "http://localhost:3000/Hollywood/SoundofSilence-2023/SOSSR1"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": movie.rating,
      "bestRating": 10,
      "worstRating": 0,
      "ratingCount": 1
    },
    "author": [
      {
        "@type": "Person",
        "name": "DrTrailer",
        "url": "http://localhost:3000/DrTrailer.png"
      }
    ],
    "publisher": {
      "@type": "Organization",
      "name": "Uwatchfree",
      "logo": {
        "@type": "ImageObject",
        "url": "http://localhost:3000/og_image.jpg"
      }
    },
    "additionalProperty": {
      "@type": "PropertyValue",
      "name": "Action Platform",
      "value": [
        "Desktop Web Platform",
        "iOS Platform",
        "Android Platform"
      ]
    }
  });
    
  return (
    <div>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ldJsonData }}
      />
    <Head>
     <title>Watch Sound of Silence (2023) Full Movie Online Free | Uwatchfree™</title>
<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
<meta name="keywords" content="uwatchfree,watch free movies,full movie online free,hd movies,movie 2023,latest movie,dubbed movies,free movie download,watch sound of silence movie,index of sound of silence movie,sound of silence movie 2023,sound of silence movie online,watch sound of silence movie online free,sound of silence tv series,sound of silence movie download,sound of silence movie free download,sound of silence movie download" />
<meta property="og:locale" content="en_US" />   

<meta name="robots" content="index, follow" />  
<meta name="revisit-after" content="1 days" />
<meta property="og:site_name" content="Uwatchfree™ | Watch Movies, TV-Series & Sports Live Online Free" />
<meta property="og:type" content="movie" />
<meta property="og:title" content="Watch Sound of Silence (2023) | Uwatchfree™" />
<meta property="og:url" content="http://localhost:3000/Hollywood/SoundofSilence-2023/SoundofSilence" />
<meta property="og:image" content="https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1683197661/sound-of-silence-2023_h2mhoj.webp" />
<meta property="og:image:secure_url" content="http://localhost:3000/" />
<meta property="og:image:width" content="1280" />
<meta property="og:image:height" content="720" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="Watch Sound of Silence (2023) | Uwatchfree™" />
<meta name="twitter:image" content="https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1683197661/sound-of-silence-2023_h2mhoj.webp" />
<meta name="description" content="Watch One Day As A Lion Full Movie Online on Uwatchfree™, You can also download Sound of Silence (2023) in full HD quality to watch later offline." />

<link rel="canonical" href="http://localhost:3000/Hollywood/SoundofSilence-2023/" />
       </Head>
<Script src="../../propler/ads.js" defer />

       <div className="bg-gray-600 shadow ">



     
  <div className="flex flex-col items-center  justify-center space-y-12">
<ShareButtons url="http://localhost:3000" title="Watch Movies, TV-Series & Sports Live Online Free" image="http://localhost:3000/og_image.jpg" />
<img src={movie.banner} alt={`Banner for ${movie.title}`} loading="lazy" className=" rounded-3xl  mx-auto my-10 "  />
  <h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
     DOWNLOAD {movie.title} (2023) </h2>
  
  
    
 
<a href={movie.down2link1} target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>

<h2 className="text-blue-500 text-3xl title-font  mb-3 font-bold md:text-3xl">
Thank you for Dowloading and Enjoy. </h2>
<h2 className="text-blue-500 text-3xl title-font  mb-3 font-bold md:text-3xl ">
Please Share the Link.</h2>
<Max />



<a href="../../Hollywood/SoundofSilence-2023/SOSSR1" >
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0  ">
  Back

</button></a>
 




 </div> 
    </div> </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/movies.json');

  const data = await res.json();
  const selectedMovie = data.find(movie => movie.id === 'SOS');
  return {
    props: {
      movie: selectedMovie
    }
  };
}
 
export default DownloadSOS2;
