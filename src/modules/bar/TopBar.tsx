import * as React from 'react';
import * as TB from './TopBar.styles';
import { Images } from '../../constants/Images';
import { View } from 'react-native';

const TopBar: React.FC = ({ children }) => {
  return (
    <View style={{ flex: 1 }}>
      <TB.TopBarContainer>
        <TB.LogoIoasys source={Images.logoIoasys} />
      </TB.TopBarContainer>
      {children}
    </View>
  );
}

export default TopBar;