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
    ScrollView
} from 'react-native';
import Modal from 'react-native-modal';
import Icon, { Icons } from '../Components/Icons';
import { Dimensions } from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
import data from '../Database/TouristfeedData';

export default function TouristPlace({ navigation, route }) {
    const { item } = route.params;
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FDFAE7" }}>
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

            <View style={{ width: winWidth, }}>
                <Image
                    source={item.uri2}
                    style={Styles.cmplx}
                />
            </View>

            <ScrollView style={{ flex: 1, backgroundColor: '#FDFAE7', paddingTop: 10, marginHorizontal: 10 }}>
                <Text style={{ color: 'black', fontSize: 18, fontWeight: '600' }}>
                    {item.name}
                </Text>
                <Text style={{ color: 'black', fontSize: 14, fontWeight: '500' }}>
                    {item.description}
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}


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

        height: 260, width: "auto", resizeMode: "cover",
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

