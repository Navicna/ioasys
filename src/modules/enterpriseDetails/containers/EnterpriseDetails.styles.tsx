import * as React from 'react';
import { ImageSourcePropType, Image, Text, StyleSheet, ImageBackground } from 'react-native';
import { height, width } from '../../../config/dimensions';
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

export const Title: React.FC = ({ children }) => (  
    <Text style={{ fontSize: 24, color:"black", fontFamily: 'Montserrat-Regular', }} >
        {children}
    </Text>
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
