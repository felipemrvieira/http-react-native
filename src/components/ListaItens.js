import React, { Component } from 'react';
import { Text, } from 'react-native';
import { Content,  } from 'native-base';

import axios from 'axios';
import Item from './Item';

type Props = {};
export default class ListaItens extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = { filmes: [] };
    }
    componentWillMount() {
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=9eaa1cfef5d9a4aea31f2fee6dc7c960&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
            .then(response => { this.setState({ filmes: response.data.results }); })
            .catch(() => { console.log('Erro ao processar a requisição'); });
    }

    render() {
        return (
            <Content>
            {/* <Item />
            <Item />
            <Item /> */}
            {/* {console.log(this.state.filmes)} */}
            {/* {this.state.filmes.map(item => (<Text key={item.title}>{ item.title }</Text>))} */}
            {this.state.filmes.map(item => (<Item key={item.id} item={item} />))}

            </Content>
        );
  }
}
