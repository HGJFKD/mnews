import { FC } from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import { Logo } from '../header/logo/Logo';
import openProps from '../../types/open';

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  z-index: 5;
  position: fixed;
  top: 0px;
  margin: 0px;
  padding: 0px;
  right: 20px;
  border-bottom: 2px solid #f1f1f1;
  justify-content: space-between;
`

const Navbar: FC<openProps> = ({ open, setOpen }) => {
  return (
    <Nav>
      <Logo open={open} />
      <Burger open={open} setOpen={setOpen} />
    </Nav>
  )
}

export default Navbar