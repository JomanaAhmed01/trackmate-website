import React from 'react';
import styled from "styled-components"
import { RecordCircle } from '@styled-icons/bootstrap/RecordCircle'


function Navbar() {
  return (
    <Wrapper>
      <Logo />
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  
`

export const Logo = styled(RecordCircle)`
  width: 25px;
  height: 25px;
`

export default Navbar;