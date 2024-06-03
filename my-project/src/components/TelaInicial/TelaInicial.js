import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, ActivityIndicator, Image } from 'react-native';

const TelaInicial = () => {

  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {

      navigation.navigate('Login');
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./TelaDeCarregamento.png')} />

      <ActivityIndicator size="large" color="#C1352C" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'FFFFFF',
  },

  image: {
    top: 50,
    width: 300,
    height: 500,
    marginBottom: 10,
    alignSelf: 'center',
  },
});

export default TelaInicial;
