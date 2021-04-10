import * as React from 'react';
import { ScrollView, View } from 'react-native';

export const HomeContainer: React.FC = ({ children }) => (    
    <ScrollView 
    showsVerticalScrollIndicator={false}
    style={{ flex: 1, paddingLeft: 16, paddingTop: 24 }}>
        {children}
    </ScrollView>
)