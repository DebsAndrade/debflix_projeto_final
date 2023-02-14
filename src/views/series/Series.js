import React, { useEffect, useState } from 'react';
import { getPopularSeries } from '../../services/SeriesService';

const Series = () => {
  const [series, setSeries] = useState([]);
  const [filter, setFilter] = useState("");

  const filteredList = filter.length > 0 
    ? series.filter((i) => i.name.toLowerCase().includes(filter))
    : [];

  useEffect(() => {
    getPopularSeries(true)
      .then(values => setSeries(values))
      .catch(error => console.log('Unable to get the series:', error));
  }, []);

  const _onChange = (evento) => {
    setFilter(evento.target.value.toLowerCase());
  }

  return (
    <>
      <input onChange={_onChange} />
      {(filteredList.length ? filteredList : series).map((item) => (
        <div key={item.id}>
          <ul>
            <li>{item.name}</li>
            <li>{item.overview}</li>
            <li>{item.vote_average}</li>
          </ul>
          <img src={item.image} alt="posters" />
        </div>
      ))}
    </>
  )
}

export default Series