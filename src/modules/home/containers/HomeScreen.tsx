import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { View, FlatList } from 'react-native';
import { Images } from '../../../constants/Images';
import CardEnterprises from '../components/CardEnterprises/CardEnterprises';
import { enterprisesType } from '../utils/home.utils';
import * as HS from './HomeScreen.styles'
import TopBar from '../../bar/containers/TopBar';
import * as Animatable from 'react-native-animatable';
import { useEnterprises } from '../../../services/data';
import { API_URL } from '../../../services/auth';
import { IEnterPriseProps } from '../../../utils/interfaces';

export default function HomeScreen() {
  const { navigate } = useNavigation();

  const { enterprises, getEnterprisesData, loadingEnterprises } = useEnterprises();

  React.useEffect(()=> {
    if(!enterprises){
      getEnterprisesData();
    }
  },[]);

  if(!enterprises) return null;

  console.log(enterprises);
  // console.log(enterprises.map(x => x.enterprise_type.enterprise_type_name).sort());

  return (
    <>
      <TopBar>
        <HS.HomeContainer>
          <HS.HomeBanner source={Images.banner}/>
        {enterprises && <HS.Wrapper>
          {enterprisesType.map((type: string, i) => 
          <Animatable.View animation="fadeInUp" duration={1200 + i * 200}>
            <HS.CardSectionWrapper  key={i}>
              <HS.CardSectionTitle>
                {type}
              </HS.CardSectionTitle>
                <FlatList 
                  horizontal
                  contentContainerStyle={HS.styles.flatlist}
                  showsHorizontalScrollIndicator={false}
                  data={enterprises.filter((item: IEnterPriseProps) => type === item.enterprise_type.enterprise_type_name)}
                  renderItem={({ item }: any): JSX.Element => (
                    <View style={{ marginRight: 20 }}>
                      <CardEnterprises name={item.enterprise_name} source={{ uri: `${API_URL}${item.photo}` }} onPress={() => navigate('Details', { enterprise: item })} />
                    </View>
                  )}
                  pagingEnabled              
                  keyExtractor={(item: any, i) => item.id}
                  />               
            </HS.CardSectionWrapper>
          </Animatable.View>
          )}
          </HS.Wrapper>}
        </HS.HomeContainer>       
      </TopBar>         
      </>
  );
}