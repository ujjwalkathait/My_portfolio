import React from 'react';
import './index.scss';

const Timeline = () => {
  const events = [
    { year: '2020', text: 'Started Learning HTML & CSS' , image: '../../../../assets/images/amazon.png' },
    { year: '2021', text: 'Built my first portfolio website', image: 'path/to/image2.jpg' },
    { year: '2022', text: 'Internship at ABC Company', image: 'path/to/image3.jpg' },
  ];

  return (
    <div className="timeline">
    {events.map((event, index) => (
        <div className="container1" key={index}>
            <img src={event.image} />
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
