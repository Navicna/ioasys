import * as React from 'react';
import { ImageSourcePropType, Image, Text, StyleSheet, ImageBackground, View, TextInput, TextInputProps } from 'react-native';
import { height, SPACING, width } from '../../../config/dimensions';


export const StyledTextInput: React.FC<{name: string; icon?: JSX.Element} & TextInputProps> = ({ icon, name, ...rest }) => (  
    <View style={{ borderBottomWidth: 0.4, paddingBottom: 8 }}>
        <Text style={{ marginBottom: SPACING / 2, fontFamily: 'OpenSans-Regular' }}>
            {name}
        </Text>
        {icon}
        <TextInput
        {...rest}
        />
    </View>
)