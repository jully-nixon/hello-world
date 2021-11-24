import React from 'react';
import { Messages } from '../../components';
import { View } from 'react-native';

export const showMessages = () => {

    return (
        <View>
            <Messages urlApi="https://positive-vibes-api.herokuapp.com/quotes/random" />
        </View >
    )
}