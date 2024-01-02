import * as React from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';

const images = [
  require('../Assests/b1.png'),
  require('../Assests/b2.png'),
  require('../Assests/b3.png'),
]

const colors = [
  'red',
  'green',
  'blue',
]

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example: Generate a random integer between 1 and 100
const randomNum = getRandomInt(1, 100);
console.log(randomNum);

function renderItem({ item }) {
  return (
    <View style={{ 
      // backgroundColor: colors[getRandomInt(0,2)],
       padding:5}}>
      <Image
      style={styles.banner_img}
      source={item}
    />
    </View>
  );
}


export default class Caraosal extends React.Component {
  render() {
    return (
      <View style={styles.cont}>
       


        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={(item) => item.toString()}
          horizontal={true}
          pagingEnabled={true}
        />

        <View style={styles.indicators}>
          <View style={styles.circles} />
          <View style={styles.circles} />
          <View style={styles.circles} />
          <View style={styles.circles} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
    // marginHorizontal: 10,
    marginTop: 20,
    // backgroundColor:"red"
  },
  banner_img: {
    // width: "100%",
    height: 150,
    borderRadius: 10,
    resizeMode: 'contain',
    width:310,
    // marginRight:10
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
