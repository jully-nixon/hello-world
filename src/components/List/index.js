import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export const List = ({ data, ...rest }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
                {...rest}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});


