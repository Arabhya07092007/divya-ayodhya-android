import React from 'react';
import { View, SafeAreaView, StatusBar, TouchableOpacity, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import Icon, { Icons } from '../Components/Icons';

function Hotels({ navigation, route }) {
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

            <WebView source={{ uri: "https://holyayodhya.com/" }} />
        </SafeAreaView>
    );
};

export default Hotels;


const styles = StyleSheet.create({
    backdrop: {
        backgroundColor: '#FDFAE7',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        width: 39,
        height: 39,
        position: 'absolute',
        marginLeft: 17,
        marginTop: 8,
        zIndex: 10000,
        borderWidth: 1,
        elevation: 1
    },

});