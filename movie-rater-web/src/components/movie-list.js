import React from 'react'
var FontAwesome = require('react-fontawesome');

function MovieList(props) {

    const movieClicked = movie => evt => {
        props.movieClicked(movie);
    }

    const editClicked = movie => evt => {
        props.editClicked(movie);
    }

    const newMovie = () => {
        props.newMovie();
    }

    const removeClicked = movie => evt => {
        fetch(`${process.env.REACT_APP_API_URL}/api/movies/${movie.id}/`, {
            method: 'DELETE',
            headers: {
              'Authorization': `Token ${this.props.token}`,
            }
          }).then( resp => props.movieDeleted(movie))
          .catch( error => console.log(error))
    }

    return (
        <div>
            { props.movies.map( movie => {
                return (
                    <div key={movie.id} className="movie-item">
                        <h3 onClick={movieClicked(movie)} key={movie.id}>
                            {movie.title}
                        </h3>
                        <FontAwesome name="edit" onClick={editClicked(movie)}/>
                        <FontAwesome name="trash" onClick={removeClicked(movie)}/>
                    </div>
                )
            })}
            <button onClick={newMovie}>Add movie</button>
        </div>
    )
}

export default MovieList;