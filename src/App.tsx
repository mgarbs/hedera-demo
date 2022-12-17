import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import ServicesTabs from './components/ServicesTabs';
import WalletConnector from './components/WalletConnector';

const App: React.FC = () => {
  return (
    <Container className="p-3">
      <Jumbotron>
        <WalletConnector />
        <h1 className="header">
        Hedera Services Demo
        </h1>
      </Jumbotron>
      <ServicesTabs />      
    </Container>
  );
};

export default App;
