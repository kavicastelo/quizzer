import React from 'react';
import {Image, TouchableOpacity, Text, View, StyleSheet} from "react-native";
import {StatusBar} from "expo-status-bar";
import Title from "../components/title";

function Home({navigation}) {
    return (
        <View style={styles.bannerContainer}>
            <Title/>
            <View>
                <Image
                    source={{uri: 'https://img.freepik.com/free-photo/funny-3d-illustration-cartoon-teenage-girl_183364-80283.jpg?w=740&t=st=1680428517~exp=1680429117~hmac=ebbbf01e8207ecfb1971fe69aa3f4ecfe3fc2fabbd272a1054a4be7135a96470'}}
                style={styles.banner} resizeMode="contain"/>
            </View>
            <TouchableOpacity onPress={()=>{navigation.navigate("Quiz")}}>
                <Text>Start</Text>
            </TouchableOpacity>
            <StatusBar style="auto"/>
        </View>
    );
}

export default Home;

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