import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import HomeScreen from '../modules/home/containers/HomeScreen';
import EnterpriseDetails from '../modules/enterpriseDetails/containers/EnterpriseDetails';
import AuthenticationScreen from '../modules/auth/containers/AuthenticationScreen';
import Modal from '../modules/modal/containers/Modal';
import SearchScreen from '../modules/search/containers/SearchScreen';

const Stack = createStackNavigator();

function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ animationEnabled: true, gestureEnabled: true }} headerMode="none" initialRouteName="Auth" >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={EnterpriseDetails} />
        <Stack.Screen name="Auth" component={AuthenticationScreen} />
        <Stack.Screen name="Modal" component={Modal} options={ModalSettings} />
        <Stack.Screen name="Search" component={SearchScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const ModalSettings = { 
  mode: 'modal',
  detachPreviousScreen: false,
  gestureEnabled: true,
  cardOverlayEnabled: true,
  animationEnabled: true,
  cardShadowEnabled: true,
  cardStyle: { backgroundColor: 'transparent'  },
  ...TransitionPresets.ModalSlideFromBottomIOS,
};

export default AppContainer;