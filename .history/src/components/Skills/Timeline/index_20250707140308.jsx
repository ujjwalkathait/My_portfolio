import React from 'react';
import './index.scss';
import tia from '../../../assets/images/TIA.jpg';
import GEHU from '../../../assets/images/GEHU.webp';

const Timeline = () => {
  const events = [
    { year: '20', text: 'Started Learning HTML & CSS' , image: tia },
    { year: '2021', text: 'Built my first portfolio website', image: tia },
    { year: '2022', text: 'Internship at ABC Company', image: GEHU },
  ];

  return (
    <div className="timeline">
    {events.map((event, index) => (
        <div className="container1" key={index}>
            <img src={event.image} />
            <div className="text-box">
                <h2 className='heading'>Company name</h2>
                <h3 className='year'>{event.year}</h3>
                <p className='desciption'>{event.text}</p>
            </div>
        </div>
    ))}
    </div>
  );
};

export default Timeline;