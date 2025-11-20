import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity, SectionList, Image, Button} from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

// Amend datasource where necessary to include header icon
const datasource = [
    {
        data:[
            {name: 'Pikachu', num: 25},
            {name: 'Raichu', num: 26}
        ],
        title: 'Electric',
        bgcolor: 'yellow',
        name: 'bolt-lightning'

    },
    {
        data:[
            {name: 'Squirtle', num: 7},
            {name: 'Wartortle', num: 8}
        ],
        title: 'Water',
        bgcolor: 'skyblue',
        name: 'water'
    },
    {
        data: [
            {name: 'Charmander', num: 4},
            {name: 'Charizard', num: 6}
        ],
        title: 'Fire',
        bgcolor: 'orange',
        name: 'fire'
    }
];

const styles = StyleSheet.create({
    opacityStyle: {
        borderWidth: 1,
    },
    textStyle: {
        fontSize: 20,
        margin: 10,
        textAlign: 'left',
        fontWeight: 'bold',
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    cardStyle: {
        backgroundColor: 'skyblue',
        borderWidth: 1,
        borderColor: 'black'
    },
    imageStyle: {
        alignSelf: 'flex-end',
        marginBottom: 20,
        marginRight: 20,
        width: 200,
        height: 300
    },
    addButtonStyle: {
        backgroundColor: 'blue',
        borderWidth: 1,
        borderColor: 'black',
        margin: 20,
        alignItems: 'center',
        padding: 10
    },
    buttonTextStyle: {
        textTransform: 'uppercase',
        color: 'white',
        fontWeight: 'bold'
    }
});


const renderItem = ({ item }) => {
    let url = 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_' + item.num + '.png';

    return (
        <TouchableOpacity style={[styles.opacityStyle]}>
            <View style={styles.cardStyle}>
                <Text style={styles.textStyle}>{item.name}</Text>
                <Image src={url} style={styles.imageStyle} />
            </View>
        </TouchableOpacity>
    );
};

// Amend code to display header icon etc
const MyApp = () => {
    return (
        <View style={{marginTop: 30, marginBottom: 50}}>
            <TouchableOpacity style={styles.addButtonStyle}>
                <View>
                    <Text style={styles.buttonTextStyle}>
                        Add Pokemon
                    </Text>
                </View>
            </TouchableOpacity>

            <SectionList
                contentContainerStyle={{padding:10}}
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={ ( {section: {title, bgcolor, name}}) => (
                    <Text style={ [styles.headerText, {backgroundColor: bgcolor} ] }>
                        <FontAwesome6 name={name} size={20} color='black'/> {title}
                    </Text>
                )}
            />

        </View>
    );
};

export default MyApp;


