import { BrowserRouter } from "react-router-dom";

import './index.css'
import RouterDom from './featchers/global/router/RouterDom'

import GlobalStyles from "./featchers/global/styledComponents/globalStyles/GlobalStyles.styled";
import Navbar from "./featchers/global/layout/navbar/Navbar"
import { useState } from "react";
import styled from "styled-components";
import openProps from "./featchers/global/types/open";
import Test from "./featchers/global/themes/translation/Test";


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
const [loading, setLoading] = useState<boolean>(true)

  return (
    <>
      <BrowserRouter  >
        <GlobalStyles />
        <AppContainer>
          <Navbar open={open} setOpen={setOpen} />
        </AppContainer>
        <ContentContainer open={open} >
          <Test/>
          <RouterDom />
        </ContentContainer>
      </BrowserRouter >
    </>
  );
}

export default App;
