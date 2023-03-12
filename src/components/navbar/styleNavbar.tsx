import Dropdown from 'react-bootstrap/esm/Dropdown';
import styled from 'styled-components';

export const StyleNavbar = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
padding: 1rem 5rem 1rem 1rem;
background-color: rgba(0, 0, 0, 0);
`

export const StyledDropdown = styled(Dropdown)`
  position: relative;
  display: inline-block;
  margin-right: 1rem;
`;

export const StyledDropdownToggle = styled(Dropdown.Toggle)`
width: 100%;
  height: 100%;
  display: flex;

  justify-content: space-between;
  background-color: transparent;
  color: #ffffff;
  border: none;
  font-size: 16px;
  font-weight: 400;
  padding: 0.375rem 0.75rem;
  &:focus {
    box-shadow: none;
    outline: none;
  }
`;

export const StyledDropdownMenu = styled(Dropdown.Menu)`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #ffffff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.175);
`;

export const StyledDropdownItem = styled(Dropdown.Item)`
  display: block;
  padding: 0.25rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  text-decoration: none;
  &:hover {
    background-color: #f8f9fa;
    color: #212529;
    text-decoration: none;
  }
`;

export const StyleLink = styled.a`
color: #ffffff;
`