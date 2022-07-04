import './App.css';
import styled from "styled-components"
import HomePageCompound from './compounds/HomePageCompound';

function App() {
  return (
    <Wrapper className="App">
      <HomePageCompound />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  background-image: url('./img/bg.png');
`

export default App;
