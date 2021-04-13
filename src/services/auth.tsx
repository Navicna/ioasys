import * as React from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import NavigationServices from "../navigation/NavigationServices";

export const API_URL = 'https://empresas.ioasys.com.br';

export function useLogin(){

  const [loadingAuth, setLoadingAuth] = React.useState(false);

  const [authenticated, setAuthenticated] = React.useState(false);

  async function login({credentials, navigate}: any){
    setLoadingAuth(true);
    try {
      const response = await axios.post(`${API_URL}/api/v1/users/auth/sign_in`, credentials);
    
      if (response) {
        setAuthenticated(true);
        const stringValue = JSON.stringify({
            token: response.headers['access-token'],
            client: response.headers.client,
            uid: response.headers.uid,
            isAuthenticated: authenticated
        })
        await AsyncStorage.setItem('userCredentials', stringValue);
        navigate('Home');
      }
  
    } catch (e) {
      Alert.alert('Ops', 'Incorrect credentials');
    } finally {
      setLoadingAuth(false)
    }
  }

  return { login, loadingAuth, authenticated }

}

