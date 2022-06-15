import React from "react";
const api = "11c4ce2ad15cacacaf0af926cc1e1263"

export default function Movie() {
    const [query, setQuery] = React.useState('')
    const [movies, setMovies] = React.useState([])

    const searchMovies = async (e) => {
        e.preventDefault()

        const url = "https://api.themoviedb.org/3/movie/550?api_key=11c4ce2ad15cacacaf0af926cc1e1263"

        try {
            const res = await fetch(url)
            const data = await res.json()
            setMovies(data.results)
        } catch(err) {
            console.log(err)
        }
    }

    return(
        <>
            <form className="form" onSubmit={searchMovies}>
                <label htmlFor="query" className="label">Movie Name</label>
                <input 
                    className="input"
                    type="text" 
                    name="query"
                    placeholder="Search for a movie"
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)}
                    >
                </input>
                <button className="btn" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <div className="card">
                        <img 
                            className="card--image" 
                            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} 
                            alt={`${movie.poster} poster`}
                            key={movie.id}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}