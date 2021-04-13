import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { View, FlatList, TextInput, Text, TouchableOpacity } from 'react-native';
import { height, SPACING, width } from '../../../config/dimensions';
import { Colors } from '../../../constants/Colors';
import { navigationRef } from '../../../navigation/NavigationServices';
import { useEnterprises } from '../../../services/data';
import { IEnterPriseProps } from '../../../utils/interfaces';
import { getEnterpriseByType, getEnterpriseID } from '../../../utils/types';
import { ArrowLeft, Search } from '../../bar/components/icons';
import { enterprisesType } from '../../home/utils/home.utils';

export default function SearchScreen() {

    const { goBack, navigate } = useNavigation();

    const [enterpriseID, setEnterpriseID] = React.useState<number>(1);

    const [selectType, setSelectType] = React.useState<string>('');

    const { getEnterprisesByFilter, enterprisesFiltered } = useEnterprises();

const TOP_HEADER = height * 0.15;

const COMPONENT_SEARCH_WIDTH = width * 0.8;

const COMPONENT_SEARCH_HEIGHT = TOP_HEADER * 0.4;

console.log(enterprisesFiltered)


  return (
    <>
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        {/* Top Header */}
        <View style={{ backgroundColor: '#35363A', height: TOP_HEADER, alignItems: 'flex-end', justifyContent: 'flex-end', flexDirection: 'row' }}>
            {/* Search Component */}
            <View style={{ position:'absolute', left: 0, top: TOP_HEADER / 2, marginLeft: SPACING }}>
                <ArrowLeft  size={32} onPress={() => goBack()  }/>
            </View>
            <View style={{ backgroundColor: 'gray', width: COMPONENT_SEARCH_WIDTH, height: COMPONENT_SEARCH_HEIGHT, borderRadius: SPACING / 2, marginBottom: SPACING, marginRight: SPACING, justifyContent: 'flex-start', flexDirection: 'row'}}>
                <View style={{ justifyContent: 'center',alignItems: 'center', width: COMPONENT_SEARCH_WIDTH * 0.2, backgroundColor: 'gray', height:COMPONENT_SEARCH_HEIGHT, borderTopLeftRadius: SPACING / 2, borderBottomLeftRadius: SPACING / 2, position: 'absolute'  }}>
                    <Search />
                </View>
                <View style={{ marginLeft: COMPONENT_SEARCH_WIDTH * 0.2, justifyContent: 'center' }}>
                <TextInput
                style={{ fontSize: 20, color: 'white' }}
                placeholder="Search for enterprises"
                placeholderTextColor="white"
                onChangeText={(text) => getEnterprisesByFilter(enterpriseID, text)}
                />
                </View>
            </View>
        </View>
        <View style={{  backgroundColor: 'black' }}>
            <Text style={{ color: 'white', marginLeft: SPACING, marginTop: SPACING }}>
                Select enterprise type
            </Text>
        <FlatList
        horizontal
        data={enterprisesType}
        contentContainerStyle={{ margin: SPACING }}
        renderItem={({ item }: any): JSX.Element => (
            <TouchableOpacity onPress={() => {
                const id = getEnterpriseID(item);
                const type = getEnterpriseByType(id);

                setSelectType(type)
                
                setEnterpriseID(id);

            }}>
              <View style={{ paddingHorizontal: 8,maxWidth: 120, height: 40, backgroundColor: selectType === item ? Colors.pink : 'gray', borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginRight: 8 }}>
                <Text style={{ color: 'white' }}>
                    {item}
                </Text>
            </View>
            </TouchableOpacity>
          )}          
        />
        <>
              <Text style={{ color: 'white', marginLeft: SPACING, marginTop: SPACING, fontSize: 20 }}>
                Results ({enterprisesFiltered.length || 0})
                </Text>
              {enterprisesFiltered.map((item: IEnterPriseProps) => {
                  return (
                      <TouchableOpacity onPress={() =>  navigate('Details', {enterprise: item})}>
                        <Text style={{ color: 'white', marginLeft: SPACING, marginTop: SPACING, fontSize: 18 }}>
                            {item.enterprise_name}
                        </Text>
                    </TouchableOpacity>
                  )
              })}
              </>
               
        </View>
        
      </View>
    </>
  );
}