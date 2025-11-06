import React from 'react';
import {View, Text, Image } from 'react-native';

const Car = ({ name, rank, carClass, country, carPicture }) => {
    return (
        <View>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
                {name}
            </Text>
            <Text>
                Rank: {rank} {'\n'}

                Class {carClass} {'\n'}

                Origin country: {country}
            </Text>

            <Image source={carPicture} height={50} width={100}/>
        </View>
    )
}

export default Car;