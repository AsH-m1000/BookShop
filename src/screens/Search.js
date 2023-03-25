import React, { useEffect, useState } from 'react';
import { TextInput, View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import axios from 'axios';
import { TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';


const Search = () => {
    const [text, setText] = useState('');
    const [result, setResult] = useState(false)
    const [books, setBooks] = useState([]);


    const handleKeyPress = () => {
        setResult(true)
        // Search()
    };
    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${text}`)
            .then(response => setBooks(response.data.items))
            .catch(error => setResult(false));
    }, [text]);

    return (
        <>
            <View>
                <View style={styles.container}>
                    <FontAwesome5 style={{ display: "flex", padding: 10 }} name="search" color={"black"} size={26} />
                    <TextInput
                        style={{ color: "#000000" }}
                        placeholder="Search Books"
                        value={text}
                        onChangeText={setText}
                        placeholderTextColor="#000"
                        onSubmitEditing={handleKeyPress}
                    />
                </View>
            </View>
            <ScrollView>
                <View>
                    {
                        result &&
                        <Text style={{ color: "black", padding: 10, height: 45, width: 150, }}>
                            {`Results for "${text}"`}
                        </Text>
                    }
                    <FlatList
                        data={books}
                        keyExtractor={item => item.id}
                        style={{ marginTop: 5 }}
                        renderItem={({ item }) =>
                            <>
                                <TouchableOpacity onPress={() => { console.log(item), setResult(false) }}>
                                    <View style={{
                                        display: "flex",
                                        justifyContent: "space-evenly",
                                        flexDirection: "column",
                                        height: moderateScale(125),
                                        width: moderateScale(300),
                                        margin: 30,
                                        backgroundColor: "#ddd",
                                        padding: 15,
                                    }}>
                                        <View style={[{
                                            display: "flex", margin: 10, justifyContent: "center",
                                            alignItems: "center"
                                        }]}>
                                            <Image source={require("../assets/books2.jpg")} style={{ width: 75, height: 75, borderRadius: 50 }} />
                                        </View>
                                        <View style={styles.text}>
                                            <Text numberOfLines={1} style={{ fontSize: 10, color: "#000", fontSize: 15 }}>{item.volumeInfo.title}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View>
                                    <Text style={{ fontSize: 10 }}>{books.volumeInfo}</Text>
                                </View>
                            </>
                        }
                    />
                </View>
            </ScrollView>

        </>
    );
};

export default Search;


const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        margin: 10,
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#ddd",
        justifyContent: "center",
        alignItems: "center"

    }
    , text: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 19
    }
})