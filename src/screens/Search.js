import React, { useEffect, useState } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Picks from "../components/Picks"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"


const Search = () => {
    const [text, setText] = useState('');
    const [result, setResult] = useState(false)

    const handleKeyPress = () => {
        setResult(true)
        // Search()
    };

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
            {result &&
                <ScrollView>
                    <Picks horizontal={false} name={` Resuls For "${text}" `} bookname={text} size={325} images={1} />
                </ScrollView>
            }
        </>
    );
};

export default Search;


const styles = StyleSheet.create({
    container: {
        // backgroundColor: "black",
        borderColor: '#000000',
        borderBottomWidth: 1,
        margin: 20,
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#ddd"
    }
})