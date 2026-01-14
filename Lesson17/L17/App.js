import React,{useState, useEffect} from 'react';
import { FlatList, StatusBar, Text, TextInput, View, Image, StyleSheet} from 'react-native';

let originalData = [];
const App = () => {
    const [myData, setMyData] = useState([]);

    const myurl = "https://onlinecardappwebservices-6zku.onrender.com/allcards"

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            margin: 20,
            borderWidth: 1,
            borderColor: 'black',
            backgroundColor: 'white',
            borderRadius: 10,
        },
        containerText: {
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: 'bold',
        },
        imageStyle: {
            width: 200,
            height: 300,
            alignSelf: 'center',
            margin: 20,
        },
        searchBar: {
            borderWidth:1,
            margin: 15,
            borderRadius: 10
        },
        searchLabel: {
            marginTop: 25,
            marginLeft: 15,
            fontSize: 15
        }
    })
    useEffect(() => {
        fetch(myurl)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                setMyData(myJson)
                originalData = myJson;
            })
    }, []);

    const FilterData = (text) => {
        if (text!='') {
            let myFilteredData = originalData.filter((item) =>
            item.card_name.includes(text));
            setMyData(myFilteredData);
        }
        else {
            setMyData(originalData);
        }
    }


    const renderItem = ({item, index}) => {
        return (
            <View style={styles.container}>
                <Text style={styles.containerText}>{item.card_name}</Text>
                <Image source={{ uri: item.card_pic }} style={styles.imageStyle}/>
            </View>
        );
    };

    return (
        <View>
            <StatusBar/>
            <Text style={styles.searchLabel}>Search:</Text>
            <TextInput style={styles.searchBar} onChangeText={(text) => {FilterData(text)}}/>
            <FlatList data={myData} renderItem={renderItem} />
        </View>
    );
}

export default App;
