import React from 'react'
import Router from './router/Router'
import styled from 'styled-components'
import GlobalState from "./global/GlobalState";


const AppContainer=styled.div`
bottom: 0px;
margin:0px;
width:100vw;
height:100vh;
background-image: url=('https://conteudo.imguol.com.br/c/entretenimento/02/2017/11/24/pokemon-1511542643951_v2_450x337.jpg');
background-repeat: no-repeat;
background-size:cover;

`


function App() {
  return (
    <AppContainer>
      <GlobalState>
        <Router/>
      </GlobalState>
    </AppContainer>
       
  );
}

export default App;
