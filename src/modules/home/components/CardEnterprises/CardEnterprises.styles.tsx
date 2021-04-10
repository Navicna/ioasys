import * as React from 'react';
import { View, Image, ImageSourcePropType, Text, ImageBackground } from 'react-native';

export const CardContainer: React.FC = ({ children }) => (    
    <View style={{ width: 343, marginVertical: 16 }}>
        {children}
    </View>
)

export const CardName: React.FC = ({ children }) => (
    <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
        {children}
    </Text>
)

export const CardBackground: React.FC<{source: ImageSourcePropType;}> = ({ source, children }) => (
    <ImageBackground resizeMode="cover" source={source} style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#79BBCA', height: 120  }}>
        {children}
    </ImageBackground>
)