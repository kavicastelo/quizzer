import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import {StatusBar} from "expo-status-bar";

function Result({navigation, route}) {
    const {score} = route.params;
    let resultBanner = '';
    if (score<40){
        resultBanner =require('../assets/imgs/not good.png')
    }
    else if (score >40 && score <80){
        resultBanner =require('../assets/imgs/good.png')
    }
    else{
        resultBanner =require('../assets/imgs/awsome.png')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>RESULTS</Text>
            <Text style={styles.score}>{score}</Text>
            <View style={styles.bannerContainer}>
                <Image
                    source={resultBanner}
                    style={styles.banner} resizeMode="contain"/>
            </View>
            <TouchableOpacity onPress={()=>{navigation.navigate("Home")}} style={styles.btn}>
                <Text style={styles.btnTxt}>GO BACK HOME</Text>
            </TouchableOpacity>
            <StatusBar style="auto"/>
        </View>
    );
}

export default Result;

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
    },
    title:{
        fontSize:40,
        fontWeight:600,
        marginVertical:50
    },
    score:{
        fontSize:60,
        fontWeight:800
    }
})