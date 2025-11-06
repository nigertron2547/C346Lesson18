import React, {useState} from 'react';
import { View, Text, Image } from "react-native";
import {Picker} from '@react-native-picker/picker';

    const Options = ({firstOption, secondOption, thirdOption, picture, onSelect}) => {
        const [selected, setSelected] = useState(' ');
        return (
            <View style={{marginTop: 10, marginBottom: 10}}>
                <Text>What is this car?</Text>
                <Picker selectedValue={selected} onValueChange={(value) => {
                    setSelected(value);
                    onSelect(value); }}>
                    <Picker.Item label='Select an Option' value='Select an Option' />
                    <Picker.Item label={firstOption} value={firstOption} />
                    <Picker.Item label={secondOption} value={secondOption} />
                    <Picker.Item label={thirdOption} value={thirdOption} />
                </Picker>
                <Image source={picture} style={{ width: 200, height: 120 }}/>
            </View>
        )
    }

export default Options;