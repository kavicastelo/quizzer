import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import {StatusBar} from "expo-status-bar";

function Result(navigation) {
    return (
        <View>
            <View>
                <Text>result</Text>
            </View>
            <View style={styles.bannerContainer}>
                <Image
                    source={require('../assets/imgs/home.png')}
                    style={styles.banner} resizeMode="contain"/>
            </View>
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                    <Text>Home</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

export default Result;

const styles = StyleSheet.create({
    banner:{
        width:300,
        height:300
    },
    bannerContainer:{
        justifyContent:"center",
        alignItems:"center"
    }
})