import React from 'react';
import './index.scss';

const Timeline = () => {
  const events = [
    { year: '2020', text: 'Started Learning HTML & CSS' , image: 'path/to/image1.jpg' },
    { year: '2021', text: 'Built my first portfolio website' },
    { year: '2022', text: 'Internship at ABC Company' },
  ];

  return (
    <div className="timeline">
    {events.map((event, index) => (
        <div className="container1" key={index}>
            <img src="" />
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
