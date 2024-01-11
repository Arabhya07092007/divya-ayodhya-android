import React, { useEffect, useState } from 'react';

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
import { Dimensions } from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
import SearchBar from '../Components/SearchBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import database from '@react-native-firebase/database';
import Icon, { Icons } from '../Components/Icons';
import { TouristTemple } from '../SvgIcons/SvgIcon';

export default function Touristfeed({ navigation }) {
    const [data, setData] = React.useState([]);

    useEffect(() => {
        database()
            .ref('/TouristPlaces/temples')
            .on('value', (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    setData(Object.values(data));
                    console.log(Object.values(data).length);
                }
            })

    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FDFAE7' }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'#FDFAE7'} />
            <SearchBar
                onBackPress={() => {
                    navigation.goBack();
                }}
                onSearchPress={() => { }}
            />

            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(item) => <TouristCard {...item} navigation={navigation} />}
                style={{ backgroundColor: '#FDFAE7', paddingTop: 10 }}
            />
        </SafeAreaView>
    );
}

function TouristCard({ item, navigation }) {
    console.log(item.name);
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('TouristPlace', { item: item });
            }}
            style={{
                backgroundColor: 'white',
                marginBottom: 20,
                marginHorizontal: 10,
                // padding: 10,
                borderRadius: 10,
                elevation: 2,
            }}>
            <Image
                source={{ uri: item.images[0] }}
                style={{
                    height: 160,
                    width: 'auto',
                    resizeMode: 'cover',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                }}
            />

            <View style={{ padding: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#4B5563', fontSize: 16, fontWeight: '600' }}>
                        {item.name}
                    </Text>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 5,
                    }}>
                    <Image
                        source={require('../Assests/locationIcon.png')}
                        style={{ width: 15, height: 15 }}
                    />
                    <Text
                        style={{
                            color: '#6B7280',
                            fontSize: 14,
                            fontWeight: '400',
                            marginLeft: 3,
                        }}>
                        {item.address}
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: '#6B7280', fontSize: 14, fontWeight: '400' }}>
                        {item.ratings}
                    </Text>
                    <Image
                        source={require('../Assests/stars.png')}
                        style={{ width: 15, height: 15, marginLeft: 10 }}
                    />
                    <Image
                        source={require('../Assests/stars.png')}
                        style={{ width: 15, height: 15, marginLeft: 5 }}
                    />
                    <Image
                        source={require('../Assests/stars.png')}
                        style={{ width: 15, height: 15, marginLeft: 5 }}
                    />
                    <Image
                        source={require('../Assests/stars.png')}
                        style={{ width: 15, height: 15, marginLeft: 5 }}
                    />
                    <Image
                        source={require('../Assests/stars.png')}
                        style={{ width: 15, height: 15, marginLeft: 5 }}
                    />
                    <Text
                        style={{
                            color: '#6B7280',
                            fontSize: 14,
                            fontWeight: '400',
                            marginLeft: 10,
                        }}>
                        {item.reviews} reviews
                    </Text>
                </View>

                <View
                    style={{
                        height: 1.5,
                        width: 'auto',
                        backgroundColor: '#E5E7EB',
                        marginTop: 10,
                    }}
                />

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 10,
                    }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={require('../Assests/routing.png')}
                            style={{ width: 18, height: 18, marginRight: 5 }}
                        />
                        <Text style={{ color: '#6B7280', fontSize: 14, fontWeight: '400' }}>
                            1.4Kms away{' '}
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <TouristTemple color="#9CA3AF" />
                        <Text
                            style={{
                                color: '#6B7280',
                                fontSize: 14,
                                fontWeight: '400',
                                marginLeft: 5,
                            }}>
                            Temple
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#FDFAE7',
    },
});
