import React, { useState } from 'react';
import NavBar from '../../components/navbar/Navbar';
import { Body } from './StylePsychologist';

function PsychologistProfile() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'false');

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Body>
        <h1>test</h1>
      </Body>
    </>
  );
}

export default PsychologistProfile;
