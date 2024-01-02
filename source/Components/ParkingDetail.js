import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Stylesheet,
  ImageBackground,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { Dimensions } from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
import Icon, { Icons } from './Icons';


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

export default function PrkDCont({ data,onPress }) {
  console.log(data.images)
  return (
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
        

        onPress={onPress}
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
  );
}

const Styles = Stylesheet.create({
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
