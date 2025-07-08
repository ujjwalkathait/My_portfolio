import React from 'react';
import './index.scss';

const Timeline = () => {
  const events = [
    { year: '2020', text: 'Started Learning HTML & CSS' },
    { year: '2021', text: 'Built my first portfolio website' },
    { year: '2022', text: 'Internship at ABC Company' },
    { year: '2023', text: 'Joined XYZ as a Frontend Developer' }
  ];

  return (
    <div className="timeline">
    {events.map((event, index) => (
        <div className="container1" key={index}>
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
