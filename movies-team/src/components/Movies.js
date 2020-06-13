import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Movies() {
    const [movies, setMovies] = useState([]);
    const [valInput, setValInput] = useState("");



    const handleClick = () => {

        
        if (valInput.trim() === "") {
            return;
        } else {
            
            let url = 'http://www.omdbapi.com';
            let key = "93d16147";

            fetch(`${url}?apikey=${key}&s=${valInput.trim()}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    setMovies(data.Search)
                }
                )
        }
    }

    function handleChange(e) {
        setValInput(e.target.value)
    }

    return (
        <div className="container" style={{ marginTop: '100px' }}>
            <input onChange={handleChange} type="text" placeholder="...search" value={valInput} /> <button type="submit" onClick={handleClick}>Search</button>
            <div className="row ">
                {
                    movies.map((movie, index) => {
                        return (
                            <div key={index} className="col-md-4 mb-5">
                                <div className="card h-100" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={movie.Poster} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">{movie.Title}</h5>
                                        <Link to={'/movies/' + movie.imdbID} className="btn btn-primary">Go somewhere</Link>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Movies
