import React, {useState} from 'react';
import { View, Text, Image, StyleSheet } from "react-native";
import {Picker} from '@react-native-picker/picker';

    const Options = ({firstOption, secondOption, thirdOption, picture, onSelect}) => {
        const styles = StyleSheet.create ({
            questionContainer : {
                flex: 1,
                marginTop: 10,  
                marginBottom: 10,
                borderColor: 'black',
                borderWidth: 3,
                backgroundColor: 'purple',
            },
            picker : {
                color: 'white',
                fontWeight: 'bold'
            },
            question : {
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
                backgroundColor: 'black'
            },
            picture : {
                width: 300,
                height: 120,
                alignSelf: 'center'
            },

            }
        )
        const [selected, setSelected] = useState(' ');
        return (
            <View style={styles.questionContainer}>
                <Text style={styles.question}>What is this car?</Text>
                <Picker style={styles.picker} selectedValue={selected} onValueChange={(value) => {
                    setSelected(value);
                    onSelect(value); }}>
                    <Picker.Item label='Select an Option' value='Select an Option' style={styles.options}/>
                    <Picker.Item label={firstOption} value={firstOption} style={styles.options}/>
                    <Picker.Item label={secondOption} value={secondOption} style={styles.options}/>
                    <Picker.Item label={thirdOption} value={thirdOption} style={styles.options}/>
                </Picker>
                <Image source={picture} style={styles.picture}/>
            </View>
        )
    }

export default Options;