import * as React from 'react';
import { View, Image, ImageSourcePropType } from 'react-native';
import { Colors } from '../../constants/Colors';

export const TopBarContainer: React.FC = ({ children }) => (
    <View style={{ alignItems: 'center', justifyContent: 'flex-end', backgroundColor: Colors.pink, width: "100%", height: 80 }}>
      {children}
    </View>
)

export const LogoIoasys: React.FC<{source: ImageSourcePropType;}> = ({ source }) => (
    <Image resizeMode="contain" source={source} style={{ height: 50, width: 100 }}/>
)