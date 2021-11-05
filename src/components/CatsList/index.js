import React from 'react';
import { useQuery } from "react-query";
import { carregaPessoas } from "../../api";
import { Image, View } from 'react-native';

export const CatsList = ({ urlApi }) => {
    const { data } = useQuery(
        fetch(urlApi).then((res) => res.json())

    );
    console.log("data", data);

    return (
        <View>
            {/* <Image source={data.url} /> */}
        </View>
    );
}