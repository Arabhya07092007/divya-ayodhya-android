import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon, { Icons } from '../Components/Icons';
import call from 'react-native-phone-call'

export default function EmContact({ number, text, backgroundColor }) {

  const handlePhoneCall = () => {
    const args = {
      number: '9452624111', // String value with the number to call
      prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call
      skipCanOpen: true, // Skip the canOpenURL check
    };

    call(args).catch(console.error);
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: backgroundColor,
        // marginTop:10,
        padding: 8,
        borderRadius: 10
      }}>
      <View style={{}}>
        <Text style={{ color: 'black', fontWeight: '600', fontSize: 17 }}>
          {text}
        </Text>
        <Text style={{ color: 'black' }}>{number}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={handlePhoneCall}
          style={{ backgroundColor: '#F0791F', padding: 7, borderRadius: 50 }}>
          <Icon type={Icons.Ionicons} name={'call'} color="white" size={26} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#FDFAE7',
  },
});
