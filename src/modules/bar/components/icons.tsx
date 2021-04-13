import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const ArrowLeft: React.FC<{onPress(): void}> = ({ onPress, ...rest }) => 
(<TouchableOpacity onPress={onPress}>
    <Icon name="arrow-circle-left" size={24} color="white" {...rest} />
</TouchableOpacity>)

export const Search: React.FC<{onPress(): void}> = ({ onPress }) => 
(<TouchableOpacity onPress={onPress}>
    <Icon name="search" size={24} color="white" />
</TouchableOpacity>)

export const Menu: React.FC<{onPress(): void}> = ({ onPress }) => 
(<TouchableOpacity onPress={onPress}>
    <Icon name="bars" size={24} color="white" />
</TouchableOpacity>)