import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import {useSelector} from 'react-redux'


function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars)
  console.log(cars);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars && cars.map((car, index) =>(
          <a key={index} href='#'>{car}</a>
        ))}
        {/* <p> <a href='#'> Model S </a></p>
        <p> <a href='#'> Model 3 </a></p>
        <p> <a href='#'> Model X </a></p>
        <p> <a href='#'> Model Y </a></p>
        <p> <a href='#'> Solar Roof </a></p>
        <p> <a href='#'> Solar Panels </a></p> */}
      </Menu>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Account</a>
        <CustomMenu onClick={()=> setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
            <CustomClose onClick={()=> setBurgerStatus(false)}/>
        </CloseWrapper>
        
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Used Inventory</a></li>
        <li><a href='#'>Trade-In</a></li>
        <li><a href='#'>Demo Drive</a></li>
        <li><a href='#'>Insurance</a></li>
        <li><a href='#'>Cybertruck</a></li>
        <li><a href='#'>Roadster</a></li>
        <li><a href='#'>Semi</a></li>
        <li><a href='#'>Charging</a></li>
        <li><a href='#'>Powerwall</a></li>
        <li><a href='#'>Commercial Energy</a></li>
        <li><a href='#'>Utilities</a></li>
        <li><a href='#'>Find Us</a></li>
        <li><a href='#'>Support</a></li>
      </BurgerNav>
    <Nav>
    <p>&copy; Copyright - Darshak Kakani | All rights reserved !!</p>
    </Nav>

    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`
const Menu = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  flex: 1;
  
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 18px;
    flex-wrap: nowrap;
  }
  @media(max-width: 1099px) {
    display: none;
  }
`
const RightMenu = styled.div`
  display: flex;
  align-items: center;
a {
  font-weight: 600;
  text-transform: uppercase;
  padding: 9px;
  margin-right: 10px;
}
`
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
  transition: transform 0.3s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);

    a {

    }
  }
`
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
  
`
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  // cursor: pointer;
`
const Nav = styled.div`
  p {
        position: fixed;
        width: 100%;
        text-align: center;
        bottom:0;
        left: 0;
        right: 0;
        margin: 10px;    
        color: black;
  }
`