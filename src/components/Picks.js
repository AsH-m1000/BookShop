import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import axios from 'axios';

const Picks = (props) => {
    const {
        horizontal,
        name,
        bookname,
        size,
        images
    } = props

    const [books, setBooks] = useState([]);

    const image =
        images == 1 ? require("../assets/books1.jpg") :
            images == 2 ? require("../assets/books2.jpg") :
                images == 3 ? require("../assets/books3.jpg") :
                    null

    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookname}`)
            .then(response => setBooks(response.data.items))
            .catch(error => console.error(error));
    }, []);

    return (
        <View>
            <Text style={{ color: "black", padding: 10, height: 45, width: 150, }}>
                {name}
            </Text>

            <FlatList
                data={books}
                keyExtractor={item => item.id}
                horizontal={horizontal}
                style={{ marginTop: 5 }}
                renderItem={({ item }) =>
                    <>
                        <TouchableOpacity onPress={() => console.log(item)}>
                            <View style={{
                                display: "flex",
                                justifyContent: "space-around",
                                flexDirection: "row",
                                height: moderateScale(100),
                                width: moderateScale(size),
                                margin: 10,
                                backgroundColor: "#ddd",
                                padding: 10,
                                borderRadius: 10,
                            }}>
                                <View style={styles.container}>
                                    <Image source={image} style={{ width: 75, height: 75, borderRadius: 50 }} />
                                    {/* <Image src={{ uri: "http://books.google.com/books/content?id=1hfMDQAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api" }} /> */}
                                    {/* <Text>{item.volumeInfo.imageLinks.smallThumbnail}</Text> */}
                                </View>
                                <View style={styles.text}>
                                    <Text style={{ fontSize: 10, color: "#000", fontSize: 15 }}>{item.volumeInfo.title}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View>
                            <Text style={{ fontSize: 10 }}>{books.volumeInfo}</Text>
                        </View>
                    </>
                }
            />
        </View >
    );
};
const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        flex: 1,
        height: moderateScale(60),
        width: moderateScale(100),
        borderRadius: 50,
        marginTop: 10
    },

    text: {
        display: "flex",
        flex: 1,
        justifyContent: 'center',
    },
    modalcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
    },
})


export default Picks

