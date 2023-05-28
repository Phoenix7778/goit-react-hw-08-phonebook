import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const AuthNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: black;

  &:hover {
    color: red;
  }

  &.active {
    color: green;
  }
`;
