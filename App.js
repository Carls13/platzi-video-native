import React from 'react';
import {
 Text
} from 'react-native';
import Home from './screens/containers/home';
import Header from './src/sections/components/header';

const App: () => React$Node = () => {
  return (
    <Home>
      <Header>
        <Text>
          PLATZI VIDEO
        </Text>
      </Header>
      <Text>Buscador</Text>
      <Text>Categorías</Text>
      <Text>Sugerencias</Text>
    </Home>
  );
};


export default App;
