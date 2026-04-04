import MovieCard from "./MovieCard";

const MovieList01 = ({movies})=>{
    return (
        <div className="p-10 flex flex-wrap gap-6 justify-center bg-pink-200" >
            {movies.map((movie)=>(
                <MovieCard movie={movie} />
            ))}
        </div>
    )
};

export default MovieList01;