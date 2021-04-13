import * as React from 'react';
import { View, Text, ImageSourcePropType, ViewStyle, StyleProp, TouchableOpacity } from 'react-native';
import * as CE from './CardEnterprises.styles';

const CardEnterprises: React.FC<{name: string; source: ImageSourcePropType; onPress(): void}> = ({ name, source, onPress}) => {
  return (    
    
    <CE.CardContainer>
      <TouchableOpacity onPress={onPress}>
        <CE.CardBackground source={source} />
          <CE.CardName>
            {name}
          </CE.CardName>
        </TouchableOpacity>
    </CE.CardContainer>
     
  );
}

export default CardEnterprises;