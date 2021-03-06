import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import {
  HomeScreen,
  LoginScreen,
  SignupScreen,
  NeurologistScreen,
  NeurologistPatientsScreen,
  PatientScreen,
} from '../pages';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none" initialRouteName="home">
    <Screen name="login" component={LoginScreen} />
    <Screen name="signup" component={SignupScreen} />
    <Screen name="home" component={HomeScreen} />
    <Screen name="neurologist" component={NeurologistScreen} />
    <Screen name="neurologist-patients" component={NeurologistPatientsScreen} />
    <Screen name="patient" component={PatientScreen} />
  </Navigator>
);

const Routes = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);

export default Routes;
