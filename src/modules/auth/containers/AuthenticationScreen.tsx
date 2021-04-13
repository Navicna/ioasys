import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { View, Text, FlatList, Image, Animated, Dimensions, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { Images } from '../../../constants/Images';
import { height, SPACING, width } from '../../../config/dimensions';
import * as Animatable from 'react-native-animatable';
import * as AS from './AuthScreen.styles';
import { Eye, EyeSlash } from '../components/icons';
import { StyledTextInput } from '../components/StyledTextInput';
import { StyledButton } from '../components/StyledButton';
import { useLogin } from '../../../services/auth';
import Info from '../../modal/components/Info';

export default function AuthenticationScreen() {

const { navigate } = useNavigation();

  const [ hidePassword, sethidePassword ] = React.useState(true);

  const [ email, setEmail ] = React.useState<string>('');

  const [ password, setPassword ] = React.useState<string>('');

  const { login, loadingAuth, authenticated } = useLogin();

  return (
    <View style={{ backgroundColor: 'white', alignItems: 'center' }}>
        <ImageBackground style={{ alignItems: 'center',  height: height * 0.3, width, justifyContent: 'center' }} source={Images.splash}>
            <Animatable.View animation="fadeInLeftBig" duration={400}>
                <Image source={Images.logoIoasys} style={{ height: 30, width: 120 , marginBottom: SPACING}}  resizeMode="contain"/>
            </Animatable.View>
            <Animatable.View animation="fadeInLeftBig" duration={600}>
                <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 20, color: 'white' }}>
                    Welcome to enterprises!
                </Text>
            </Animatable.View>
        </ImageBackground>
        <Animatable.View animation="fadeInLeftBig" duration={400} delay={500}>
            <AS.AuthContainer>
                <StyledTextInput 
                    name="Email"
                    onChangeText={(email: string) => setEmail(email)}
                />
                <View style={{ marginBottom: SPACING * 2 }}/>
                <StyledTextInput 
                    name="Password"
                    onChangeText={(password: string) => setPassword(password)}
                    secureTextEntry={hidePassword}
                    icon={hidePassword ? <Eye onPress={() => sethidePassword(!hidePassword)} /> : <EyeSlash onPress={() => sethidePassword(!hidePassword)}  /> }
                />                
                <StyledButton
                title="SIGN IN"
                onPress={() => {
                    login({credentials: { email, password }, navigate})                    
                }}
                loading={loadingAuth}
                />
                <StyledButton
                title="SIGN UP"
                transparent
                onPress={() => navigate('Modal',{
                    Render: Info
                })}
                mt={SPACING}
                />
            </AS.AuthContainer>       
        </Animatable.View>     
    </View>
  );
}