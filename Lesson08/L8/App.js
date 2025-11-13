import React, {useState} from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Alert, StyleSheet} from "react-native";
import Options from './Car.js';

const QuizApp = () => {
    const styles = StyleSheet.create ({
        button: {
            margin: 5,
            backgroundColor: 'purple',
            height: 50,
            borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'black',
                borderWidth: 3
            },
            buttonText: {
                color: 'white',
                fontWeight: 'bold',
                fontSize: 20
            },
        title : {
            textAlign:'center',
            fontWeight:'bold',
            fontSize: 20
            },
        scroll : {
            marginTop: 40,
            marginBottom: 50,
            backgroundColor: 'skyblue'
        }
        })

    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
    const [answer4, setAnswer4] = useState('');

    const correctAnswers = [
        "W Motors Lykan Hypersport",
        "Bugatti Chiron",
        "Chevrolet Corvette ZR1",
        "Drako GTE"
    ]

    return (
        <ScrollView style={styles.scroll}>
            <Text style={styles.title}>Asphalt Legends Cars</Text>

            <Options
                firstOption="Vanda Electrics Dendrobium"
                secondOption="W Motors Lykan Hypersport"
                thirdOption="Hennessey Venom F5"
                picture={require('./img/W-Motors-Lykan-Hypersport.jpg')}
                onSelect={setAnswer1}
            />
            <Options
                firstOption='Porsche 911 GT3 RS'
                secondOption='Zenvo TSR-S'
                thirdOption='Bugatti Chiron'
                picture={require('./img/Bugatti-Chiron.jpg')}
                onSelect={setAnswer2}
            />
            <Options
                firstOption='Chevrolet Corvette ZR1'
                secondOption='Ferrari SF90 Stradale'
                thirdOption='Arash Imperium'
                picture={require('./img/Chevrolet-Corvette-ZR1.jpg')}
                onSelect={setAnswer3}
            />
            <Options
                firstOption='Mazda Furai'
                secondOption='Koenigsegg Jesko'
                thirdOption='Drako GTE'
                picture={require('./img/Drako-GTE.jpg')}
                onSelect={setAnswer4}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    let correctCount = 0;

                    if (answer1 === correctAnswers[0]) correctCount++
                    if (answer2 === correctAnswers[1]) correctCount++
                    if (answer3 === correctAnswers[2]) correctCount++
                    if (answer4 === correctAnswers[3]) correctCount++


                    Alert.alert(`You got ${correctCount} out of 4 questions correct!`)

                }}
            >
                <Text style={styles.buttonText}>SUBMIT ANSWERS</Text>
            </TouchableOpacity>


        </ScrollView>
    )
}

export default QuizApp;