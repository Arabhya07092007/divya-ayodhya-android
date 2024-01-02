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
    ToastAndroid
} from 'react-native';
import Icon, { Icons } from '../Components/Icons';
import EmContact from '../Components/EmContact';
import { Button, Overlay } from 'react-native-elements';
import database from '@react-native-firebase/database';

export default function Emergency({ navigation }) {
    const [name, setName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [address, setAddress] = useState('');
    const [complaint, setComplaint] = useState('');
    const [visible, setVisible] = useState(false);
    const [uid, setUid] = useState('gegegee');

    const [valid, setValid] = useState(false);
    const [crName, setCrName] = useState(false);
    const [crPhoneNo, setCrPhoneNo] = useState(false);
    const [crAddress, setCrAddress] = useState(false);
    const [crComplaint, setCrComplaint] = useState(false);

    const showToast = () => {
        ToastAndroid.showWithGravity(
            'Enter details properly',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
        );
    };



    function pushComplaint(name, phoneNo, address, complaint) {

        const data = {
            name: name,
            phoneNo: phoneNo,
            address: address,
            complaint: complaint,
            uid: uid,
        }

        const newReference = database().ref('/Parking/complaints/').push();

        console.log('Auto generated key: ', newReference.key);

        newReference
            .set(data)
            .then(() => console.log('Data updated.'));

        setName('');
        setPhoneNo('');
        setAddress('');
        setComplaint('');


    }

    const toggleOverlay = () => {
        setVisible(!visible);
    };


    return (
        <SafeAreaView style={styles.cont}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'#FFFEDE'} />

            <View
                style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    justifyContent: 'space-between',
                    // backgroundColor: '#FFFEDE',
                }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.goBack()}>
                        <Icon
                            type={Icons.Feather}
                            name={'arrow-left'}
                            color="black"
                            size={28}
                        />
                    </TouchableOpacity>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: '600' }}>
                        Emergency
                    </Text>
                </View>


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

                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        marginTop: 10,
                        marginBottom: 20,
                    }}>

                    <Text style={{ fontSize: 16, fontWeight: '600', color: 'black', marginBottom: 10 }}>Register for lost and found</Text>
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
                                    style={[crName == true ? { color: 'red' } : { color: 'black' }, {
                                        backgroundColor: 'white',
                                        padding: 5,
                                        top: 12,
                                        zIndex: 1000,
                                        marginLeft: 20,
                                        fontSize: 14,
                                    }]}>
                                    Name
                                </Text>
                                <View style={{ flex: 1 }}></View>
                            </View>
                            <TextInput
                                style={[crName == true ? { borderColor: 'red' } : { borderColor: '#d1cfcf' }, {
                                    borderWidth: 1.2,
                                    padding: 10,
                                    borderRadius: 10,
                                    marginHorizontal: 10,
                                    color: 'black'
                                }]}
                                placeholder="Enter Your Name"
                                placeholderTextColor="#888"
                                value={name}
                                onChangeText={(text) => {
                                    setName(text);
                                    setCrName(false);
                                }}
                            />
                        </View>

                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text
                                    style={[crPhoneNo == true ? { color: 'red' } : { color: 'black' }, {
                                        backgroundColor: 'white',
                                        padding: 5,
                                        top: 12,
                                        zIndex: 1000,
                                        marginLeft: 20,
                                        fontSize: 14,
                                    }]}>
                                    Phone Number
                                </Text>
                                <View style={{ flex: 1 }}></View>
                            </View>
                            <TextInput
                                style={[crPhoneNo == true ? { borderColor: 'red' } : { borderColor: '#d1cfcf' }, {
                                    borderWidth: 1.2,
                                    padding: 10,
                                    borderRadius: 10,
                                    marginHorizontal: 10,
                                    color: 'black'
                                }]}
                                placeholder="Enter Your Phone Number"
                                placeholderTextColor="#888"
                                value={phoneNo}
                                onChangeText={(text) => { setPhoneNo(text); setCrPhoneNo(false); }}
                            />
                        </View>

                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text
                                    style={[crAddress == true ? { color: 'red' } : { color: 'black' }, {
                                        backgroundColor: 'white',
                                        padding: 5,
                                        top: 12,
                                        zIndex: 1000,
                                        marginLeft: 20,
                                        fontSize: 14,
                                    }]}>
                                    Address
                                </Text>
                                <View style={{ flex: 1 }}></View>
                            </View>
                            <TextInput
                                style={[crAddress == true ? { borderColor: 'red' } : { borderColor: '#d1cfcf' }, {
                                    borderWidth: 1.2,
                                    padding: 10,
                                    borderRadius: 10,
                                    marginHorizontal: 10,
                                    color: 'black'
                                }]}
                                placeholder="Enter Your Address"
                                placeholderTextColor="#888"
                                value={address}
                                onChangeText={(text) => { setAddress(text); setCrAddress(false); }}
                            />
                        </View>

                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text
                                    style={[crComplaint == true ? { color: 'red' } : { color: 'black' }, {
                                        backgroundColor: 'white',
                                        padding: 5,
                                        top: 12,
                                        zIndex: 1000,
                                        marginLeft: 20,
                                        fontSize: 14,
                                    }]}>
                                    Complaint
                                </Text>
                                <View style={{ flex: 1 }}></View>
                            </View>
                            <TextInput
                                style={[crComplaint == true ? { borderColor: 'red' } : { borderColor: '#d1cfcf' }, {
                                    borderWidth: 1.2,
                                    padding: 10,
                                    borderRadius: 10,
                                    marginHorizontal: 10,
                                    color: 'black'
                                }]}
                                placeholder="Enter Your Detailed complaint with place 
