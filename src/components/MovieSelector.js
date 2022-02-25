const MovieSelector = ({ movies, onMovieSelected }) => {

    const handleChange = event => {
        onMovieSelected(event.target.value)
    }

  return (
    <select defaultValue="" onChange = { handleChange } >
        <option value = "" disabled > Choose a movie </option> {
            movies.map(movie => {
                return ( <
                    option key = { movie.title }
                    value = { movie.title } > { movie.title} </option>
                )
            })
        }
    </select>
  )
}

export default MovieSelector;