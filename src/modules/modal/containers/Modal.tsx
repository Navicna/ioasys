import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { height } from '../../../config/dimensions';

export default function Modal({ ...rest }) {
  const navigation = useNavigation();
  const route = useRoute();
  const dismiss = navigation.goBack;

  const Render = route.params?.Render;

  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalWrapper}>          
        <Render {...rest} dismiss={dismiss} navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  closeModalWrapper: {
    position: 'absolute',
    right: 8,
    top: 18,
    opacity: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
    zIndex: 2,
    padding: 24
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
  },
  modalWrapper: {
    elevation: 24,
    backgroundColor: 'white',
    maxHeight: height * 0.9,
  },
});
