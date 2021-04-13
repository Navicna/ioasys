import * as React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { height, SPACING, width } from '../../../config/dimensions';
import { StyledButton } from '../../auth/components/StyledButton';


const Info: React.FC<{title?: string}> = ({ title, navigation }) => {
  return (
      <View style={{ alignItems: 'center', justifyContent: 'center', height: height * 0.34, width: width }}>
        <Text style={{ fontSize: 24, fontFamily: 'Opensans-Regular', position: 'absolute', top: 8 }}>
            Improvements are coming ;)
        </Text>
        <Icon name="info-circle" color="black"  size={80} />
        <StyledButton 
        title="OK"
        onPress={() => navigation.goBack()}
        mt={SPACING + 8}
        />
    </View>
  );
}

export default Info;