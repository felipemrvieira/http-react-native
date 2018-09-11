import React, { Component } from 'react';
import { } from 'react-native';
import { 
  Container, 
  
} from 'native-base';

import ListaItens from './src/components/ListaItens';

export default class App extends Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <ListaItens />
      </Container>
    );
  }
}

