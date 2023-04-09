import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from "react-native";
import {StatusBar} from "expo-status-bar";

function Quiz({navigation}) {
    const [question,setQuestion]=useState();
    const [ques,setQues]=useState(0);
    const [option, setOption] = useState([]);

    const getQuiz = async ()=>{
        const url = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
        const res = await fetch(url);
        const data = await res.json();
        setQuestion(data.results);
        setOption( generateOptionsAndShuffle(data.results[0]) )
    }
    useEffect(()=>{
        getQuiz()
    },[]);

    const handleOnPressNext=()=>{
        setQues(ques+1);
        setOption( generateOptionsAndShuffle(question[ques+1]) )
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const generateOptionsAndShuffle=(_question)=>{
        const options = [..._question.incorrect_answers]
        options.push(_question.correct_answer)
        shuffleArray(options)
        return options
    }
    return (
        <View style={styles.container}>
            {question && <View style={styles.parent}>
                <View style={styles.top}>
                <Text style={styles.que}>Q. {decodeURIComponent( question[ques].question)}</Text>
            </View>
                <View style={styles.options}>
                <TouchableOpacity style={styles.optionWrapper}>
                <Text style={styles.opt}>{decodeURIComponent( option[0])}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionWrapper}>
                <Text style={styles.opt}>{decodeURIComponent( option[1])}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionWrapper}>
                <Text style={styles.opt}>{decodeURIComponent( option[2])}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionWrapper}>
                <Text style={styles.opt}>{decodeURIComponent( option[3])}</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.bottom}>
                <TouchableOpacity>
                <Text>SKIP</Text>
                </TouchableOpacity>
                    {ques !== 9 && <TouchableOpacity onPress={handleOnPressNext}>
                        <Text>NEXT</Text>
                    </TouchableOpacity>}
                    {ques === 9 && <TouchableOpacity onPress={handleOnPressNext}>
                        <Text>RESULTS</Text>
                    </TouchableOpacity>}
                </View>
            </View>}
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
    parent:{
        height:'100%'
    },
    top:{
        marginVertical:20
    },
    que:{
        fontSize:26,
        fontWeight:"bold"
    },
    options:{
        flex:1
    },
    optionWrapper:{
        paddingVertical:15,
        backgroundColor:'#1abc9c',
        width:'100%',
        padding:15,
        marginVertical:10,
        borderRadius:12
    },
    opt:{
        fontSize:22,
        color:'white'
    },
    bottom:{
        marginVertical:20,
        flexDirection:"row",
        justifyContent:"space-between"
    }
});
