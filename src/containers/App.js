/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux'
import MyportfolioRouter from './MyportfolioRouter';
import configureStore from '../stores/configureStore'

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MyportfolioRouter />
      </Provider>
    );
  }
}
