/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Provider } from 'react-redux';
import RootNav from './navigation/RootNav';
import store from './store';
const Navigation = () => <Provider store={store}><RootNav /></Provider>;

export default Navigation;

