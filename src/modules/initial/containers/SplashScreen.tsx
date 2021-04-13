import React from 'react';
import { ImageBackground } from 'react-native';
import { height, width } from '../../../config/dimensions';
import { Images } from '../../../constants/Images';

export default function SplashScreen(){
    return (
        <ImageBackground style={{ height, width }} source={Images.splash}>

        </ImageBackground>
    )
}