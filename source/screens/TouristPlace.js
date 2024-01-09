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
    ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';
import Icon, { Icons } from '../Components/Icons';
import { Dimensions } from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
import data from '../Database/TouristfeedData';

export default function TouristPlace({ navigation, route }) {
    const { item } = route.params;
    // const item = data[1];
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FDFAE7' }}>
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



            <View style={{ width: winWidth }}>
                <Image source={item.uri2} style={Styles.cmplx} />
            </View>

            <ScrollView style={{ paddingHorizontal: 10, paddingTop: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: 'black', fontSize: 20, fontWeight: '600' }}>
                            {item.name}
                        </Text>

                        <Text style={{ color: '#616161', fontSize: 16, fontWeight: '400' }}>
                            {/* Tulsi Nagar, Ayodhya, Uttar Pradesh */}
                            {item.address}
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: "center" }}>
                        <TouchableOpacity style={{}}>
                            <Icon
                                type={Icons.Ionicons}
                                name={'heart-outline'}
                                color="#B01432"
                                size={27}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: "space-between" }}>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            paddingHorizontal: 10,
                            paddingVertical: 7,
                            alignItems: 'center',
                            backgroundColor: '#B01432',
                            borderRadius: 20,
                            elevation: 1,
                        }}>
                        <Icon
                            type={Icons.Ionicons}
                            name={'navigate'}
                            color="white"
                            size={20}
                        />
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 14,
                                fontWeight: '400',
                                marginLeft: 2,
                            }}>
                            Direction
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            paddingHorizontal: 10,
                            paddingVertical: 5,
                            alignItems: 'center',
                            borderColor: '#B01432',
                            borderRadius: 20,
                            elevation: 1,
                            borderWidth: 1.5,
                            backgroundColor: '#FDFAE7',
                        }}>
                        <Icon
                            type={Icons.Feather}
                            name={'clock'}
                            color="#B01432"
                            size={20}
                        />
                        <Text
                            style={{
                                color: '#B01432',
                                fontSize: 14,
                                fontWeight: '400',
                                marginLeft: 5,
                            }}>
                            8AM - 10PM
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderColor: '#B01432',
                            borderRadius: 50,
                            elevation: 1,
                            borderWidth: 1.5,
                            backgroundColor: '#FDFAE7',
                            padding: 5
                        }}>
                        <Image source={require("../Assests/wheelchair.png")} style={{ width: 22, height: 22 }} />

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderColor: '#B01432',
                            borderRadius: 50,
                            elevation: 1,
                            borderWidth: 1.5,
                            backgroundColor: '#FDFAE7',
                            paddingHorizontal: 7,
                            paddingVertical: 5
                        }}>
                        <Image source={require("../Assests/parking.png")} style={{ width: 18, height: 18 }} />

                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: 'black', fontSize: 14, lineHeight: 19 }}>
                        {item.description}
                    </Text>
                </View>

            </ScrollView>

            {/* <ScrollView style={{ flex: 1, backgroundColor: '#FDFAE7', paddingTop: 10, marginHorizontal: 10 }}>
                <Text style={{ color: 'black', fontSize: 18, fontWeight: '600' }}>
                    {item.name}
                </Text>
                <Text style={{ color: 'black', fontSize: 14, fontWeight: '500' }}>
                    {item.description}
                </Text>
            </ScrollView> */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        backgroundColor: '#FDFAE7',
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

        height: 260,
        width: 'auto',
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
