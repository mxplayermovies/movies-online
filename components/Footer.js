

import Link from 'next/link'


export default function Footer() {
  return (
    <>
   <div className="bg-[#000]">
      <footer className="text-white body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
 
      <Link href="/" className="flex title-font items-center md:justify-start justify-center text-white">
      <img src='/logo.png' alt='Logo' width={500} height={150} className="rounded-3xl " /></Link>
      <p className="text-white mt-2 text-center md:text-center"style={{ marginTop: '10px', textShadow: "5px 5px 5px #2b2 "}}> The Best Movies Platform HD Movies.</p>
      {/* <p className="mt-2 mx-6 text-sm text-gray-500 px-5">The Best Movies Platform HD Movies </p> */}
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
    
      <h2 className="title-font text-white tracking-widest text-sm mb-3 font-bold md:text-sm">HOLLYWOOD MOVIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white text-xl font-bold hover:text-blue-800">ACTION</a>
          </li>
          <li>
            <a className="text-white text-xl font-bold hover:text-blue-800">DRAMA</a>
          </li>
          <li>
            <a className="text-white text-xl font-bold hover:text-blue-800">THRILLER</a>
          </li>
          <li>
            <a className="text-white text-xl font-bold hover:text-blue-800">ROMANCE</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
    
        <h2 className="title-font text-white tracking-widest text-sm mb-3 font-bold md:text-sm">BOLLYWOOD MOVIES</h2>
        <nav className="list-none mb-10">
        <li>
            <a className="text-white text-xl font-bold hover:text-blue-800">ACTION</a>
          </li>
          <li>
            <a className="text-white text-xl font-bold hover:text-blue-800">DRAMA</a>
          </li>
          <li>
            <a className="text-white text-xl font-bold hover:text-blue-800">THRILLER</a>
          </li>
          <li>
            <a className="text-white text-xl font-bold hover:text-blue-800">ROMANCE</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font  text-white tracking-widest text-sm mb-3 font-bold md:text-sm">ADULT MOVIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white text-xl font-bold hover:text-blue-800">GENERAL</a>
          </li>
          <li>
            <a className="text-white text-xl font-bold hover:text-blue-800">HOT +18</a>
          </li>
          <li>
            <a className="text-white text-xl font-bold hover:text-blue-800">PURE ADULT</a>
          </li>
          <li>
            <a className="text-white text-xl font-bold hover:text-blue-800">EROTICA</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font  text-white tracking-widest text-sm mb-3 font-bold md:text-sm">ABOUT US</h2>
        <nav className="list-none mb-10">
          <li>
          <a href="../../../intro/contact" className="text-white text-xl font-bold hover:text-blue-800">Contact</a>
          </li>
          <li>
          <a href="../../../intro/privacy" className="text-white text-xl font-bold hover:text-blue-800">Privacy Policy</a>
          </li>
          <li>
          <a href="../../../intro/tearms" className="text-white text-xl font-bold hover:text-blue-800">Tearm of Use</a>
          </li>
          <li>
          <a href="../../../intro/dmca" className="text-white text-xl font-bold hover:text-blue-800">D.M.C.A</a>
          </li>
        </nav>
      </div>
    </div>
  </div>

  <div className="bg-black">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-white text-sm text-center sm:text-left">© 2024 Uwatchfree Online™ —
        <a href="https://twitter.com/MxplayerMovies" rel="noopener noreferrer" className="text-white ml-1" target="_blank">The Best Movies Platform HD Movies. All rights reserved.</a>
      </p>
      
    </div>
  </div>
</footer>
</div>
    </>
  )
}
