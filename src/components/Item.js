import React, { Component } from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

type Props = {};
export default class Item extends Component<Props> {
  render() {
    return (
        <Card style={{ flex: 0 }}>
            <CardItem>
                <Left>
                <Thumbnail source={{ uri: 'https://avatars0.githubusercontent.com/u/13780312?s=460&v=4' }} />
                <Body>
                    <Text>felipemrvieira</Text>
                    <Text note>April 15, 2016</Text>
                </Body>
                </Left>
            </CardItem>
            <CardItem>
                <Body>
                <Image source={{ uri: 'http://image.tmdb.org/t/p/w185//' + this.props.item.backdrop_path }} style={{ height: 200, width: 320, flex: 1 }} />
                <Text>
                    {this.props.item.title}
                </Text>
                </Body>
            </CardItem>
            <CardItem>
                <Left>
                <Button transparent textStyle={{ color: '#87838B' }}>
                    <Icon active name="thumbs-up" />
                    <Text>Nota: {this.props.item.vote_average}</Text>
                </Button>
                </Left>
            </CardItem>
        </Card>
    );
  }
}
