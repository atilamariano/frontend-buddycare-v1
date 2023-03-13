import Dropdown from 'react-bootstrap/esm/Dropdown';
import styled from 'styled-components';

export const StyleNavbar = styled.nav`
position: fixed;
top: 0;
left: 0;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
z-index: 100;
padding: 10px;
background-color: rgba(0, 0, 0, 0.2);
`;

export const StyelMenu = styled.nav`
top: 100%;
left: 0;
min-width: 150px;
padding: 20px;
`;

export const StyleLink = styled.a`
color: #bebebe;
text-shadow: 1px 1px 1px #000000;
transition: all 0.1s ease-in-out;

&:hover {
    color: #ffffff;
  }
`;

export const StyleSpan = styled.span`
color: #bebebe;
text-shadow: 1px 1px 1px #000000;
cursor: pointer;
transition: all 0.1s ease-in-out;

&:hover {
    color: #ffffff;
  }
`;