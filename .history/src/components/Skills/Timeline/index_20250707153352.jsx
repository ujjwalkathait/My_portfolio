import React from 'react';
import './index.scss';
import tia from '../../../assets/images/TIA.jpg';
import GEHU from '../../../assets/images/GEHU.webp';

const Timeline = () => {
  const events = [
    { name: "The Indian Academy", year: '2019-2020', text: 'Started Learning HTML & CSS' , image: tia },
    { name: "The Indian Academy", year: '2021-2022', text: 'Built my first portfolio website', image: tia },
    { name: "The Indian Academy", year: '2022-Present', text: 'Internship at ABC Company', image: GEHU },
  ];

  return (
    <div className="timeline">
    {events.map((event, index) => (
        <div className="container1" key={index}>
            <img src={event.image} />
            <div className="text-box">
                <h2 className='heading'>Company name</h2>
                <h3 className='year'>{event.year}</h3>
                <div className='desciption'>{event.text}</div>
                <span className='container-arrow'></span>
            </div>
        </div>
    ))}
    </div>
  );
};

export default Timeline;