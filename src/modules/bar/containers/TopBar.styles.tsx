import * as React from 'react';
import { View, Image, ImageSourcePropType } from 'react-native';
import { Colors } from '../../../constants/Colors';

export const TopBarContainer: React.FC<{isDetailScreen?: boolean}> = ({ isDetailScreen, children }) => (
    <View style={{ flexDirection: 'row',alignItems: 'center', justifyContent: 'space-between', backgroundColor: !isDetailScreen ? 'black' : 'transparent', width: "100%", height: 80, paddingTop: 32, paddingHorizontal: 16 }}>
      {children}
    </View>
)

export const LogoIoasys: React.FC<{source: ImageSourcePropType;}> = ({ source }) => (
    <Image resizeMode="contain" source={source} style={{ height: 50, width: 100 }}/>
)