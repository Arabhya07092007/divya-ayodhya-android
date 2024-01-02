import * as React from 'react';
import {Text, Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import {SvgUri} from 'react-native-svg';

export default Item = ({navigation, itemText, NavigateScreen, imgSource}) => {
  return (
    <View style={styles.cont}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(NavigateScreen);
        }}
        style={{borderRadius: 20, backgroundColor:"#FDFAE7", elevation:2}}>
        <Image source={imgSource} style={styles.icon_base} />
      </TouchableOpacity>
      <Text style={styles.itemTxt}>{itemText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    width: 62,
    // height: 62,
    // backgroundColor: 'pink',
    // borderRadius:10,
    // padding:2
  },
  icon_base: {
    width: 62,
    height: 62,
    borderRadius: 20,
  },
  itemTxt: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 12,
    color: '#4B5563',
  },
});
