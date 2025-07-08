import React from 'react';
import './index.scss'; // Assuming you have a separate CSS file for styles

const AppCard = ({ imageUrl, title, description }) => {
  return (
    <div className="app-card">
      <div className="card-header">
        <div className="app-img">
          {imageUrl ? (
            <img src={imageUrl} alt={title} />
          ) : (
            <div className="placeholder-icon" />
          )}
        </div>
      </div>
      <h3 className="app-title">{title}</h3>
      
      <div className="stats-container">
        <div className="main-stat">
          <span className="stat-value">1.00.000 +</span>
          <span className="stat-label">Downloads</span>
        </div>
        
        <div className="percentages-grid">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="percentage-item">
              <span className="percentage-value">0.{i+4}%</span>
              <span className="percentage-label">Growth</span>
            </div>
          ))}
        </div>
      </div>
      
      <button className="arrow-button">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

export default AppCard;


// import React from 'react';

// const ProjectCard = ({ 
//   imageUrl, 
//   title, 
//   description, 
//   modalId 
// }) => {
//   return (
//     <div className="project-box">
//       <div className="project-media">
//         {/* <img 
//           src={imageUrl} 
//           alt={title} 
//           decoding="async"
//         /> */}
//         <a className="gallery-link" href={imageUrl}>
//           <i className="bi-plus"></i>
//         </a>
//       </div>
//       <div className="project-body">
//         <div className="text">
//           <h5>{title}</h5>
//           <span>{description}</span>
//         </div>
//         <div className="link">
//           <a 
//             className="p-link px_modal" 
//             href={`#${modalId}`}
//           >
//             <i className="bi-arrow-right"></i>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;