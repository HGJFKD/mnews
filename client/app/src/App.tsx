import { BrowserRouter } from "react-router-dom";

import './index.css'
import Router from './featchers/global/router/Router'

import GlobalStyles from "./featchers/global/styledComponents/globalStyles/GlobalStyles.styled";
import Navbar from "./featchers/global/layout/navbar/Navbar"
import { useState } from "react";
import styled from "styled-components";
import openProps from "./featchers/global/types/open";


const AppContainer = styled.div`
    display: flex;
`;

const ContentContainer = styled.div<openProps>`
  position: relative;
  flex:1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5em;
  margin-left: ${({ open }) => open ? "280px" : ''};
  @media (min-width: 775px ) {
    margin-left: 240px
    }
`;

function App() {

  const [open, setOpen] = useState(false)

  return (
    <>
      <BrowserRouter  >
        <GlobalStyles />
        <AppContainer>
          <Navbar open={open} setOpen={setOpen} />
        </AppContainer>
        <ContentContainer open={open} >
          <Router />
        </ContentContainer>

      </BrowserRouter >
    </>
  );
}

export default App;
