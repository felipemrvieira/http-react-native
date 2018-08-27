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
  Content, 
} from 'native-base';

import Item from './src/components/Item';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Item />
          <Item />
          <Item />

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
});
