import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { Dimensions } from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
import Icon, { Icons } from '../Components/Icons';
import database from '@react-native-firebase/database';

function pushBooking(blob) {

  const data = {
    uid: blob.parkingComplex.uid,
    orderNO: "rwewerw23131",
    paymentId: "asdasd123123",
    vehicleNo: blob.vehicleNo,
    name: blob.name,
    contactNo: blob.phoneNo,
    miscelleneous: {
      data: "ffeffwfw",
    },
    parkingId: "srmjnmbh18",
    slotNo: 1,
    startTime: blob.startTime,
    endTime: blob.endTime,
    vehicleType: blob.vehicleType,
    amount: blob.amount,
    date: blob.date,
    slot: blob.slot,

  }

  const newReference = database().ref('/Parking/bookings/' + blob.parkingComplex.uid + "/").push();

  console.log('Auto generated key: ', newReference.key);

  newReference
    .set(data)
    .then(() => console.log('Data updated.'));

  // console.log(data);
  //   database()
  //     .ref("Parking/" + "bookings/" + blob.parkingComplex.uid + "/") 
  //     .set(data)
  //     .then(() => console.log('Data set.'));

}


export default function Ticket({ navigation, route }) {

  const { paymentData } = route.params;
  return (
    <SafeAreaView style={styles.cont}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FDFAE7'} />
      <ImageBackground
        source={require('../Assests/Subtract.png')}
        style={styles.ticketImg}
        imageStyle={{ borderRadius: 20 }}>
        <Text style={{ color: 'black', textAlign: 'center', marginBottom: 20, fontWeight: "600" }}>
          Scan this on the scanner machine when you are in the parking lot
        </Text>
        <TouchableOpacity onPress={() => {
          pushBooking(paymentData);
        }}>
          <Image source={require('../Assests/qrcode.png')} style={styles.qr} />
        </TouchableOpacity>

        <View>
          <View style={{ marginTop: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: '50%' }}>
                <Text style={styles.txt1}>Name</Text>
              </View>
              <View style={{ width: '50%' }}>
                <Text style={styles.txt1}>Vehicle</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: '50%' }}>
                <Text style={styles.txt2}>{paymentData.name}</Text>
              </View>
              <View style={{ width: '50%' }}>
                <Text style={styles.txt2}>{paymentData.vehicleNo}</Text>
              </View>
            </View>
          </View>

          <View style={{ marginTop: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: '50%' }}>
                <Text style={styles.txt1}>Parking Area</Text>
              </View>
              <View style={{ width: '50%' }}>
                <Text style={styles.txt1}>Parking Spot</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: '50%' }}>
                <Text style={styles.txt2}>{paymentData.parkingComplex.address}</Text>
              </View>
              <View style={{ width: '50%' }}>
                <Text style={styles.txt2}>1st Floor(A05)</Text>
              </View>
            </View>
          </View>

          <View style={{ marginTop: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: '50%' }}>
                <Text style={styles.txt1}>Duration</Text>
              </View>
              <View style={{ width: '50%' }}>
                <Text style={styles.txt1}>Date</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: '50%' }}>
                <Text style={styles.txt2}>4 hours</Text>
              </View>
              <View style={{ width: '50%' }}>
                <Text style={styles.txt2}>{paymentData.date}</Text>
              </View>
            </View>
          </View>

          <View style={{ marginTop: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: '50%' }}>
                <Text style={styles.txt1}>Hours</Text>
              </View>
              <View style={{ width: '50%' }}>
                <Text style={styles.txt1}>Phone</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: '50%' }}>
                <Text style={styles.txt2}>{paymentData.slot}</Text>
              </View>
              <View style={{ width: '50%' }}>
                <Text style={styles.txt2}>{paymentData.phoneNo}</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cont: {
    backgroundColor: '#FDFAE7',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  ticketImg: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  qr: {
    width: 200,
    height: 200,
    marginBottom: 45,
  },
  txt1: { color: '#757575', fontWeight: '600' },
  txt2: { color: 'black', fontWeight: '600' },
});
