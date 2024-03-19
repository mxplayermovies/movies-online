
import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import Max from 'pages/Max';
import ShareButtons from '@components/ShareButtons';
import Script from 'next/script';





function DownloadRID1({ movie }) {
  

  if (!movie) {
    return <div className="text-3xl text-red-600 text-center">Loading...</div>;
  }
  useEffect(() => {
    const handleContextmenu = e => {
        e.preventDefault()
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
    "@type": "TVSeries",
    name: movie.name,
    description: movie.synopsis,
    image: movie.poster,
    genre: movie.genre,
    datePublished: movie.yearRelease,
    director: movie.director,
    actor: movie.starring,
    url: movie.link,
    
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: movie.rating,
      bestRating: 10,
      worstRating: 0,
      ratingCount: 1,
    },
    "episode": [
      {
        "@type": "TVEpisode",
        "name": "Ride Episode 1",
        "url": "http://localhost:3000/Hollywood/Ride-2023/RideP1"
      },
      {
        "@type": "TVEpisode",
        "name": "Ride Episode 2",
        "url": "http://localhost:3000/Hollywood/Ride-2023/RideP2"
      },
      {
        "@type": "TVEpisode",
        "name": "Ride Episode 3",
        "url": "http://localhost:3000/Hollywood/Ride-2023/RideP3"
      },
      {
        "@type": "TVEpisode",
        "name": "Ride Episode 4",
        "url": "http://localhost:3000/Hollywood/Ride-2023/RideP4"
      },
      {
        "@type": "TVEpisode",
        "name": "Ride Episode 5",
        "url": "http://localhost:3000/Hollywood/Ride-2023/RideP5"
      },
      {
        "@type": "TVEpisode",
        "name": "Ride Episode 6",
        "url": "http://localhost:3000/Hollywood/Ride-2023/RideP6"
      },
     
    ],
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
    potentialAction: {
      "@type": "WatchAction",
      "name": "Ride (2023)",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "http://localhost:3000/Hollywood/Ride-2023/RideP1",
      },
    },
  });


  return (
    <div>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ldJsonData }}
      />
      <Head>
     <title>Watch Ride (2023) Full Movie Online Free | Uwatchfree™</title>
<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
<meta name="keywords" content="uwatchfree,watch free movies,full movie online free,hd movies,movie 2023,latest movie,dubbed movies,free movie download,watch ride movie,index of ride movie,ride movie 2023,ride movie online,watch ride  movie online free,ride tv series,ride movie download,ride movie free download,ride movie download" />
<meta property="og:locale" content="en_US" />   

<meta name="robots" content="index, follow" />  
<meta name="revisit-after" content="1 days" />
<meta property="og:site_name" content="Uwatchfree™ | Watch Movies, TV-Series & Sports Live Online Free" />
<meta property="og:type" content="movie" />
<meta property="og:title" content="Watch Ride (2023) | Uwatchfree™" />
<meta property="og:url" content="http://localhost:3000/Hollywood/Ride-2023/RideP1" />
<meta property="og:image" content="https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1682204324/ride-2023_svnpm2.webp" />
<meta property="og:image:secure_url" content="http://localhost:3000/" />
<meta property="og:image:width" content="1280" />
<meta property="og:image:height" content="720" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="Watch Ride (2023) | Uwatchfree™" />
<meta name="twitter:image" content="https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1682204324/ride-2023_svnpm2.webp" />
<meta name="description" content="Watch Ride Full Movie Online on Uwatchfree™, You can also download Ride (2023) in full HD quality to watch later offline." />

<link rel="canonical" href="http://localhost:3000/Hollywood/Ride-2023/" />
       </Head>
<Script src="../../propler/ads.js" defer />

       <div className="bg-gray-600 shadow ">



     
       <div className="flex flex-col items-center  justify-center space-y-12">
<ShareButtons url="http://localhost:3000" title="Watch Movies, TV-Series & Sports Live Online Free" image="http://localhost:3000/og_image.jpg" />
<img src={movie.poster} alt={`Poster for ${movie.title}`} loading="lazy" className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl " />
  <h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
     DOWNLOAD {movie.title} (2023) </h2>
  
  
    
    <h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
    {movie.name} Episode 1 (2023) </h2>
<a href={movie.down1link1} target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
{movie.name} Episode 2 (2023) </h2>
<a href={movie.down1link2} target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
{movie.name} Episode 3 (2023) </h2>
<a href={movie.down1link3} target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
{movie.name}  Episode 4 (2023) </h2>
<a href={movie.down1link4} target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>

<h2 className="text-blue-500 text-lg title-font  mb-3 font-bold md:text-lg ">
Thank you for Dowloading and Enjoy. </h2>
<h2 className="text-blue-500 text-lg title-font  mb-3 font-bold md:text-lg ">
Please Share the Link.</h2>
<Max />



<a href="../../Hollywood/Ride-2023/RideP1" >
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
  const selectedMovie = data.find(movie => movie.id === 'RID');
  return {
    props: {
      movie: selectedMovie
    }
  };
}
 
export default DownloadRID1;
