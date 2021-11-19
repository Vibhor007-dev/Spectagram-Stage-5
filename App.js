import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import firebase from 'firebase';
import firebaseConfig from './config';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Login from './screens/Login';
import Loading from './screens/Loading';
import Dashboard from './screens/Dashboard';

const AppSwitchNavigator = createSwitchNavigator({
  Loading: Loading,
  Login: Login,
  Dashboard: Dashboard,
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return <AppNavigator />;
}

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}else{
  firebase.app();
}