import React from 'react';
import {StatusBar} from 'react-native';
import {primary} from './shared/themes/colors';
import Header from './components/Header';
import Routes from './routes';

export default function App() {
  return (
    <>
      <Header />
      <StatusBar barStyle="light-content" backgroundColor={primary} />
      <Routes />
    </>
  );
}
