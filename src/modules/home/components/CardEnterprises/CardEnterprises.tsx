import * as React from 'react';
import { View, Text, ImageSourcePropType } from 'react-native';
import * as CE from './CardEnterprises.styles';

const CardEnterprises: React.FC<{name: string; source: ImageSourcePropType}> = ({ name, source }) => {
  return (      
    <CE.CardContainer>
      <CE.CardBackground source={source}>
        <CE.CardName>
          {name}
        </CE.CardName>
      </CE.CardBackground>
    </CE.CardContainer>
  );
}

export default CardEnterprises;