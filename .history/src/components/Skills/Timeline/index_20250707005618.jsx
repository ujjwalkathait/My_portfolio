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
    <div className="timeline-container">
      <div className="timeline">
        <div className="container" key={index}>
            <div className="text-box">
                <h3>2020</h3>
                <p className='description'>{event.text}</p>
            </div>
            </div>
      </div>
    </div>
  );
};

export default Timeline;
