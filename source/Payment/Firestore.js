import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import database from '@react-native-firebase/database';
import { Parking, Bookings } from '../Database/data';

function writeUserData(data, fieldName) {
  database()
    .ref("Parking/" + fieldName + "/" + "srmjnmbh18" + "/")
    .set(data)
    .then(() => console.log('Data set.'));

}



export default class Firestore extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello World</Text>
        <Button title="Write Data" onPress={() => writeUserData(Bookings, "bookings")} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});