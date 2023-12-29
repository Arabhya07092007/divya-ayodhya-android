import * as React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, ToastAndroid} from 'react-native';

import Icon, {Icons} from '../Components/Icons';

const showToast = () => {
  ToastAndroid.showWithGravity(
    'We are still working on some features.',
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
  );
};

export default class HeaderRight extends React.Component {
  render() {
    return (
      <View style={{marginRight: 12, flexDirection: 'row', gap: 10}}>
        <TouchableOpacity onPress={()=>{
          showToast()
        }}>
          <Icon
            type={Icons.Ionicons}
            name={'language'}
            color="white"
            size={27}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          showToast()
        }}>
          <Icon
            type={Icons.Ionicons}
            name={'search'}
            color="white"
            size={27}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
