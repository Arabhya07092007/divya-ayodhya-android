import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity
} from 'react-native';
import Caraosal from '../Components/Caraosel';
import Item from '../Components/Items';
import Icon, {Icons} from '../Components/Icons'
import { ScrollView } from 'react-native-gesture-handler';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          source={require('../Assests/background.png')}
          style={styles.cont}>
          <StatusBar
            barStyle={'dark-content'}
            backgroundColor={'#FFFEDE'}
          />
          <View style={{flexDirection: 'row', marginTop: 20, justifyContent:"space-between"}}>
            <View style={{flexDirection:'row'}}><Text style={{color: 'black', fontSize: 20, fontWeight: '700'}}>
              Hey Vashudev{' '}
            </Text>
            <Image
              source={require('../Assests/wave.png')}
              style={{width: 30, height: 30}}
            /></View>

            <View style={{flexDirection:"row"}}>
            <TouchableOpacity >
                <Icon
                  type={Icons.Feather}
                  name={'search'}
                  color="black"
                  size={27}
                />
              </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:10}}>
                <Icon
                  type={Icons.Ionicons}
                  name={'notifications-outline'}
                  color="black"
                  size={28}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Caraosal />

          <View style={styles.categories}>
            <Text style={styles.heading}>Categories</Text>

            <View style={styles.itemSuperCont}>
              <Item
                navigation={this.props.navigation}
                itemText={'Ram Mandir'}
                imgSource={require('../Assests/icon1.png')}
              />
              <Item
                navigation={this.props.navigation}
                itemText={'Tourist Places'}
                imgSource={require('../Assests/icon2.png')}
              />
              <Item
                navigation={this.props.navigation}
                itemText={'Tickets'}
                imgSource={require('../Assests/icon3.png')}
              />
              <Item
                navigation={this.props.navigation}
                itemText={'Parking Near You'}
                imgSource={require('../Assests/icon4.png')}
              />
            </View>

            <View style={[styles.itemSuperCont, {marginVertical: 5}]}>
              <Item
                navigation={this.props.navigation}
                itemText={'E-Bus'}
                imgSource={require('../Assests/icon5.png')}
              />
              <Item
                navigation={this.props.navigation}
                itemText={'Wheel Chair'}
                imgSource={require('../Assests/icon6.png')}
              />
              <Item
                navigation={this.props.navigation}
                itemText={'Trips'}
                imgSource={require('../Assests/icon7.png')}
              />
              <Item
                navigation={this.props.navigation}
                itemText={'Hotels'}
                imgSource={require('../Assests/icon8.png')}
              />
            </View>

            <View style={styles.itemSuperCont}>
              <Item
                navigation={this.props.navigation}
                itemText={'Emergency'}
                imgSource={require('../Assests/icon9.png')}
              />
              <Item
                navigation={this.props.navigation}
                itemText={'Events'}
                imgSource={require('../Assests/icon10.png')}
              />
              <Item
                navigation={this.props.navigation}
                itemText={'Lounge'}
                imgSource={require('../Assests/icon11.png')}
              />
              <Item
                navigation={this.props.navigation}
                itemText={'History'}
                imgSource={require('../Assests/icon12.png')}
              />
            </View>
          </View>

          <View style={styles.recommendations}>

          <Text style={styles.heading}>Recommendations For You</Text>

            <ScrollView horizontal={true} style={{marginHorizontal:-20, paddingLeft:18, paddingRight:50}}>
              
            <View style={styles.rmItem}>
              <Text style={{color:"#B01432", fontWeight:"600"}}>Opal Tower</Text>
              <Text style={{color:'black', fontWeight:"700", fontSize:16}}>Ram Mandir Parking</Text>
              <Text style={{color:'#B01432', fontWeight:"700", marginTop:5}}>15 car spots available</Text>
            </View>

            <View style={styles.rmItem}>
              <Text style={{color:"#B01432", fontWeight:"600"}}>Opal Tower</Text>
              <Text style={{color:'black', fontWeight:"700", fontSize:16}}>Hanuman Parking complex</Text>
              <Text style={{color:'#B01432', fontWeight:"700", marginTop:5}}>15 car spots available</Text>
            </View>
            </ScrollView>

          </View>


        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#FDFAE7',
  },
  heading: {
    color: '#411609',
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 10,
  },
  itemSuperCont: {
    // backgroundColor:'pink',
    flexWrap: 'wrap',
    flexDirection: 'row',
    // rowGap:10,
    // columnGap:10,
    justifyContent: 'space-between',
  },
  rmItem:{
    backgroundColor:"#F7CC2B",
    borderRadius:20,
    padding:10,
    paddingHorizontal:20,
    width:250,
    elevation:1,
    marginBottom:5,
    marginLeft:3,
    marginRight:10
  }
});
