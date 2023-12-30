import React, { useState } from 'react';
import {
  Button,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';
import PrkDCont from '../Components/ParkingDetail';
import Icon, { Icons } from '../Components/Icons';
import { ScrollView } from 'react-native-gesture-handler';
import VNumber from '../Components/Vnumber';


const timeSlot = [
  '06:00',
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
];

const calender = [
  { day: 'Su', date: '22', index: 0 },
  { day: 'Mo', date: '23', index: 1 },
  { day: 'Tu', date: '24', index: 2 },
  { day: 'We', date: '25', index: 3 },
  { day: 'Th', date: '26', index: 4 },
  { day: 'Fr', date: '27', index: 5 },
  { day: 'Sa', date: '28', index: 6 },
];

function TmSlotCont({ day, date, item }) {
  // console.log(item);

  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#F3F2F3',
        padding: 10,
        paddingHorizontal: 12,
        marginRight: 10,
        borderRadius: 5,
        elevation: 1,
        marginVertical: 5,
        // marginLeft:5
      }}>
      <Text style={{ color: '#777777' }}>{day}</Text>
      <Text style={{ color: '#060606', fontWeight: '700' }}>{date}</Text>
    </TouchableOpacity>
  );
}

function ModalTester({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FDFAE7'} />
      <TouchableOpacity
        style={styles.backdrop}
        onPress={() => this.props.navigation.goBack()}>
        <Icon
          type={Icons.Ionicons}
          name={'arrow-back-outline'}
          color="#411609"
          size={25}
        />
      </TouchableOpacity>
      <PrkDCont onPress={toggleModal} />

      <Modal
        style={{
          marginHorizontal: 0,
          marginBottom: 0,
          marginTop: '40%',
          // position:"absolute",
          // bottom:0,
          // flex:1
        }}
        isVisible={isModalVisible}
        hasBackdrop={true}>

        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              padding: 20,
            }}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: 'black', fontWeight: '600', fontSize: 18 }}>
                Multi Level Parking Complex
              </Text>
              <TouchableOpacity onPress={toggleModal}>
                <Icon
                  type={Icons.Ionicons}
                  name={'close-circle-outline'}
                  // name={'chevron-down-circle-outline'}
                  color="black"
                  size={27}
                />
              </TouchableOpacity>
            </View>

            <View>
              <VNumber
                onBackPress={() => {
                  this.props.navigation.goBack();
                }}
                onSearchPress={() => { }}
              />
            </View>
            <View>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 16,
                  color: '#0A0B0A',
                  marginTop: 10,
                  // marginBottom: 10,
                }}>
                Pick Date Slot
              </Text>
              <FlatList
                horizontal={true}
                contentContainerStyle={{ marginTop: 5, paddingLeft: 2 }}
                data={calender}
                renderItem={({ item }) => (
                  <TmSlotCont day={item.day} date={item.date} item={item} />
                )}
              />
            </View>

            <View>
              <View
                style={{
                  marginTop: 10,
                  marginBottom: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 16,
                    color: '#0A0B0A',
                  }}>
                  Pick Time Slot
                </Text>
                <Text
                  style={{
                    fontWeight: '700',
                    fontSize: 14,
                    color: '#060606',
                  }}>
                  Rs 20/hr
                </Text>
              </View>

              <ScrollView style={{ height: 90 }}>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    rowGap: 10,
                    columnGap: 10,
                  }}>
                  {timeSlot.map((slot, index) => (
                    <View
                      style={{
                        backgroundColor: '#F3F2F3',
                        padding: 10,
                        borderRadius: 5,
                        elevation: 1,
                      }}
                      key={index}>
                      <Text style={{ color: '#4D4C4D', fontWeight: '600' }}>
                        {slot}
                      </Text>
                    </View>
                  ))}
                </View>
              </ScrollView>
            </View>

            <View>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 16,
                  color: '#0A0B0A',
                  marginTop: 10,
                  marginBottom: 10,
                }}>
                Select Vehicle Type
              </Text>
              <View
                style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#F3F2F3',
                    borderRadius: 5,
                    elevation: 1,
                    padding: 5,
                    width: '48%',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../Assests/car2.png')}
                    style={{
                      width: 100,
                      height: 60,
                      resizeMode: 'center',
                      // backgroundColor:"lightgreen"
                    }}
                  />
                  <Text
                    style={{
                      color: 'black',
                      textAlign: 'center',
                      fontWeight: '600',
                    }}>
                    Four Wheeler
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#F3F2F3',
                    borderRadius: 5,
                    elevation: 1,
                    padding: 5,
                    width: '48%',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../Assests/bike.png')}
                    style={{
                      width: 90,
                      height: 60,
                      resizeMode: 'center',
                    }}
                  />
                  <Text
                    style={{
                      color: 'black',
                      textAlign: 'center',
                      fontWeight: '600',
                    }}>
                    Two Wheeler
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: 'black',
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              paddingHorizontal: 20,
              paddingTop: 20,
              flexDirection: 'row',
              // position:"absolute",
              // bottom:0

            }}>
            <View style={{ width: '50%' }}>
              <Text style={{ color: 'white', fontWeight: '700', fontSize: 18 }}>
                ₹108.08
              </Text>
              <Text style={{ fontWeight: '600' }}>Total Amount</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                toggleModal;
                navigation.navigate('ReviewSm');
              }}

              style={{
                backgroundColor: '#FEEF02',
                width: '50%',
                justifyContent: 'center',
                borderRadius: 20,
              }}>
              <Text
                style={{
                  color: 'black',
                  textAlign: 'center',
                  fontWeight: '700',
                  fontSize: 18,
                }}>
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

export default ModalTester;

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: '#feeed6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    width: 35,
    height: 35,
    // alignSelf:"center",
    // marginRight:5,
    // top:10,
    position: 'absolute',
    marginLeft: 10,
    marginTop: 10,
    zIndex: 1,
  },
});
