import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { Curriculum } from '../Curriculum';
import { Hobbies } from '../Hobbies';
import { Extra } from '../Extra';

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'start', alignItems: 'start' }}>
            <Curriculum />
        </View>
    );
}

function HobbiesScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'start', alignItems: 'start' }}>
            <Hobbies />
        </View>
    );
}

function ExtraScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'start', alignItems: 'start' }}>
            <Extra />
        </View>
    );
}

const Tab = createBottomTabNavigator();

export const Home = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Currículo" component={HomeScreen} options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }} />

                <Tab.Screen name="Hobbies" component={HobbiesScreen} options={{
                    tabBarLabel: 'Hobbies',
                    tabBarIcon: ({ size }) => (
                        <MaterialCommunityIcons name="heart" color={'#FF0000'} size={size} />
                    ),
                }} />
                <Tab.Screen name="Atividades Extracurriculares" component={ExtraScreen} options={{
                    tabBarLabel: 'Extra',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="plus" color={color} size={size} />
                    ),
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}


