import React from 'react';

import {
 Text
} from 'react-native';

import Home from './screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionsList from './src/videos/containers/suggestions-list';

import API from './utils/api';

type Props = {};

class App extends React.Component<Props> {
  state = {
    suggestionList:[]
  }

    async componentDidMount(){
      const movies = await API.getSuggestion(5);
      this.setState({
        suggestionList: movies 
      });
    }

  render(){
    const { suggestionList } = this.state; 

    return (
      <Home>
        <Header>
          <Text>
            PLATZI VIDEO
          </Text>
        </Header>
        <Text>Buscador</Text>
        <Text>Categorías</Text>
        <SuggestionsList list={suggestionList}/>
      </Home>
    );
  }
}


export default App;
