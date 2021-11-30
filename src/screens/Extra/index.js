import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { List } from '../../components';

export const Extra = () => {
    return (
        <ScrollView
            style={styles.scrollView}>
            <View>
                <List data={[
                    { id: 1, name: 'Cursos de idiomas' },
                    { id: 2, name: 'Ações de voluntariado' },
                    { id: 3, name: 'Intercâmbio internacional' },
                    { id: 4, name: 'Prática esportiva' },
                    { id: 5, name: 'Cursos online' },
                    { id: 6, name: 'Atividades culturais' }]} />
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