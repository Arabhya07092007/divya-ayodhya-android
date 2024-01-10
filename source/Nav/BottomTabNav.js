import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Others, Temple, Food } from '../SvgIcons/SvgIcon';
import IconsCheck from '../SvgIcons/IconsCheck';
import Touristfeed from '../screens/Touristfeed';

const Tab = createBottomTabNavigator();

function BottomTabNav() {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
                tabBarActiveTintColor: '#B01432',
                tabBarLabelStyle: { fontWeight: "400", fontSize: 11 },
                tabBarStyle: { backgroundColor: "#FFFEDE" },
                headerShown: false
            }}
        >
            <Tab.Screen
                name="Home"
                component={Touristfeed}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Home color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Temple"
                component={IconsCheck}
                options={{
                    tabBarLabel: 'Temple',
                    tabBarIcon: ({ color, size }) => (
                        <Temple color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Others"
                component={Touristfeed}
                options={{
                    tabBarLabel: 'Others',
                    tabBarIcon: ({ color, size }) => (
                        <Others color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Food"
                component={IconsCheck}
                options={{
                    tabBarLabel: 'Food',
                    tabBarIcon: ({ color, size }) => (
                        <Food color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabNav;
