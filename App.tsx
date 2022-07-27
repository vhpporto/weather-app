import React, {type PropsWithChildren} from 'react';
import {useColorScheme} from 'react-native';

import Home from './src/screens/Home';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  return <Home />;
};

export default App;
