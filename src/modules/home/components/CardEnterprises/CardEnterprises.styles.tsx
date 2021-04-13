import * as React from 'react';
import { View, ImageSourcePropType, Text, ImageBackground, StyleProp, ViewStyle, Image, Dimensions } from 'react-native';
import { CARD_HEIGHT, CARD_WIDTH, height, width } from '../../../../config/dimensions';
import { Colors } from '../../../../constants/Colors';

export const CardContainer: React.FC= ({ children}) => (    
    <View style={{ width: CARD_WIDTH, height: CARD_HEIGHT, borderRadius: 8  }} >
        {children}
    </View>
)

export const CardName: React.FC = ({ children }) => (
    <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', fontFamily: 'Montserrat-Regular', position:"absolute", left: 8, bottom: 8 }}>
        {children}
    </Text>
)

export const CardBackground: React.FC<{source: ImageSourcePropType;}> = ({ source }) => (
    <Image resizeMode="cover" source={source} style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#79BBCA', height: CARD_HEIGHT, borderRadius: 8  }}/>
        
)