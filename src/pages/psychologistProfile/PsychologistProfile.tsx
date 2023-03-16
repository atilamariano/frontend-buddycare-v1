import React, { useState } from 'react'
import NavBar from '../../components/navbar/Navbar'

function PsychologistProfile() {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <>
    <NavBar isUserLoggedIn={isUserLoggedIn} />
    </>
  )
}

export default PsychologistProfile