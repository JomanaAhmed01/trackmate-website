import React from 'react';
import styled from "styled-components"
<style>
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&family=Poppins&family=Quicksand:wght@300&family=Roboto:wght@300&family=Suez+One&display=swap');
</style>

function DailyRoutineHeader() {
    return (
        <Wrapper>
            <TextWrapper>
                <HeaderText>Own Your Daily Routine</HeaderText>
                <Header>0.4 TrackMate XE</Header>
                <Desc>A health tracker that motivates you every step of the way</Desc>
                <BuyNowBtn>Buy Now</BuyNowBtn>
            </TextWrapper>

            <ImageWrapper>
              <Image src='./img/smart-watch.png' />
            </ImageWrapper>
        </Wrapper>
    );
}


export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const TextWrapper = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
  }
`

export const HeaderText = styled.p`
  color: #FFFFFF;
  font-family: 'Poppins', sans-serif;
  font-size: 25px;
`

export const Header = styled.p`
  color: #FFFFFF;
  font-family: 'Poppins', sans-serif;
  font-size: 75px;
  margin-top: -10px;
`

export const Desc = styled.p`
  color: #FFFFFF;
  font-family: 'Poppins', sans-serif;
  font-size: 25px;
  margin-top: -50px;
  margin-bottom: 50px;
`

export const BuyNowBtn = styled.a`
  color: #FFFFFF;
  background-color: #A238FF;
  box-shadow: 0 5px 15px #A238FF;
  padding-left: 45px;
  padding-right: 45px;
  padding-top: 15px; 
  padding-bottom: 15px;
  border-radius: 25px;
  transition: 0.3s ease-in-out;

  :hover {
    color: #272443;
    background-color: #FFFFFF;
    cursor: pointer;
  }
`

export const ImageWrapper = styled.div`
  -ms-transform: rotate(-10deg);
  transform: rotate(-10deg);
  
  @media screen and (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`

export const Image = styled.img`
  filter: brightness(80%);

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`

export default DailyRoutineHeader;