import { useState, useEffect } from "react";
import MovieSelector from '../components/MovieSelector';
import Movie from '../components/Movie';
import FavouriteMovies from '../components/FavouriteMovies';

const MovieContainer = () => {

    const [movies, setMovies] = useState([])
    const [selectedMovieTitle, setSelectedMovieTitle] = useState('')

    useEffect(() => {
        getMovies()
    }, [])

    const getMovies = () => {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then(moviesData => setMovies(moviesData))
    }

    const handleMovieSelected = title => {
        setSelectedMovieTitle(title)
    }

    const handleFavouriteToggle = (title) => {
        const updatedMovies = movies.map((movie) => {
            if (movie.title === title){
                movie.favourite = !movie.favourite
            }
            return movie
        })
        setMovies(updatedMovies)
    }

    const selectedMovie = movies.find(movie => movie.title === selectedMovieTitle)

    return (
        <div className="container">
            <h2>Studio Ghibli Movies</h2>
            <hr />
            <MovieSelector movies={movies} onMovieSelected={handleMovieSelected} />
            <Movie movie={selectedMovie} onFavouriteToggle={handleFavouriteToggle} />
            <FavouriteMovies movies={movies} onMovieSelected={handleMovieSelected} />
        </div>
    )

}
export default MovieContainer;