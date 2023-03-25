import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'
import Books from './Books';
import Profile from './Profile';
import Search from './Search';
import AntDesign from "react-native-vector-icons/AntDesign"
import FontAwesome from "react-native-vector-icons/FontAwesome"
// import AntDesign from "react-native-vector-icons/"



const MainTabScreen = () => {
    const Tab = createMaterialBottomTabNavigator();
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            activeColor="#000"
            barStyle={{ backgroundColor: 'lightblue' }}
        >
            <Tab.Screen
                name="Books"
                component={Books}
                options={{
                    tabBarLabel: 'Books',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bookshelf" color={"black"} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="search" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="face-man-profile" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default MainTabScreen
