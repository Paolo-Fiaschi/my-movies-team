import React, { useState, useEffect } from "react";

function Movie(props) {
    console.log(props)

    const [movie, setMovie] = useState({});

    useEffect(() => {

        let url = 'http://www.omdbapi.com';
        let key = "93d16147";

        fetch(`${url}?apikey=${key}&i=${props.match.params.id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMovie(data);
            })
    }, [])


    return (
        <div className="container " style={{marginTop: '100px'}}>
            <div className="row justify-content-center">
                <div class="card mb-3 ">
                    <img class="card-img-top" src={movie.Poster} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">{movie.Title}</h5>
                        <p class="card-text">{movie.Plot}</p>
                        <p class="card-text"><small class="text-muted">Genere: {movie.Genre}</small></p>
                        <p class="card-text"><small class="text-muted">Attori: {movie.Actors}</small></p>
                        <p class="card-text text-right"><small class="text-muted">{movie.Year}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movie
