import React from 'react';
import styled from "styled-components"
<style>
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&family=Poppins&family=Quicksand:wght@300&family=Roboto:wght@300&family=Suez+One&display=swap');
</style>

function WorkOutTrackingHeader() {
    return (
        <Wrapper>
            
        </Wrapper>
    );
}


export const Wrapper = styled.div`
  background-image: url('./img/woman-bg.png'), url('./img/half-bg.png');
  background-repeat: no-repeat, no-repeat;
  background-position: left top, right bottom;
  filter: brightness(60%);
  width: 1700px;
  height: 888px;
`

export default WorkOutTrackingHeader;