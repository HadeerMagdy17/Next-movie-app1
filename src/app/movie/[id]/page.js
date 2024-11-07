import Image from 'next/image';
import React from 'react';

export default async function MovieDetailsPage({ params }) {
  const { id } =await params;

  const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=d5de9a5c`);
  const movie = await response.json();

  if (movie.Response === 'False') {
    return <p>Movie not found</p>;
  }

  return (
    <>
     <h1 className="text-center text-3xl text-purple-600 font-bold m-4">{movie.Title} details</h1>
     <div className="flex items-center justify-center p-4">
     
     {/* Image Section */}
     <div className="w-1/3">
     <Image width={300} height={400}   src={movie.Poster}
         alt={movie.Title}/>
       {/* <img
         src={movie.Poster}
         alt={movie.Title}
     
       /> */}
     </div>

     {/* Data Section */}
     <div className="w-1/3 pl-6">
       <h1 className="text-3xl font-bold mb-4">{movie.Title}</h1>
       <p className="mb-2"><strong>Year:</strong> {movie.Year}</p>
       <p className="mb-2"><strong>Genre:</strong> {movie.Genre}</p>
       <p className="mb-4"><strong>Plot:</strong> {movie.Plot}</p>
     </div>
   </div>
    </> 

  );
}
