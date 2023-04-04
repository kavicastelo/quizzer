import React from 'react';
import {Image, TouchableOpacity, Text, View, StyleSheet} from "react-native";
import {StatusBar} from "expo-status-bar";
import Title from "../components/title";

function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Title/>
            <View style={styles.bannerContainer}>
                <Image
                    source={require('../assets/imgs/home.png')}
                style={styles.banner} resizeMode="contain"/>
            </View>
            <TouchableOpacity onPress={()=>{navigation.navigate("Quiz")}} style={styles.btn}>
                <Text style={styles.btnTxt}>Start</Text>
            </TouchableOpacity>
            <StatusBar style="auto"/>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    banner:{
        width:'100%',
        height:'100%'
    },
    bannerContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        width:'100%'
    },
    container:{
        justifyContent:"center",
        alignItems:"center",
        padding:20,
        height:'100%'
    },
    btn:{
        width:'100%',
        padding:10,
        borderRadius:20,
        alignItems:"center",
        backgroundColor:'#3498db',
        marginBottom:20,
    },
    btnTxt:{
        color:'white',
        fontSize:26,
        fontWeight:400
    }
})