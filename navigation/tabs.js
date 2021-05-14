import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { COLORS , icons} from '../constants'
import { BooksDetail, Home } from '../screens'

const Tab = createBottomTabNavigator();

const tabOptions = {
    showlable : false,
    style :{
        height  :"10%",
        backgroundColor : COLORS.black
    }
}
const Tabs = () => {
    return (
        <Tab.Navigator
            tabOptions={tabOptions}
            screenOptions={({ route }) => ({
                tabBarIcon : ({focused}) =>{
                    const tintColor = focused ?  COLORS.white : COLORS.gray

                    switch (route.name) {
                        case "Home":
                            <Image
                                source={icons.dashboard_icon}
                                resizeMethod="contain"
                                style={{
                                    tintColor : tintColor,
                                    width :25
                                }}
                            />
                        case "Search":
                            <Image
                                source={icons.search_icon}
                                resizeMethod="contain"
                                style={{
                                    tintColor : tintColor,
                                    width :25
                                }}
                            />
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

