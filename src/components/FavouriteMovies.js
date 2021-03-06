const FavouriteMovies = ({ movies, onMovieSelected }) => {
    const favouriteMovies = movies.filter(movie => movie.favourite)

    return (
        <>
            <h3>My Favourites:</h3>
            <ul>
                {favouriteMovies.map(movie => {
                    return (
                        <li key={movie.title}>
                           &#128150; {movie.title} <span className="key">- {movie.release_date}</span>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default FavouriteMovies;