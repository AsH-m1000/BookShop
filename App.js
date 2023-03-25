import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign"
import { NavigationContainer } from '@react-navigation/native';
import MainTabScreen from './src/screens/MainTabScreen';

const App = () => {
    return (
        <NavigationContainer>
            <View style={{ backgroundColor: "lightblue", height: "7%", width: "100%", display: "flex", justifyContent: "center", alignItems: 'center', flexDirection: "row" }}>
                <View style={{ justifyContent: "space-evenly" }}>
                    <AntDesign name="cloudupload" color={"black"} size={26} />
                </View>
                <Text style={{ color: "#000", margin: 10, fontSize: 20 }} >
                    Book Shop
                </Text>
                <AntDesign name="clouddownload" color={"black"} size={26} />
            </View>
            <MainTabScreen />
        </NavigationContainer>
    )
}

export default App



const styles = StyleSheet.create({
    LogoBar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
