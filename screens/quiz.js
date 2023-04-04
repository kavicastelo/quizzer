import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from "react-native";
import {StatusBar} from "expo-status-bar";

function Quiz({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text>This is question</Text>
            </View>
            <View style={styles.options}>
                <TouchableOpacity>
                    <Text>option 1</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>option 2</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>option 3</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>option 4</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity>
                    <Text>SKIP</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>NEXT</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate("Result")}}>
                    <Text>END</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

export default Quiz;

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        padding:40
    },
    top:{
        marginVertical:20
    },
    options:{
        flex:1
    },
    bottom:{
        marginVertical:20,
        flexDirection:"row",
        justifyContent:"space-between"
    }
});
