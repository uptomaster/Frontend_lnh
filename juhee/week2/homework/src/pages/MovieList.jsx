import MovieCard from "./MovieCard";
import Modal from "./Modal";
import { useState } from "react";

const MovieList = ({movies})=>{
    const [modal, setModal] = useState(null);

    const clickMovie = (movie)=>{
        setModal(movie)
    };
    return (
        <div className="p-10 flex flex-wrap gap-6 justify-center bg-pink-200" >
            {movies.map((movie)=>(
                <MovieCard  movie={movie} onClick={()=>clickMovie(movie)}
                />
            ))}
            {modal && (
                <Modal movie={modal} close={()=> setModal(null)}/>
            )}
        </div>
    )
};

export default MovieList;