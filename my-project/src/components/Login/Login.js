import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigation = useNavigation();

  const handleLogin = () => {

    if (username === 'login' && password === 'senha') {
      navigation.navigate('TelaObjetivo');
    }

    else {
      setError('Nome de usuário ou senha incorretos');
    }
  };

  const handlePress = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.retangle} >

        <Text style={styles.TextLogin}>Login</Text>


        <TextInput
          style={styles.input}
          placeholder="E-mail"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />

        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.cadastro}>Cadastre-se</Text>
        </TouchableOpacity>

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: '#B21E14',
    width: '100%',
    height: '100%',
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

  },

  input: {
    width: 288,
    height: 32,
    borderWidth: 1,
    borderRadius: 7,
    marginBottom: 12,
    borderColor: 'gray',
    paddingHorizontal: 10,
    backgroundColor: 'FFFFFF',
    position: 'relative',
  },

  cadastro: {
    top: '10%',

  },

  button: {
    width: '60%',
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    marginTop: 20,
  },

  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default Login;
