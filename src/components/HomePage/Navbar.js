import React from 'react';
import styled from "styled-components"
import { RecordCircle } from '@styled-icons/bootstrap/RecordCircle'
import { PersonCircle } from '@styled-icons/ionicons-solid/PersonCircle'
import { CartDashFill } from '@styled-icons/bootstrap/CartDashFill'
import { Menu } from '@styled-icons/heroicons-outline/Menu'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&family=Poppins&family=Quicksand:wght@300&family=Roboto:wght@300&family=Suez+One&display=swap');
</style>

function Navbar() {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo />
        <LogoHeader>TrackMate</LogoHeader>
      </LogoWrapper>

      <LinksWrapper>
        <Faq>FAQ</Faq>
        <LoggingInWrapper>
          <ProfileIcon />
          <LogIn>Log In</LogIn>
        </LoggingInWrapper>
        <CartLogo />
        <BuyNowBtn>Buy Now</BuyNowBtn>

        <MenuIcon />
      </LinksWrapper>
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 320px;
`

export const LogoWrapper = styled.div`
  width: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled(RecordCircle)`
  width: 25px;
  height: 25px;
  color: #FFFFFF;
`

export const LogoHeader = styled.p`
  color: #FFFFFF;
  font-family: 'Poppins', sans-serif;
  font-size: 25px;
`

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 400px;

  @media screen and (max-width: 768px) {
    width: 200px;
  }
`

export const Faq = styled.p`
  color: #FFFFFF;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  transition: 0.3s ease-in-out;

  :hover {
    color: #A238FF;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const LoggingInWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 113px;
`

export const ProfileIcon = styled(PersonCircle)`
  width: 26px;
  height: 26px;
  color: #FFFFFF;
  cursor: pointer;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const LogIn = styled.p`
  color: #FFFFFF;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  transition: 0.3s ease-in-out;

  :hover {
    color: #A238FF;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const CartLogo = styled(CartDashFill)`
  width: 25px;
  height: 29px;
  color: #FFFFFF;
  cursor: pointer;
`

export const BuyNowBtn = styled.a`
  color: #FFFFFF;
  background-color: #A238FF;
  box-shadow: 0 5px 15px #A238FF;
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 10px; 
  padding-bottom: 10px;
  border-radius: 20px;
  transition: 0.3s ease-in-out;

  :hover {
    color: #272443;
    background-color: #FFFFFF;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const MenuIcon = styled(Menu)`
  width: 25px;
  height: 25px;
  color: #FFFFFF;
  display: none;

  @media screen and (max-width: 768px) {
    display: initial;
  }
`

export default Navbar;