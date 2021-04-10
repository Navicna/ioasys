import * as React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Colors } from '../../../constants/Colors';
import { enterprises } from '../../../utils/provisory';
import TopBar from '../../bar/TopBar';
import CardEnterprises from '../components/CardEnterprises/CardEnterprises';
import { enterprisesType } from '../utils/home.utils';
import * as HS from './HomeScreen.styles'

export default function HomeScreen() {

    console.log(enterprises.map(x => x.enterprise_type.enterprise_type_name).sort())

  return (
      <TopBar>
        <HS.HomeContainer>
          {enterprisesType.map((type: string) => 
          <View>
            <Text style={{ fontSize: 18, color: Colors.pink }}>
              {type}
            </Text>
            <FlatList 
              horizontal
              showsHorizontalScrollIndicator={false}
              data={enterprises.filter(y => type === y.enterprise_type.enterprise_type_name)}
              renderItem={({ item, index }) => (
                <View style={{ marginRight: 16 }}>
                  <CardEnterprises name={item.enterprise_name} key={index} source={{ uri: `https://empresas.ioasys.com.br${item.photo}` }} />
                </View>
              )}
              />
          </View>
          )}
        </HS.HomeContainer>
      </TopBar>    
  );
}