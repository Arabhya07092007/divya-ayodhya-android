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
import {Dimensions} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
import Icon, {Icons} from '../Components/Icons';

export default class ReviewSm extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.cont}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#FDFAE7'} />

        <View>
          <View
            style={{
              margin: 10,
              paddingHorizontal: 15,
              paddingTop: 10,
              backgroundColor: 'white',
              borderRadius: 10,
              elevation: 1,
            }}>
            <View style={styles.itemCont}>
              <Text style={styles.lft}>Parking Area</Text>
              <Text style={styles.rht}>Ram Mandir Parking</Text>
            </View>

            <View style={styles.itemCont}>
              <Text style={styles.lft}>Address</Text>
              <Text style={styles.rht}>Near Ram ki paidi, Ayodhya</Text>
            </View>

            <View style={styles.itemCont}>
              <Text style={styles.lft}>Vehicle</Text>
              <Text style={styles.rht}>UP42 ZZ XYXY</Text>
            </View>

            <View style={styles.itemCont}>
              <Text style={styles.lft}>Parking Spot</Text>
              <Text style={styles.rht}>1st FLoor(A05)</Text>
            </View>

            <View style={styles.itemCont}>
              <Text style={styles.lft}>Date</Text>
              <Text style={styles.rht}>22 January, 2024</Text>
            </View>

            <View style={styles.itemCont}>
              <Text style={styles.lft}>Duration</Text>
              <Text style={styles.rht}>4 hours</Text>
            </View>

            <View style={styles.itemCont}>
              <Text style={styles.lft}>Hours</Text>
              <Text style={styles.rht}>09:00AM - 01:00PM</Text>
            </View>
          </View>

          <View
            style={{
              margin: 10,
              paddingHorizontal: 15,
              paddingTop: 10,
              backgroundColor: 'white',
              borderRadius: 10,
              elevation: 1,
            }}>
            <View style={styles.itemCont}>
              <Text style={styles.lft}>Amount</Text>
              <Text style={styles.rht}>Rs 60.00</Text>
            </View>

            <View style={styles.itemCont}>
              <Text style={styles.lft}>Taxes & Fees(10%)</Text>
              <Text style={styles.rht}>Rs 0.8</Text>
            </View>

            <View
              style={{
                width: '100%',
                height: 1.5,
                backgroundColor: '#EEEEEE',
                borderRadius: 10,
                marginBottom: 10,
              }}
            />

            <View style={styles.itemCont}>
              <Text style={styles.lft}>Total</Text>
              <Text style={styles.rht}>Rs 60.08</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
        onPress={()=>{
          this.props.navigation.navigate("Ticket")
        }}
          style={{
            backgroundColor: '#F0A936',
            padding: 10,
            marginHorizontal: 10,
            borderRadius: 10,
            elevation: 2,
            marginBottom:20
          }}>
          <Text
            style={{
              color: '#B01432',
              fontSize: 18,
              fontWeight: '700',
              letterSpacing: 0.17,
              textAlign: 'center',
            }}>
            Confirm Payment
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
    backgroundColor: '#FDFAE7',
    flex: 1,
    justifyContent: 'space-between',
  },
  lft: {
    color: '#616161',
    fontWeight: '600',
  },
  rht: {
    justifyContent: 'flex-end',
    color: 'black',
    fontWeight: '600',
  },
  itemCont: {
    // backgroundColor:"red",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
