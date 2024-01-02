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
import { Dimensions } from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
import SearchBar from '../Components/SearchBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import database from '@react-native-firebase/database';
import data from '../Database/TouristfeedData';
import Icon, { Icons } from '../Components/Icons';

export default function Touristfeed({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FDFAE7', }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'#FDFAE7'} />
            <SearchBar onBackPress={() => { navigation.goBack() }} onSearchPress={() => { }} />

            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={item => (
                    <TouristCard {...item} navigation={navigation} />
                )}
                style={{ backgroundColor: '#FDFAE7', paddingTop: 10 }}
            />

        </SafeAreaView>
    );
}

function TouristCard({ item, navigation }) {
    return (
        <TouchableOpacity onPress={() => { navigation.navigate("TouristPlace", { item: item }) }} style={{
            backgroundColor: 'white',
            marginBottom: 20,
            marginHorizontal: 10,
            // padding: 10,
            borderRadius: 10,
            elevation: 2,
        }}>

            <Image source={item.uri} style={{ height: 160, width: "auto", resizeMode: "cover", borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />

            <View style={{ padding: 10 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ color: '#4B5563', fontSize: 16, fontWeight: '600' }}>
                        {item.name}
                    </Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image source={require("../Assests/routing.png")} style={{ width: 18, height: 18, marginRight: 5 }} />
                        <Text style={{ color: '#4B5563', fontSize: 14, fontWeight: '600', }}>{item.disTime}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: "row", alignItems: 'center', marginVertical: 5 }}>

                    <Text style={{ color: '#4B5563', fontSize: 14, fontWeight: '600' }}>
                        {item.address}</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ color: '#4B5563', fontSize: 14, fontWeight: '600' }}>5.0</Text>
                    <Image source={require("../Assests/stars.png")} style={{ width: 15, height: 15, marginLeft: 10 }} />
                    <Image source={require("../Assests/stars.png")} style={{ width: 15, height: 15, marginLeft: 5 }} />
                    <Image source={require("../Assests/stars.png")} style={{ width: 15, height: 15, marginLeft: 5 }} />
                    <Image source={require("../Assests/stars.png")} style={{ width: 15, height: 15, marginLeft: 5 }} />
                    <Image source={require("../Assests/stars.png")} style={{ width: 15, height: 15, marginLeft: 5 }} />
                    <Text style={{ color: '#4B5563', fontSize: 14, fontWeight: '600', marginLeft: 10 }}>(128k reviews)</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}





const styles = StyleSheet.create({
    cont: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#FDFAE7',
    }
})
