import React from 'react';
import '../App.css';
import User from '../assests/images/user.svg';

function UserChatBubble(props) {
  return (
    <div className="UserchatGrid">
        {/* Chat Box */}
        <div className="UserDPGrid">
            <img src={User} className="UserDP"/>
        </div>
        <div className="UserchatBubble">
        {props.message}
        </div>
        
        <p className="Usertime">16:54</p>
    </div>
  );
}

export default UserChatBubble;
