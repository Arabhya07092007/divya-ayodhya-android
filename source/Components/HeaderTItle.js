import * as React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default class HeaderTitle extends React.Component {
  render() {
    return (
      <View style={styles.logoCont}>
        <Image
          source={

            {
                uri: 'https://seeklogo.com/images/U/uttar-pradesh-government-logo-1FA161CB94-seeklogo.com.png',
              }
            // require("../Assests/ada_img.png")
          }
          style={styles.govLogo}
        />
        <Text style={styles.logoHeading}>अयोध्या दर्शन</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  govLogo: {
    width: 40,
    height: 40,
    backgroundColor:"white",
    borderRadius:100,
    padding:2
  },
  logoHeading: {
    // fontWeight: 'bold',
    color: 'white',
    fontSize: 25,
    marginLeft: 5,
    // fontFamily: 'Baloo2-Bold',

  },
  logoCont: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
