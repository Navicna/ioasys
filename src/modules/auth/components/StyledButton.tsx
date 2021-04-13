import * as React from 'react';
import { ImageSourcePropType, Image, Text, StyleSheet, ImageBackground, View, TextInput, TextInputProps, TouchableOpacity, ActivityIndicator } from 'react-native';
import { height, SPACING, width } from '../../../config/dimensions';


export const StyledButton: React.FC<{title: string; onPress(): void; transparent?: boolean; mt?: number; loading?: boolean;}> = ({ title, onPress, transparent, mt = SPACING * 4, loading }) => (  
    <TouchableOpacity onPress={onPress} >
        <View style={{ width: width - SPACING * 4, height: 60, marginTop: mt, borderRadius: 6, backgroundColor:transparent ? 'white' : 'black', justifyContent: 'center', alignItems: 'center' }}>
            {loading ? 
                <ActivityIndicator />
            :
            <Text style={{ color: transparent ? 'black' : 'white', fontFamily: 'Montserrat-Bold', fontSize: 18 }}>
                {title}
            </Text>}
        </View>
    </TouchableOpacity>
)