import React from 'react';
import './index.scss';
import amazon from '../../../../src/assets/images/amazon.png';

const Timeline = () => {
  const events = [
    { year: '2020', text: 'Started Learning HTML & CSS' , image: './google.png' },
    { year: '2021', text: 'Built my first portfolio website', image: '../../../src/assets/images/amazon.png' },
    { year: '2022', text: 'Internship at ABC Company', image: '../../../assets/images/amazon.png' },
  ];

  return (
    <div className="timeline">
    {events.map((event, index) => (
        <div className="container1" key={index}>
            <img src={} />
            <div className="text-box">
                <h3>{event.year}</h3>
                <p>{event.text}</p>
            </div>
        </div>
    ))}
    </div>
  );
};

export default Timeline;