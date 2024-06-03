import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Desenvolvimento = () => {
  const navigation = useNavigation();

  const handlePage = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.retangle}>

        <Text style={styles.TextLogin}>Em Desenvolvimento</Text>

        <TouchableOpacity style={styles.button} onPress={handlePage}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B21E14',
  },
  retangle: {
    width: width * 0.9,
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F3F3',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  
  TextLogin: {
    fontSize: 24,
    lineHeight: 29,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  button: {
    marginTop: 20,
    width: 103,
    height: 32,
    borderRadius: 15,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },

  buttonText: {
    fontSize: 13,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Desenvolvimento;
