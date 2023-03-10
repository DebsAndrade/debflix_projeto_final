import React, { useEffect, useState } from 'react';
import { getPopularSeries } from '../../services/SeriesService';
import "./Styles.css";

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
      <div>
        <div className='boxSeries'>
          {(filteredList.length ? filteredList : series).map((item) => (
            <div key={item.id}>
              <img src={item.image} alt="posters" />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Series;