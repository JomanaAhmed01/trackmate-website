import React from 'react';
import styled from "styled-components"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&family=Poppins&family=Quicksand:wght@300&family=Roboto:wght@300&family=Suez+One&display=swap');
</style>

function WorkOutTrackingHeader() {
  return (
    <Wrapper>
      <TextWrapper>
        <HeaderTextWrapper>
          <Icon src='./img/icon-1.png' />
          <HeaderText>WORKOUT TRACKING</HeaderText>
        </HeaderTextWrapper>

        <Header>Fine Tune Your Routine With Precise Workout Stats</Header>

        <Text>I'm a paragraph.
          Click here to add your own text and edit me.
          It’s easy.
          Just click “Edit Text” or double click me to add your own content and make changes to the font.
        </Text>
      </TextWrapper>

      <ImageWrapper>
        <Image src='./img/trackmate-mobile.png' />
      </ImageWrapper>
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  background-image: url('./img/woman-bg.png'), url('./img/half-bg.png');
  background-repeat: no-repeat, no-repeat;
  background-position: left top, right bottom;
  box-shadow: inset 0 0 0 2000px rgba(0,0,0, 0.3);
  height: 888px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    background-image: url('./img/woman-bg.png');
    background-position: center;
    height: 650px;
    /* justify-content: left; */
  }
`

export const TextWrapper = styled.div`
  @media screen and (max-width: 1024px) {
    position: relative;
    top: 270px;
    /* left: 100px; */
  }

  @media screen and (max-width: 690px) {
    position: relative;
    top: 200px;
    left: 50px;
  }
`

export const HeaderTextWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 350px;
  margin-left: -20px;

  @media screen and (max-width: 690px) {
    width: 260px;
  }
`

export const Icon = styled.img`
  @media screen and (max-width: 690px) {
    width: 50px;
    height: 50px;
  }
`

export const HeaderText = styled.p`
  color: #FFFFFF;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 5px;

  @media screen and (max-width: 690px) {
    font-size: 10px;
  }
`

export const Header = styled.p`
  color: #FFFFFF;
  font-size: 50px;
  font-family: 'Poppins', sans-serif;
  width: 510px;

  @media screen and (max-width: 690px) {
    font-size: 35px;
    width: 65%;
  }
`

export const Text = styled.p`
  color: #FFFFFF;
  font-size: 17px;
  font-family: 'Poppins', sans-serif;
  line-height: 30px;
  width: 478px;

  @media screen and (max-width: 690px) {
    font-size: 14px;
    width: 55%;
  }
`

export const ImageWrapper = styled.div`
  @media screen and (max-width: 1024px) {
    position: relative;
    top: 400px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`

export const Image = styled.img`
  @media screen and (max-width: 690px) {
    width: 90%;
  }
`

export default WorkOutTrackingHeader;