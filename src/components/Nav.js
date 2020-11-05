import React from 'react';
import '../App.css';
import logo from './nasaLogo.jpg';
import styled from 'styled-components'

export default function NavBar() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return (
    <NavBarDiv>
      <NavSection>
        <img className='App-logo' src={logo} alt='nasaLogo' />
        <h1>Photo Of The Day</h1>
        <p>By: David Hall</p>
      </NavSection>
      <h3>Today's Date: {`${month}-${day}-${year}`}</h3>
    </NavBarDiv>
  );
}

const NavBarDiv = styled.div`
  
`;
const NavSection = styled.div`
  
`;