
// import React from 'react';
// import Link from 'next/link';

// export default async function DashboardPage() {
//   let response = await fetch(
//     "https://www.omdbapi.com/?s=avengers&type=movie&apikey=d5de9a5c&page=2"
//   );
//   const data = await response.json();

//   return (
//     <div className='text-center'>
//       <h1>Movies App</h1>
//       <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-6">
//         {data.Search && data.Search.map((movie) => (
//           <Link key={movie.imdbID} href={`/movie/${movie.imdbID}`}>
//             <div className="h-62 rounded-lg bg-gray-200 p-1 cursor-pointer">
//               <img src={movie.Poster} alt={movie.Title} className="w-full h-53 object-cover rounded-md" />
//               <h2 className="text-lg font-bold">{movie.Title}</h2>
//               <p>{movie.Year}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }
import React from 'react'
import { redirect } from 'next/navigation';

export default function dashboardPage() {
 
      redirect('/dashboard/home')
   
  
}
