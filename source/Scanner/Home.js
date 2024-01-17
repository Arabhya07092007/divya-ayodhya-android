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
    SafeAreaView,
    Dimensions,
} from 'react-native';


export default function Home({ navigation, category }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FDFAE7', justifyContent: "space-between" }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'#FDFAE7'} />


            <View style={{ marginHorizontal: 20, marginTop: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: "500", marginBottom: 20 }}>Today's Status</Text>

                <View style={{
                    backgroundColor: "pink", borderRadius: 10, flexDirection: 'row', padding: 20, shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.15,
                    shadowRadius: 4,
                    elevation: 5,
                }}>


                    <View style={{ width: "50%", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: 20, fontWeight: "600" }}>Entry Scan</Text>
                        <Text style={{ marginTop: 20, fontSize: 16, fontWeight: "500" }}>132</Text>
                    </View>

                    <View style={{ width: "50%", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: 20, fontWeight: "600" }}>Exit Scan</Text>
                        <Text style={{ marginTop: 20, fontSize: 16, fontWeight: "500" }}>109</Text>
                    </View>
                </View>




            </View>

            <View style={{ backgroundColor: "red", borderTopRightRadius: 120, borderTopLeftRadius: 120, paddingBottom: 40 }}>

                <TouchableOpacity onPress={() => { navigation.navigate("Scanner") }} style={{
                    alignSelf: "center", backgroundColor: "white", borderRadius: 50, padding: 10, shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    elevation: 5,
                    marginTop: -40
                }}>
                    <Image source={{ uri: "https://t3.ftcdn.net/jpg/02/23/88/58/360_F_223885881_Zotk7yyvWJDvq6iWq2A9XU60iVJEnrzC.jpg" }} style={{ width: 60, height: 60, borderRadius: 20 }} />
                </TouchableOpacity>

                <Text style={{ alignSelf: "center", marginTop: 10, fontSize: 20, fontWeight: "500", color: "white" }}>Tap to Scan Ticket</Text>
            </View>



        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor: '#FDFAE7',
    },
});
