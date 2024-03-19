import Game from "@components/Game";
import React, { useEffect, useState } from 'react';


const scrollSearch = myKey => {
  window.scrollTo(0, 0);
  frontMatter.handleSearch(myKey)
};

export default function Home () {
  useEffect(() => {
    const handleContextmenu = e => {
        e.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextmenu)
    return function cleanup() {
        document.removeEventListener('contextmenu', handleContextmenu)
    }
}, [ ])
  return (
    <div>
        
      <div className="bg-gray-600 ">
    
       <h1 className="text-center font-bold text-black text-3xl py-3 px-4">Sunday 09th April 2023  </h1>
       <h1 className="text-center font-bold text-black text-2xl py-3 px-4">
        Schedule Time UK GMT+1
          </h1>
        
   <Game />
    </div>
    </div>
  );
}
export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/movies.json');

  const data = await res.json();
  const selectedMovie = data.find(movie => movie.id === 'WSL');
  return {
    props: {
      movie: selectedMovie
    }
  };
}
   // https://daddyhd.com/embed/stream-32.php