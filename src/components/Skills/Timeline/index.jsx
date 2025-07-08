import React from 'react';
import './index.scss';
import tia from '../../../assets/images/TIA.jpg';
import GEHU from '../../../assets/images/GEHU.webp';

const Timeline = () => {
  const events = [
      { name: "Graphic Era Hill University, Dehradun", year: '2022-Present', text: 'BTech in Computer Science | CGPA - 9.0', image: GEHU },
      { name: "The Indian Academy, Dehradun", year: '2021-2022', text: 'Intermediate (Class XII) | Percentage - 92.3%', image: tia },
      { name: "The Indian Academy, Dehradun", year: '2019-2020', text: 'Matriculation (Class X) | Percentage - 93.2%' , image: tia },
  ];

  return (
    <div className="timeline">
    {events.map((event, index) => (
        <div className="container1" key={index}>
            <img src={event.image} />
            <div className="text-box">
                <h2 className='heading'>{event.name}</h2>
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