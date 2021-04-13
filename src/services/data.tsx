import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API_URL } from './auth';
import { Alert } from "react-native";
import { IEnterPriseProps } from "../utils/interfaces";


export function useEnterprises(){

    const [enterprises, setEnterprises] = React.useState<IEnterPriseProps | null>(null);

    const [loadingEnterprises, setLoadingEnterprises] = React.useState<boolean>(false);

    const [enterprisesFiltered, setEnterprisesFiltered] = React.useState<IEnterPriseProps | []>([]);

    async function getEnterprisesData(){
        setLoadingEnterprises(true);
        try {
            const value = await AsyncStorage.getItem('userCredentials');
            const credentials = JSON.parse(value);
    
            const resp = await axios.get(`${API_URL}/api/v1/enterprises`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'access-token': credentials.token,
                    'client': credentials.client, 
                    'uid': credentials.uid
                }
            })

            setEnterprises(resp.data.enterprises);
    
        } catch (e) {                        
            Alert.alert("Ops", "Erro ao recuperar dados");
        } finally {
            setLoadingEnterprises(false);
        }
    }

    async function getEnterprisesByFilter(id: number, filter: string){
        try {
            const value = await AsyncStorage.getItem('userCredentials');
            const credentials = JSON.parse(value);
    
            const resp = await axios.get(`${API_URL}/api/v1/enterprises?enterprise_types=${id ? id : 1}&name=${filter}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'access-token': credentials.token,
                    'client': credentials.client, 
                    'uid': credentials.uid
                }
            })

            console.log(resp)

            setEnterprisesFiltered(resp.data.enterprises);
    
        } catch (e) {                        
            Alert.alert("Ops", "Erro ao recuperar dados");
        } finally {
            setLoadingEnterprises(false);
        }
    }



    return { getEnterprisesData, getEnterprisesByFilter, enterprises, loadingEnterprises, enterprisesFiltered }

}