and time "
                                placeholderTextColor="#888"
                                value={complaint}
                                onChangeText={(text) => { setComplaint(text), setCrComplaint(false); }}
                            />
                        </View>

                        <View style={{ marginVertical: 15 }}>
                            <TouchableOpacity
                                // onPress={toggleOverlay}
                                onPress={() => {
                                    if (name !== '' && phoneNo !== '' && address !== '' && complaint !== '') {
                                        pushComplaint(name, phoneNo, address, complaint);
                                        toggleOverlay();
                                    } else {
                                        setValid(true);
                                        if (name === '') setCrName(true);
                                        if (phoneNo === '') setCrPhoneNo(true);
                                        if (address === '') setCrAddress(true);
                                        if (complaint === '') setCrComplaint(true);

                                        showToast();

                                    }
                                }}
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

            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                <View style={{ alignItems: "center", padding: 20 }}>
                    <Image
                        source={require('../Assests/Success.png')}
                        style={{ width: 157, height: 201 }}
                    />

                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: '700',
                            alignSelf: 'center',
                            marginTop: 20,
                            color: '#B01432',
                        }}>
                        Successful!
                    </Text>
                    <Text style={{ color: 'black' }}>
                        Your Complaint report is registered.
                    </Text>
                    <Text style={{ color: 'black' }}>
                        Help is on the way.
                    </Text>

                    <View style={{ marginTop: 20 }}>
                        <TouchableOpacity style={{ backgroundColor: "#F0A936", padding: 10, borderRadius: 10, elevation: 0.5, paddingHorizontal: 30 }}>
                            <Text style={{ color: "#B01432", fontWeight: "500", textAlign: 'center' }}>Track Progress</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={toggleOverlay} style={{ backgroundColor: "#FFFEDE", marginTop: 10, padding: 10, borderRadius: 10, paddingHorizontal: 30, borderWidth: 1, borderColor: "#F0A936" }}>
                            <Text style={{ color: "#B01432", fontWeight: "500", textAlign: 'center' }}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Overlay>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#FFFEDE',
    },
});
