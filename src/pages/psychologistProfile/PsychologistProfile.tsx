import React, { useState } from 'react';
import NavBar from '../../components/navbar/Navbar';
import { Body } from './StylePsychologist';
import CalendarComponent from '../../components/calendar/Calendar';

function PsychologistProfile() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'false');

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Body>
        <div>
          <h1>div 1</h1>
        </div>

        <div>
          <h1>div 2</h1>
        </div>

        <div>
          <CalendarComponent />
        </div>
       
      </Body>
    </>
  );
}

export default PsychologistProfile;
