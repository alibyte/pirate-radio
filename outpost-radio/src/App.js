import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import InfoPanel from './components/InfoPanel';
import Player from './components/Player';
import './App.css';
import { 
  color, 
  screen, 
} from './util';
import borderImg from './img/border.svg';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {

  const Container = styled.div`
    border-image-source: url('https://interactive-examples.mdn.mozilla.net/media/examples/border-diamonds.png');
    // border-image: url(${borderImg}) 30;
    // align-items: center;
    display: grid;
    grid-area: body;
    grid-auto-flow: column;
    grid-gap: calc(1rem - 1px);
    justify-content: center;
    margin: 0 auto;

    @media (max-width: ${screen.lg - 1}px) {
      grid-template-areas: 
        "player"
        "border"
        "infopanel";
      width: 100%;
    }

    @media (min-width: ${screen.lg}px) {
      grid-template-areas: 
        "player border infopanel";
      grid-template-columns: 29rem 2px 29rem;
      max-width: ${screen.lg}px;
    }

    @media (min-width: ${screen.xl}px) {
      grid-template-areas: 
        "player border infopanel";
      grid-template-columns: 36.5rem 2px 36.5rem;
      max-width: ${screen.xl}px;
    }
  `;

  const Border = styled.div`
    border-left: 2px dashed ${color.whitish};
    grid-area: border;
    width: 2px;
  `;

  return (
    <Router>
        <div className="App">
        <Header className="body-width" />
        <Container className="body-width">
          <Player />
          <Border />
          <InfoPanel />
        </Container>
      </div>
    </Router>
    
  );
}

export default App;
