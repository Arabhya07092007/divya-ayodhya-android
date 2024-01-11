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
    Linking
} from 'react-native';
import Modal from 'react-native-modal';
import Icon, { Icons } from '../Components/Icons';
import { Dimensions } from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

const desc = `Shri Ram Janmabhoomi Mandir in Ayodhya is an iconic and revered religious site that holds immense significance in Hinduism. This sacred complex is believed to be the birthplace of Lord Rama, a central figure in the Hindu epic, Ramayana. The temple is constructed at the spot where Lord Rama is believed to have been born.\n\nThe history of Shri Ram Janmabhoomi Mandir is intertwined with centuries of devotion and religious sentiment. The original structure at the site, believed to be a temple dedicated to Lord Rama, was allegedly demolished during the Mughal era. The Babri Masjid, a mosque, was subsequently constructed on the same spot. However, the site became a focal point of religious and historical controversy.\n\nIn a landmark legal decision in 2019, the Supreme Court of India granted permission for the construction of the Ram Mandir at the disputed site, affirming the faith and sentiments of millions of Hindus. The temple's design incorporates traditional Indian architectural styles, and its construction marks the culmination of a long-standing aspiration for a grand and magnificent structure dedicated to Lord Rama.\n\nThe Shri Ram Janmabhoomi Mandir is not only a place of worship but also a symbol of cultural reclamation and national unity. Pilgrims and visitors from across the globe come to Ayodhya to witness the construction and offer their prayers at this sacred site. The temple complex is expected to become a center for cultural and spiritual activities, promoting the teachings of Lord Rama and fostering a sense of harmony and unity.\n\nThe temple's architecture, intricate carvings, and spiritual ambiance create an atmosphere of reverence and devotion. It stands as a testament to the enduring faith and cultural heritage of the Hindu community. Shri Ram Janmabhoomi Mandir, with its historical significance and architectural grandeur, stands as a beacon of spiritual and national pride in Ayodhya.`

export default function RamMandir({ navigation }) {

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
                <Image source={{ uri: "https://static.theprint.in/wp-content/uploads/2020/08/Ram-Mandir2.jpg" }} style={Styles.cmplx} />
            </View>

            <ScrollView style={{ paddingHorizontal: 15, paddingTop: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: 'black', fontSize: 20, fontWeight: '600' }}>
                            Shri Ram Janmabhoomi
                        </Text>

                        <Text style={{ color: '#616161', fontSize: 16, fontWeight: '400' }}>
                            {/* Tulsi Nagar, Ayodhya, Uttar Pradesh */}
                            Sai Nagar, Ayodhya, Uttar Pradesh
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

                        onPress={() => navigation.navigate('Embed', { url: "https://www.google.com/maps/place/Shree+Ramjanmbhumi+Temple+Ayodhya/@26.7956458,82.1919609,17z/data=!3m1!4b1!4m6!3m5!1s0x399a07cd3079f0bf:0x5589e823b23ba9dc!8m2!3d26.795641!4d82.1945358!16s%2Fg%2F11rsrqqz02?entry=ttu" })}

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
                            7:00AM - 11:00AM
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

                <View>
                    <Text style={{ color: 'black', fontSize: 18, fontWeight: '600', marginTop: 10 }}>Pilgrim Services</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>


                        <TouchableOpacity onPress={() => navigation.navigate('Embed', { url: "https://online.srjbtkshetra.org/#/mobileVerification" })} style={{ backgroundColor: "#FFC538", padding: 5, borderRadius: 10, paddingHorizontal: 40, paddingVertical: 10, width: "47%", alignItems: "center" }}>
                            <Text style={{ color: "#B01432", fontSize: 16, fontWeight: "600" }}>Donation</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Embed', { url: "https://online.srjbtkshetra.org/#/aarti" })} style={{ backgroundColor: "#FFC538", padding: 5, borderRadius: 10, paddingHorizontal: 40, paddingVertical: 10, width: "47%", alignItems: "center" }}>
                            <Text style={{ color: "#B01432", fontSize: 16, fontWeight: "600" }}>Aarti Pass</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: 'black', fontSize: 18, fontWeight: '600', marginBottom: 10 }}>Description</Text>
                    <Text style={{ color: 'black', fontSize: 14, lineHeight: 19 }}>
                        {desc}
                    </Text>
                </View>

            </ScrollView>


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
