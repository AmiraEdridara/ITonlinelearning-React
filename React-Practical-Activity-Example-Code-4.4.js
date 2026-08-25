// Difference: TicketInfo renders its image, its children and a count prop, so
// the status board shows how many tickets are in each state rather than just
// the label.

// StatusBoard.js
import React from 'react';
import TicketInfo from './TicketInfo';
import completedImage from '../images/completed.png';
import inProgressImage from '../images/in-progress.png';
import failedImage from '../images/failed.png';

const StatusBoard = () => {
  return (
    <div className="status-board">
      <TicketInfo result="completed" image={completedImage} count={24}>
        <p>Tickets Completed</p>
      </TicketInfo>

      <TicketInfo result="in-progress" image={inProgressImage} count={7}>
        <p>Tickets In Progress</p>
      </TicketInfo>

      <TicketInfo result="failed" image={failedImage} count={2}>
        <p>Tickets Failed</p>
      </TicketInfo>
    </div>
  );
};

export default StatusBoard;

// TicketInfo.js
import React from 'react';

const TicketInfo = ({ result, image, count, children }) => {
  return (
    <div className={`ticket-info ${result}`}>
      <img src={image} alt={result} className="ticket-icon" />
      <span className="ticket-count">{count}</span>
      {/* children is whatever was written between the tags */}
      {children}
    </div>
  );
};

export default TicketInfo;
