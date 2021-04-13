import { RouteProp, useRoute } from '@react-navigation/core';
import * as React from 'react';
import { View, Text, ImageSourcePropType, ViewStyle, StyleProp, TouchableOpacity, Image, ScrollView } from 'react-native';
import { height, width } from '../../../config/dimensions';
import { Images } from '../../../constants/Images';
import { getCountryImage } from '../../../utils/countrys';
import { CountryType, IEnterPriseProps } from '../../../utils/interfaces';
import * as ED from './EnterpriseDetails.styles';
import * as Animatable from 'react-native-animatable';
import { Colors } from '../../../constants/Colors';
import TopBar from '../../bar/containers/TopBar';
import { API_URL } from '../../../services/auth';



const DURATION = 200;

type EnterpriseDetailsRouteProps = {
    EnterpriseDetails: {
        enterprise: IEnterPriseProps
    }
}

type ReceiptDetachPageProps = RouteProp<EnterpriseDetailsRouteProps, 'EnterpriseDetails'>;


const EnterpriseDetails: React.FC<{name: string; source: ImageSourcePropType; onPress(): void; route: ReceiptDetachPageProps } > = ({ route, name, source, onPress}) => {

    const { enterprise } = route.params;

    const countryImage = getCountryImage(enterprise.country as CountryType)

    const icons = [Images.buildings, countryImage ];

  return (         
      <View> 
        <ED.Wrapper source={{ uri: `${API_URL}${enterprise.photo}` }}>
            <TopBar isDetailScreen/>
        </ED.Wrapper>        
        <View style={ED.styles.content}> 
        <ScrollView>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            {icons.map((icon, i) => (
                <Animatable.View
                key={i}
                animation="bounceIn"
                delay={DURATION + i * 200}
                style={{ 
                height: 80, 
                width: 80,
                marginHorizontal: 32 
                }}>
                    <View style={{ alignItems: 'center'}}>
                        <Image source={icon} style={{ height: 80, width: 80 }} />
                        <Text style={{ marginTop: 8, color: Colors.pink, fontFamily: 'Montserrat-Regular', }}>
                            { i === 0 ? enterprise.city : enterprise.country}
                        </Text>
                    </View>
                </Animatable.View>
            ))}     
            <Animatable.View
            animation="fadeIn"
            delay={1200}
            style={{ position: 'absolute', top: ED.TOP_HEADER_HEIGHT * 0.6, width: width - 32  }}>
                <ED.Title>
                    {enterprise.enterprise_name}    
                </ED.Title> 
            </Animatable.View> 
            <Animatable.View
            animation="fadeInUp"
            delay={800}
            style={{ position: 'absolute', alignItems: 'center', top: ED.TOP_HEADER_HEIGHT * 0.8, width: width -32 }}>
                <ED.Description>
                    {enterprise.description}    
                </ED.Description> 
            </Animatable.View> 
            </View>
            </ScrollView>
        </View>
     </View>     
     
  );
}

// EnterpriseDetails.sharedElements = (route, otherRoute, showing) => {
//     const {item} = route.params

//     return [
//         {
//             id: "general.bg"
//         }
//     ]
// }

export default EnterpriseDetails;