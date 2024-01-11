import React from 'react';
import { View, SafeAreaView, StatusBar, TouchableOpacity, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import Icon, { Icons } from '../Components/Icons';

function Embed({ navigation, route }) {
    const { url } = route.params;
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

            <WebView source={{ uri: url }} />
        </SafeAreaView>
    );
};

export default Embed;


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
        zIndex: 10000,
        borderWidth: 1,
        elevation: 1
    },

});