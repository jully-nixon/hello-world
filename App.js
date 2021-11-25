import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, Image, Input, Button, CatsList, Messages } from './src/components';
import { ImageBackground, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App() {

  const [title, onChangeTitle] = useState('');
  const [showTitle, setShowTitle] = useState(false);

  const isShowTitle = () => {
    if (title) {
      setShowTitle(true);
    } else {
      setShowTitle(false);
    }
  }

  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <ImageBackground
          source={require('./assets/background.jpg')}
          style={styles.image}
        />

        <View style={styles.avatar}>
          <Image />

          {showTitle &&
            <Text>{title}</Text>
          }

          <Input onChangeText={onChangeTitle} value={title} />
          <Button onPress={isShowTitle} title="OK" />

          <Messages urlApi="https://positive-vibes-api.herokuapp.com/quotes/random" />

          <StatusBar style="auto" />
        </View>

      </View>
    </QueryClientProvider>
  );
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
