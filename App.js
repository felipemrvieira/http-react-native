/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { 
  Container, 
  Header, 
  
} from 'native-base';

import ListaItens from './src/components/ListaItens';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Container>
        <Header />
        <ListaItens />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
});
