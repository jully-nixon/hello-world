import React from 'react';
import { Text, Image, Input, Button } from '../../components';
import { ImageBackground, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

export const Home = ({ navigation }) => {
    const [title, onChangeTitle] = useState('');

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../assets/background.jpg')}
                style={styles.image}
            />

            <View style={styles.avatar}>
                <Image />

                <Text>{title}</Text>

                <Input onChangeText={onChangeTitle} value={title} />
                <Button onPress={() => navigation.navigate('Messages')} title="OK" />

                <StatusBar style="auto" />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        height: '100%'
    },
    avatar: {
        position: 'absolute',
        marginTop: 80,
        left: 0,
        right: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
});