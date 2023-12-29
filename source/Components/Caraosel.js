import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class Caraosal extends React.Component {
  render() {
    return (
      <View style={styles.cont}>
        <Image
          style={styles.banner_img}
          source={{
            uri: 'http://www.sriramwallpapers.com/god-images/sri-ram-wallpapers/main/sri-ram-darbar.jpg',
          }}
        />

        <View style={styles.indicators}>
          <View style={styles.circles} />
          <View style={styles.circles} />
          <View style={styles.circles} />
          <View style={styles.circles} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
    // marginHorizontal: 10,
    marginTop:20
  },
  banner_img: {
    // width:"80%",
    height: 180,
    borderRadius: 10,
  },
  indicators: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60,
    alignSelf: 'center',
    marginTop: 6,
  },
  circles: {
    width: 8,
    height: 8,
    backgroundColor: 'orange',
    borderRadius: 100,
  },
});
