import * as React from 'react';
import { ImageSourcePropType, Image, Text, StyleSheet, ImageBackground, View } from 'react-native';
import { height, SPACING, width } from '../../../config/dimensions';
import * as Animatable from 'react-native-animatable';

export const TOP_HEADER_HEIGHT = height * 0.3

export const Wrapper: React.FC<{source: ImageSourcePropType}> = ({ source, children }) => (  
    
    <Animatable.View 
    animation="bounceIn"
    duration={200}
    style={{ height: TOP_HEADER_HEIGHT,  }}>
        
        <ImageBackground source={source} style={{ height: TOP_HEADER_HEIGHT }}>
            {children}
        </ImageBackground>
    </Animatable.View>
    
)

export const AuthContainer: React.FC = ({ children }) => (  
    <View style={{ backgroundColor: 'white', height: height * 0.7, width: width, justifyContent: 'center', paddingHorizontal: SPACING * 2, borderTopLeftRadius: SPACING * 2, borderTopRightRadius: SPACING *2, marginTop: - SPACING * 2 }}>
        {children}
    </View>
)

export const Description: React.FC = ({ children }) => (  
    <Text style={{ fontSize: 14, color:"black", fontFamily: 'Montserrat-Regular', textAlign: 'left' }} >
        {children}
    </Text>
)

export const styles = StyleSheet.create({
    content: { 
    paddingTop: 48,
    position: 'absolute' ,
    height,
    width ,
    backgroundColor: 'white', 
    transform: [{ translateY: TOP_HEADER_HEIGHT - 32  }], 
    borderRadius: 32,
    padding: 16
  }
})
