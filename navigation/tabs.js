import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { StyleSheet, Text, View,Image, Platform } from 'react-native'
import { COLORS , icons} from '../constants'
import {  Home } from '../screens'

const Tab = createBottomTabNavigator();

const tabOptions = {
    showLabel: false,
    style: {
        height: Platform.OS === 'ios' ? "10%" : "8%",
        backgroundColor: COLORS.black
    }
}
const Tabs = () => {
    return (
        <Tab.Navigator
        tabBarOptions={tabOptions}
            screenOptions={({ route }) => ({
                tabBarIcon : ({focused}) =>{
                    const tintColor = focused ?  COLORS.white : COLORS.gray
                    switch (route.name) {
                        case "Home":
                            return(
                                <Image
                                source={icons.dashboard_icon}
                                resizeMode="contain"
                                style={{
                                    tintColor : tintColor,
                                    width :20,
                                    height: 20
                                }}
                            />
                            )
                        case "Search":
                            return(
                                <Image
                                source={icons.search_icon}
                                resizeMode="contain"
                                style={{
                                    tintColor : tintColor,
                                    width :20,
                                    height: 20
                                }}
                            />
                            )
                    }
                }
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
            />
            <Tab.Screen
                name="Search"
                component={Home}
            />
        </Tab.Navigator>
    )
}

export default Tabs

