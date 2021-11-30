import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { List } from '../../components';

export const Hobbies = () => {
    return (
        <ScrollView
            style={styles.scrollView}>
            <View>
                <List data={[
                    { id: 1, name: 'Cinema' },
                    { id: 2, name: 'Praia' },
                    { id: 3, name: 'Música' },
                    { id: 4, name: 'Livros' },
                    { id: 5, name: 'Aulas de teatro' },
                    { id: 6, name: 'Academia' }]} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'pink',
        width: '100%',
        padding: 20
    }
});