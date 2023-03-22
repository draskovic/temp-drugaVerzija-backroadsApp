import React from 'react';
import { tours } from '../data';
import Title from './Title';

const Tours = () => {
  return (
    <section className='section' id='tours'>
      <Title text='featured' span='tours' />

      <div className='section-center featured-center'>
        {tours.map((tour) => {
          const { id, img, date, title, text, location, duration, price } = tour;
          return (
            <article key={id} className='tour-card'>
              <div className='tour-img-container'>
                <img src={img} className='tour-img' alt={title} />
                <p className='tour-date'>{date}</p>
              </div>
              <div className='tour-info'>
                <div className='tour-title'>
                  <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div className='tour-footer'>
                  <p>
                    <span>
                      <i className='fas fa-map'></i>
                    </span>{' '}
                    {location}
                  </p>
                  <p>{duration} days</p>
                  <p>From ${price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
