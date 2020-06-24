import React from 'react';
import { StatusBar } from 'react-native';

// import Home from './src/pages/Home/'



import Router from './src/router';

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Router />
    </>
  );
}

export default App;