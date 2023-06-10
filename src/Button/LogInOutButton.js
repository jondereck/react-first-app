import React, { useState } from 'react';
import LogoutButton from './LogoutButton';
import LoginButton from './LogInButton';

function LogInOutButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleButtonClick = () => {
    setIsLoggedIn(!isLoggedIn);
    console.log("log")
  };

  
  return (
    <div>
        {isLoggedIn 
        ? (<LogoutButton onClick={handleButtonClick}/>)
        : (<LoginButton onClick={handleButtonClick}/>)
    }
    </div> 
  );
}

export default LogInOutButton;



