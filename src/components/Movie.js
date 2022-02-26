const Movie = ({ movie, onFavouriteToggle }) => {

    if (!movie) {
      return null
    }
  
    const handleClick = () => {
      onFavouriteToggle(movie.title)
    }
  
    const favouriteBtnText = movie.favourite ? 'Remove from favourites' : 'Add to favourites'
  
    return (
      <>
        <h3>Title: &#127909; {movie.title}</h3>
        <p><span className="key">Movie Synopsis:</span> {movie.description}</p>
        <p><span className="key">Release Date:</span> {movie.release_date}</p>
        <p><span className="key">Duration:</span> {movie.running_time} minutes</p>
        <p><span className="key">Directed By:</span> {movie.director}</p>
        <button onClick={handleClick}>{favouriteBtnText}</button>
      </>
    )
  }
  
  export default Movie;