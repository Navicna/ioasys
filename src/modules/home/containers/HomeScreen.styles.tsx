import * as React from 'react';
import { ImageSourcePropType, ScrollView, View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../../constants/Colors';

const { width, height } = Dimensions.get('screen');

export const HomeContainer: React.FC = ({ children }) => (    
    <ScrollView 
    showsVerticalScrollIndicator={false}
    style={{ flex: 1}}
    >
        {children}
    </ScrollView>
)

export const Wrapper: React.FC = ({ children }) => (    
    <View style={{ paddingLeft: 16, backgroundColor: Colors.appBackground, paddingTop: 16, borderTopLeftRadius: 18, borderTopRightRadius: 18, marginTop: -18 }}>
        {children}
    </View>
)

export const HomeBanner: React.FC<{source: ImageSourcePropType}> = ({ source }) => (    
    <Image style={{ height: 260, width: '100%' }} source={source} resizeMode="cover"/>
)

export const CardSectionWrapper: React.FC = ({ children }) => (    
    <View style={{ marginBottom: 16 }}>
        {children}
    </View>
)

export const CardSectionTitle: React.FC = ({ children }) => (    
    <Text style={{ fontSize: 16, color: Colors.pink, fontFamily: 'Opensans-Regular', marginBottom: 8 }}>
        {children}
    </Text>
)

export const styles = StyleSheet.create({
    bg: {
        position: 'absolute' ,
        height,
        width ,
        backgroundColor: 'red', 
        transform: [{ translateY: height  }], 
        borderRadius: 32
    },
    flatlist: { 
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 6,
        marginBottom: 24
    }
})