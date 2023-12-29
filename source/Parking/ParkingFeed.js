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
} from 'react-native';
import {Dimensions} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
import SearchBar from '../Components/SearchBar';

import parkingData from './data';
import {SafeAreaView} from 'react-native-safe-area-context';

function ParkingCard({item, navigation}) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ModalTester');
      }}
      style={{
        backgroundColor: 'white',
        marginTop: 10,
        flexDirection: 'row',
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 10,
        elevation: 2,
      }}>
      <ImageBackground
        source={item.uri} // Replace with actual image source
        style={styles.image}
        imageStyle={{borderRadius: 10}}>
        <View
          style={{
            justifyContent: 'flex-end',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: 'black',
              backgroundColor: 'white',
              padding: 2,
              borderRadius: 5,
              marginBottom: 5,
              marginRight: 5,
              fontSize: 12,
              fontWeight: '700',
              paddingHorizontal: 4,
            }}>
            {item.charges}
          </Text>
        </View>
      </ImageBackground>

      <View style={{flex: 1, marginRight: 10}}>
        <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
          {item.name}
        </Text>
        {/* <Text style={{color:"black"}}>{item.address.length > 33 ? item.address.slice(0,30).trim() : null}</Text> */}
        <Text style={{color: 'black'}}>{item.address}</Text>
        <Text style={{color: 'black'}}>Distance: 1.5 miles </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'black'}}>Spots Available: </Text>
          <Text style={{color: 'darkgreen', fontWeight: '700'}}>
            {item.availableSpots}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, {marginRight: 5}]}>
            <Text style={styles.buttonText}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Directions</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default class ParkingFeed extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#FDFAE7',}}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#FDFAE7'} />
        <SearchBar onBackPress={() => {this.props.navigation.goBack()}} onSearchPress={() => {}} />
        <FlatList
          data={parkingData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={item => (
            <ParkingCard {...item} navigation={this.props.navigation} />
          )}
          style={{backgroundColor: '#FDFAE7',}}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    margin: 10,
    // padding: 10,
    backgroundColor: 'lightyellow',
    borderRadius: 10,
    elevation: 3,
    // flex: 1,
    marginTop: 10,
    // flexWrap: 'wrap',
    // width:winWidth/2
  },
  image: {
    aspectRatio: 1,
    borderRadius: 10,
    marginRight: 10,
    width: 120,
    height: 120,
    justifyContent: 'flex-end',
    // marginHorizontal: 10,
  },
  cardDetails: {
    // flex: 0.7,
    // backgroundColor: 'red',
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    // marginBottom: 2,
    color: 'black',
  },
  location: {
    fontSize: 14,
    // marginBottom: 5,
    color: 'black',
  },
  distance: {
    fontSize: 14,
    // marginBottom: 5,
    color: 'black',
  },
  availability: {
    fontSize: 14,
    marginBottom: 10,
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    padding: 7,
    borderRadius: 10,
    backgroundColor: '#B01432',
    // marginRight: 5,
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 12,
  },
});
