import React from 'react';
import '../App.css';
import User from '../assests/images/user.svg';

function TypingBubble() {
  return (
    <div className="UserchatGridTyping">
        {/* Chat Box */}
        <div className="UserDPGrid">
            <img src={User} className="UserDP"/>
        </div>
        <div className="UserchatBubbleTyping">
        <div className="typing">
            <div className="typing__dot"></div>
            <div className="typing__dot"></div>
            <div className="typing__dot"></div>
        </div>
        </div>
    </div>
  );
}

export default TypingBubble;
