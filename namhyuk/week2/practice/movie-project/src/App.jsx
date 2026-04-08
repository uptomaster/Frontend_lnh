import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MovieCard from './components/MovieCard';
import movies from './movies.json';
import MovieModal from './components/MovieModal';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      
      <main className="container mx-auto py-16 px-8">
        <h2 className="text-2xl font-bold mb-10 border-l-4 border-red-600 pl-3">MyFlix</h2>
        
        {/* 가로로 4개 배치 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;