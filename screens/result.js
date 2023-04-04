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
                    source={{uri: 'https://img.freepik.com/free-photo/funny-3d-illustration-cartoon-teenage-girl_183364-80283.jpg?w=740&t=st=1680428517~exp=1680429117~hmac=ebbbf01e8207ecfb1971fe69aa3f4ecfe3fc2fabbd272a1054a4be7135a96470'}}
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