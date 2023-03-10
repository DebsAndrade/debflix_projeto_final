import React, { useEffect, useState } from 'react';
import { getPopularMovies } from '../../services/MovieService';
import "./Styles.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState("");

  const filteredList = filter.length > 0 
    ? movies.filter((i) => i.title.toLowerCase().includes(filter))
    : [];

  useEffect(() => {
    getPopularMovies(true)
      .then(values => setMovies(values))
      .catch(error => console.log('Unable to get the movies:', error));
  }, []);

  const _onChange = (evento) => {
    setFilter(evento.target.value.toLowerCase());
  }

  return (
    <>
      <input onChange={_onChange} />
      <div>
        <div className='boxMovies'>
          {(filteredList.length ? filteredList : movies).map((item) => (
            <div key={item.id}>
              <img src={item.image} alt="posters" />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Movies;