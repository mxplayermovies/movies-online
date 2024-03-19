
import Image from 'next/image'
import Link from 'next/link'


export default function ErrorPage() {
    return (
      <div>
    
 
          <div className="text-red-600 text-4xl font-bold flex title-font py-5 items-center justify-center">Error message: Oops! Something Went WRONG!!! </div>
          <div className=" flex items-center justify-center">
          <img src='https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681689464/page-not-found_iwuhyv.webp' alt='404' width={800} height={400} loading="lazy"/>        
       </div>
       <div className=" flex items-center py-5 justify-center">
      <a href="/"> <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-pink-600 text-2xl font-bold  rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Go Back Home
  </span>
</button> </a> </div>

      </div>
    )
  }