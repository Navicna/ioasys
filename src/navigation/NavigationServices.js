import * as React from 'react';
import { CommonActions, StackActions } from '@react-navigation/routers';
import { Alert } from 'react-native';

export const isReadyRef = React.createRef();

export const navigationRef = React.createRef();

function navigate(name, params) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.dispatch(CommonActions.navigate(name, params));
  } else {
    Alert.alert("Ops", "Não foi possível realizar a navegação");
  }
}

function goBack() {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.dispatch(CommonActions.goBack());
  } else {
    Alert.alert("Ops", "Não foi possível realizar a navegação");
  }
}

function goPop(screens) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.dispatch(StackActions.pop(screens));
  } else {
    Alert.alert("Ops", "Não foi possível realizar a navegação");
  }
}

export default {
  navigate,
  goBack,
  goPop
}