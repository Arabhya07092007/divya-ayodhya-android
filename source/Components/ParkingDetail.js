import * as React from 'react';
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
import Icon, {Icons} from './Icons';

export default class PrkDCont extends React.Component {
  render() {
    return (
      <View style={styles.cont}>
        <View>
          <Image
            source={{
              uri: 'https://www.thenbs.com/-/media/uk/new-images/by-section/knowledge/knowledge-articles-hero/multi-storey-car-park.jpg',
            }}
            style={styles.cmplx}
          />

<View style={styles.indicators}>
          <View style={styles.circles} />
          <View style={styles.circles} />
          <View style={styles.circles} />
          <View style={styles.circles} />
        </View>

          <View style={{marginHorizontal: 15}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text style={styles.prkName}>Ram Mandir Parking</Text>
              <TouchableOpacity>
                <Icon
                  type={Icons.Ionicons}
                  name={'bookmark'}
                  color="#f1781e"
                  size={27}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.txt1}>Pratham Dwar Ram Mandir, Ayodhdya</Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                marginBottom: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
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
                    200
                  </Text>
                </View>
                <View style={{justifyContent: 'center'}}>
                  <Text
                    style={[styles.txt1, {color: 'green', fontWeight: '600'}]}>
                    {' '}
                    Available Spots
                  </Text>
                </View>
              </View>

              <View style={{flexDirection: 'row'}}>
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
                <View style={{justifyContent: 'center'}}>
                  <Text style={styles.txt1}>4.2 km away</Text>
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
            <View style={{flexDirection: 'row'}}>
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
              <View style={{justifyContent: 'center'}}>
                <Text
                  style={[styles.txt1, {color: '#f1781e', fontWeight: '600'}]}>
                  Call
                </Text>
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
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
              <View style={{justifyContent: 'center'}}>
                <Text
                  style={[styles.txt1, {color: '#f1781e', fontWeight: '600'}]}>
                  Directions
                </Text>
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
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
              <View style={{justifyContent: 'center'}}>
                <Text
                  style={[styles.txt1, {color: '#f1781e', fontWeight: '600'}]}>
                  Share
                </Text>
              </View>
            </View>
          </View>

          {/*  */}

          <View style={{marginHorizontal: 15, marginTop: 10}}>
            <Text style={[styles.txt1, {fontWeight: '600'}]}>OPERATION</Text>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Text style={[styles.txt1, {fontWeight: '600', color: 'green'}]}>
                Open Now •{' '}
              </Text>
              <Text
                style={[styles.txt1, {fontWeight: '500', color: '#777777'}]}>
                10:00AM - 11:30PM
              </Text>
            </View>
          </View>

          {/*  */}

          
        </View>

        <TouchableOpacity
          // onPress={() => {
          //   this.props.navigation.navigate('ReviewSm');
          // }}

          onPress={this.props.onPress}
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
}

const styles = StyleSheet.create({
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
