import * as React from 'react';
import * as TB from './TopBar.styles';
import { View } from 'react-native';
import { Images } from '../../../constants/Images';
import { ArrowLeft, Search, Menu } from '../components/icons';
import { useNavigation } from '@react-navigation/core';
import Info from '../../modal/components/Info';


const TopBar: React.FC<{isDetailScreen?: boolean}> = ({ children, isDetailScreen }) => {
  const{ goBack, navigate }  = useNavigation()
  return (
    <View style={{ flex: 1 }}>      
      <TB.TopBarContainer isDetailScreen={isDetailScreen} >
        {isDetailScreen ? <ArrowLeft onPress={() => goBack()}/> : <Menu onPress={() => navigate('Modal',{
          Render: Info
        })} />}
        <TB.LogoIoasys source={Images.logoIoasys} />
        {!isDetailScreen ? <Search onPress={() => navigate('Search') }/> : <View />}
      </TB.TopBarContainer>      
      {children}
    </View>
  );
}

export default TopBar;