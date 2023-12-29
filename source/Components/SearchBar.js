import React from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Icon, {Icons} from './Icons';

const SearchBar = ({onBackPress, onSearchPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress}>
        <Icon
          type={Icons.Ionicons}
          name={'arrow-back-outline'}
          color="#333"
          size={27}
          style={{marginRight:10}}
        />
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Search location"
        placeholderTextColor="#888"
      />

      <TouchableOpacity onPress={onSearchPress}>
      <Icon
          type={Icons.Ionicons}
          name={'search-outline'}
          color="#333"
          size={27}
          style={{marginRight:10}}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 50,
    // paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 10,
    elevation:3
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

export default SearchBar;
