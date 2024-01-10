import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Home, Temple, Others, Food } from './SvgIcon'

const IconsCheck = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: "black" }}>IconsCheck</Text>
            {/* <Home color="#B01432" /> */}
            <Temple />
            <Others />
            <Food />
        </View>
    )
}

export default IconsCheck;

const styles = StyleSheet.create({})