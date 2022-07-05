import React from 'react';
import styled from "styled-components"
import Navbar from '../components/HomePage/Navbar'
import DailyRoutineHeader from '../components/HomePage/DailyRoutineHeader'

function HomePageCompound() {
  return (
    <Wrapper>
      <Navbar />
      <DailyRoutineHeader />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  background-image: url('./img/bg.png');
  width: 1349px;
  height: 1081px;
  object-fit: cover;
  object-position: 50% 100%;
`

export default HomePageCompound;