import React from 'react';
import { ActivityIndicator, View, Text } from "react-native";
import { useQuery } from 'react-query';
import { CustomMessages } from './styles';

export const Messages = ({ urlApi }) => {
    const { isLoading, error, data } = useQuery('messageOfTheDay', () =>
        fetch(urlApi).then(res =>
            res.json()
        ));

    if (isLoading) {
        return <ActivityIndicator size="large" color="pink" />;
    }

    if (error) {
        return (
            <View>
                <Text>Erro: {error || "Not Found"}</Text>
            </View>
        );
    };

    return (
        <View>
            <CustomMessages>{data.frase}</CustomMessages>
        </View>
    )
}