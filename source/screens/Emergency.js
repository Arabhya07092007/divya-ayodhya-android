import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    ImageBackground,
    Image,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
} from 'react-native';
import Icon, { Icons } from '../Components/Icons';
import EmContact from '../Components/EmContact';
import LostFound from '../Components/lstFound';

export default function Emergency() {
    const [name, setName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [address, setAddress] = useState('');
    const [complaint, setComplaint] = useState('');

    return (
        <SafeAreaView style={styles.cont}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'#FFFEDE'} />

            <View
                style={{
                    flexDirection: 'row',
                    marginTop: 20,
                    justifyContent: 'space-between',
                }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ marginRight: 10 }}>
                        <Icon
                            type={Icons.Ionicons}
                            name={'arrow-back-outline'}
                            color="black"
                            size={28}
                        />
                    </TouchableOpacity>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: '700' }}>
                        Emergency
                    </Text>
                </View>

                <TouchableOpacity style={{ marginLeft: 10 }}>
                    <Icon
                        type={Icons.Ionicons}
                        name={'notifications-outline'}
                        color="black"
                        size={28}
                    />
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View>
                    <View style={{ marginTop: 10 }}>
                        <EmContact
                            text={'Help Desk'}
                            number={'+91 123 456 7890'}
                            backgroundColor="#FFFEDE"
                        />
                        <EmContact
                            text={'Ambulance Helpline No.'}
                            number={'+91 123 456 7890'}
                            backgroundColor="rgba(251, 135, 28, 0.50)"
                        />
                        <EmContact
                            text={'Women Helpline No.'}
                            number={'+91 123 456 7890'}
                            backgroundColor="#FFFEDE"
                        />
                        <EmContact
                            text={'District Helpline No.'}
                            number={'+91 123 456 7890'}
                            backgroundColor="rgba(251, 135, 28, 0.50)"
                        />
                    </View>
                </View>

                <View style={{ flex: 1, justifyContent: 'center', marginTop: 20, marginBottom: 20 }}>
                    <View
                        style={{
                            backgroundColor: 'white',
                            borderRadius: 10,
                            borderWidth: 1.5,
                            borderColor: '#d1cfcf',
                            elevation: 1,
                            // marginBottom: 20
                        }}>
                        <View style={{}}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text
                                    style={{
                                        backgroundColor: 'white',
                                        color: 'black',
                                        padding: 5,
                                        top: 12,
                                        zIndex: 1000,
                                        marginLeft: 20,
                                        fontSize: 14,
                                    }}>
                                    Name
                                </Text>
                                <View style={{ flex: 1 }}></View>
                            </View>
                            <TextInput
                                style={{
                                    borderWidth: 1.2,
                                    padding: 10,
                                    borderRadius: 10,
                                    fontWeight: '500',
                                    fontSize: 15,
                                    marginHorizontal: 10,
                                }}
                                placeholder="Enter Your Name"
                                placeholderTextColor="#888"
                                value={name}
                                onChangeText={(text) => setName(text)}
                            />
                        </View>

                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text
                                    style={{
                                        backgroundColor: 'white',
                                        color: 'black',
                                        padding: 5,
                                        top: 12,
                                        zIndex: 1000,
                                        marginLeft: 20,
                                        fontSize: 14,
                                    }}>
                                    Phone Number
                                </Text>
                                <View style={{ flex: 1 }}></View>
                            </View>
                            <TextInput
                                style={{
                                    borderWidth: 1.2,
                                    padding: 10,
                                    borderRadius: 10,
                                    fontWeight: '500',
                                    fontSize: 15,
                                    marginHorizontal: 10,
                                }}
                                placeholder="Enter Your Phone Number"
                                placeholderTextColor="#888"
                                value={phoneNo}
                                onChangeText={(text) => setPhoneNo(text)}
                            />
                        </View>

                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text
                                    style={{
                                        backgroundColor: 'white',
                                        color: 'black',
                                        padding: 5,
                                        top: 12,
                                        zIndex: 1000,
                                        marginLeft: 20,
                                        fontSize: 14,
                                    }}>
                                    Address
                                </Text>
                                <View style={{ flex: 1 }}></View>
                            </View>
                            <TextInput
                                style={{
                                    borderWidth: 1.2,
                                    padding: 10,
                                    borderRadius: 10,
                                    fontWeight: '500',
                                    fontSize: 15,
                                    marginHorizontal: 10,
                                }}
                                placeholder="Enter Your Address"
                                placeholderTextColor="#888"
                                value={address}
                                onChangeText={(text) => setAddress(text)}
                            />
                        </View>

                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text
                                    style={{
                                        backgroundColor: 'white',
                                        color: 'black',
                                        padding: 5,
                                        top: 12,
                                        zIndex: 1000,
                                        marginLeft: 20,
                                        fontSize: 14,
                                    }}>
                                    Complaint
                                </Text>
                                <View style={{ flex: 1 }}></View>
                            </View>
                            <TextInput
                                style={{
                                    borderWidth: 1.2,
                                    padding: 10,
                                    borderRadius: 10,
                                    fontWeight: '500',
                                    fontSize: 15,
                                    marginHorizontal: 10,
                                    color: '#888',
                                }}
                                placeholder="Enter Your Detailed complaint with place 
and time "
                                placeholderTextColor="#888"
                                value={complaint}
                                onChangeText={(text) => setComplaint(text)}
                            />
                        </View>

                        <View style={{ marginVertical: 15 }}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#B01432',
                                    width: 200,
                                    padding: 10,
                                    alignSelf: 'center',
                                    borderRadius: 10,
                                    elevation: 1,
                                }}>
                                <Text
                                    style={{
                                        color: 'white',
                                        fontSize: 14,
                                        alignSelf: 'center',
                                        fontWeight: '500',
                                    }}>
                                    Submit
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#FDFAE7',
    },
});
