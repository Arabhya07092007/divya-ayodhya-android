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
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';
import Icon, { Icons } from '../Components/Icons';
import { ScrollView } from 'react-native-gesture-handler';
import VNumber from '../Components/Vnumber';
import { Dimensions } from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;


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

function renderItem({ item }) {
  return (
    <View style={{ width: winWidth, }}>
      <Image
        source={{
          uri: item,
        }}
        style={Styles.cmplx}
      />

    </View>
  );
}

function TmSlotCont({ day, date, item }) {

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

function ModalTester({ navigation, route }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const { parkingComplex } = route.params;
  const data = parkingComplex;

  const [vehicleNo, setVehicleNo] = useState('UP 42 AD 0007');
  const [vehicleType, setVehicleType] = useState('four wheeler');
  const [date, setDate] = useState('01 January, 2024');
  const [slot, setSlot] = useState('09:00PM - 11:00PM');
  const [amount, setAmount] = useState(100);
  const [name, setName] = useState('Vashudev');
  const [phoneNo, setPhoneNo] = useState('+91 123 456 7890');
  const [startTime, setStartTime] = useState('1234567890');
  const [endTime, setEndTime] = useState('1234567890');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  console.log("fetching parking details");
  console.log(parkingComplex);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FDFAE7'} />
      <TouchableOpacity
        style={styles.backdrop}
        onPress={() => navigation.goBack()}>
        <Icon
          type={Icons.Ionicons}
          name={'arrow-back-outline'}
          color="#411609"
          size={25}
        />
      </TouchableOpacity>
      {/* <PrkDCont onPress={toggleModal} data={parkingComplex} /> */}

      <View style={Styles.cont}>
        <View>
          <FlatList
            data={data.images}
            renderItem={renderItem}
            keyExtractor={(item) => item.toString()}
            horizontal={true}
            pagingEnabled={true}
          />

          <View style={Styles.indicators}>
            <View style={Styles.circles} />
            <View style={Styles.circles} />
            <View style={Styles.circles} />
            <View style={Styles.circles} />
          </View>

          <View style={{ marginHorizontal: 15 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text style={Styles.prkName}>{data.name}</Text>
              <TouchableOpacity>
                <Icon
                  type={Icons.Ionicons}
                  name={'bookmark'}
                  color="#f1781e"
                  size={27}
                />
              </TouchableOpacity>
            </View>
            <Text style={Styles.txt1}>{data.address}</Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                marginBottom: 10,
              }}>
              <View style={{ flexDirection: 'row' }}>
                <Icon
                  type={Icons.Ionicons}
                  name={'car-outline'}
                  color="white"
                  size={27}
                  style={{
                    backgroundColor: '#f1781e',
                    borderRadius: 5,
                    paddingHorizontal: 1,
                    marginRight: 5,
                  }}
                />
                <View
                  style={{
                    borderWidth: 2,
                    borderColor: 'green',
                    justifyContent: 'center',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      color: 'green',
                      paddingHorizontal: 5,
                    }}>
                    {data.availableSlots}
                  </Text>
                </View>
                <View style={{ justifyContent: 'center' }}>
                  <Text
                    style={[Styles.txt1, { color: 'green', fontWeight: '600' }]}>
                    {' '}
                    Available Spots
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <Icon
                  type={Icons.MaterialIcons}
                  name={'route'}
                  color="white"
                  size={27}
                  style={{
                    backgroundColor: '#f1781e',
                    borderRadius: 5,
                    paddingHorizontal: 1,
                    marginRight: 5,
                  }}
                />
                <View style={{ justifyContent: 'center' }}>
                  <Text style={Styles.txt1}>4.2 km away</Text>
                </View>
              </View>
            </View>
          </View>

          {/*  */}

          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#F4F4F4',
              // backgroundColor:'red',
              justifyContent: 'space-between',
              marginTop: 10,
              paddingVertical: 10,
              paddingHorizontal: 15,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Icon
                type={Icons.Ionicons}
                name={'call-outline'}
                size={22}
                color={'white'}
                style={{
                  backgroundColor: '#f1781e',
                  borderRadius: 50,
                  padding: 5,
                  marginRight: 5,
                }}
              />
              <View style={{ justifyContent: 'center' }}>
                <Text
                  style={[Styles.txt1, { color: '#f1781e', fontWeight: '600' }]}>
                  Call
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Icon
                type={Icons.MaterialIcons}
                name={'directions'}
                size={22}
                style={{
                  backgroundColor: '#f1781e',
                  borderRadius: 50,
                  padding: 5,
                  marginRight: 5,
                }}
                color={'white'}
              />
              <View style={{ justifyContent: 'center' }}>
                <Text
                  style={[Styles.txt1, { color: '#f1781e', fontWeight: '600' }]}>
                  Directions
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Icon
                type={Icons.Ionicons}
                name={'share-social-outline'}
                size={22}
                style={{
                  backgroundColor: '#f1781e',
                  borderRadius: 100,
                  padding: 5,
                  marginRight: 5,
                }}
                color={'white'}
              />
              <View style={{ justifyContent: 'center' }}>
                <Text
                  style={[Styles.txt1, { color: '#f1781e', fontWeight: '600' }]}>
                  Share
                </Text>
              </View>
            </View>
          </View>

          {/*  */}

          <View style={{ marginHorizontal: 15, marginTop: 10 }}>
            <Text style={[Styles.txt1, { fontWeight: '600' }]}>OPERATION</Text>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
              <View>
                {
                  data.openNow ? <Text style={[Styles.txt1, { fontWeight: '600', color: 'green' }]}>
                    Open Now •{' '}
                  </Text> : <Text style={[Styles.txt1, { fontWeight: '600', color: 'red' }]}>
                    Closed Now •{' '}
                  </Text>
                }
              </View>
              <Text
                style={[Styles.txt1, { fontWeight: '500', color: '#777777' }]}>
                10:00AM - 11:30PM
              </Text>
            </View>
          </View>

          {/*  */}


        </View>

        <TouchableOpacity


          onPress={toggleModal}
          style={{
            backgroundColor: '#F0A936',
            padding: 10,
            marginHorizontal: 10,
            borderRadius: 10,
            elevation: 1,
            marginBottom: 20,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: '700',
              letterSpacing: 0.17,
              textAlign: 'center',
            }}>
            Book
          </Text>
        </TouchableOpacity>


      </View>

      <Modal
        style={{
          marginHorizontal: 0,
          marginBottom: 0,
          marginTop: '40%',
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
                  color="black"
                  size={27}
                />
              </TouchableOpacity>
            </View>

            <View>


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
                navigation.navigate('ReviewSm', {
                  paymentData: {
                    vehicleNo: vehicleNo,
                    vehicleType: vehicleType,
                    date: date,
                    slot: slot,
                    amount: amount,
                    name: name,
                    phoneNo: phoneNo,
                    startTime: startTime,
                    endTime: endTime,
                    parkingComplex: parkingComplex
                  }
                });
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
    position: 'absolute',
    marginLeft: 10,
    marginTop: 10,
    zIndex: 1,
  },
});


const Styles = StyleSheet.create({
  cont: {
    backgroundColor: '#FDFAE7',
    flex: 1,
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
  },
  cmplx: {
    // width: winWidth,
    // height: 200,

    height: 235,
    resizeMode: 'cover',
  },
  prkName: {
    color: '#411609',
    fontSize: 18,
    fontWeight: '700',
  },
  txt1: {
    color: 'black',
    fontSize: 15,
    // marginTop:5
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