import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { List } from '../../components';
import { Text } from 'react-native-elements';
import { Avatar } from 'react-native-elements';

export const Curriculum = () => {
    return (
        <ScrollView
            style={styles.scrollView}>
            <View style={styles.container}>
                <Avatar
                    size="xlarge"
                    rounded
                    source={{
                        uri:
                            'https://i.pinimg.com/564x/8f/f8/d8/8ff8d82b01c14b8779c00acbf6ee2486.jpg',
                    }}
                />
                <Text h2 style={styles.name}>Ana Maria</Text>
                <Text style={styles.dados}>av bernardo vieira de melo</Text>
                <Text style={styles.dados}>ana.maria@gmail.com</Text>
                <Text style={styles.dados}>(81) 98877-6655</Text>

                <Text h4 style={styles.title}>Frameworks</Text>
                <List data={[
                    { id: 1, name: 'ReactJS' },
                    { id: 2, name: 'React Native' },
                    { id: 3, name: 'AngularJS' },
                    { id: 4, name: 'Ionic' }
                ]} />

                <Text h4 style={styles.title}>Linguagens</Text>
                <List data={[
                    { id: 1, name: 'Javascript' },
                    { id: 2, name: 'Typescript' },
                    { id: 3, name: 'C#' },
                ]} />

                <Text h4 style={styles.title}>Metodologias</Text>
                <List data={[
                    { id: 1, name: 'Scrum' },
                ]} />

                <Text h4 style={styles.title}>Experiência profissional</Text>
                <Text style={styles.dados}>Empresa: IBM</Text>
                <Text style={styles.dados}>Cargo: Analista de sistemas</Text>
                <Text style={styles.dados}>Data inicio: 02/02/2019</Text>
                <Text style={styles.dados}>Data final: 30/11/2021</Text>
                <Text style={styles.dados}>Atividades: Desenvolvimento de aplicações mobile</Text>

                <Text h4 style={styles.title}>Formação Acadêmica</Text>
                <Text style={styles.dados}>Curso: Análise e desenvolvimento de sistemas</Text>
                <Text style={styles.dados}>Instituição : Unicap</Text>
                <Text style={styles.dados}>Data inicio: 01/02/2018</Text>
                <Text style={styles.dados}>Data final: 20/12/2022</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 40
    },
    name: {
        fontWeight: 'bold',
        color: 'black',
        marginTop: 20,
        marginBottom: 10
    },
    title: {
        fontWeight: 'bold',
        color: 'black',
        marginTop: 20
    },
    scrollView: {
        backgroundColor: 'pink',
        width: '100%'
    },
    dados: {
        fontSize: 14
    }
});