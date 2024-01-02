import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Icon, { Icons } from './Icons';

export default function LostFound({ name, phoneNo, address, complaint }) {

  return (
    <View
      style={{
        // backgroundColor:"white"
        marginTop:20,
        borderRadius:10
      }}>
      <View style={vnStyles.container}>
                <TextInput
                  style={vnStyles.input}
                  placeholder="Enter Vehicle Number"
                  placeholderTextColor="#888"
                  value={vehicleNo}
                  onChangeText={(text) => setVehicleNo(text)}
                />
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


const vnStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F2F3',
    // backgroundColor: 'red',
    borderRadius: 5,
    // paddingVertical: 8,
    paddingHorizontal: 12,
    // margin: 10,
    elevation: 1,
    marginTop: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});