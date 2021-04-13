import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SPACING } from '../../../config/dimensions';

export const Eye: React.FC<{onPress(): void}> = ({ onPress }) => 
(<TouchableOpacity onPress={onPress} style={{ position: 'absolute', right: 0, bottom: SPACING / 2 }}>
    <Icon name="eye" size={30} color="black" />
</TouchableOpacity>)

export const EyeSlash: React.FC<{onPress(): void}> = ({ onPress }) => 
(<TouchableOpacity onPress={onPress} style={{ position: 'absolute', right: 0, bottom: SPACING / 2 }}>
    <Icon name="eye-slash" size={30} color="black" />
</TouchableOpacity>)