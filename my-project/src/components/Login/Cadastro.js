import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const Cadastro = () => {
    const [name, setName] = useState('');
    const [idade, setIdade] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    const [error, setError] = useState('');

    const navigation = useNavigation();

    const handleLogin = () => {
        if (name !== null && name.trim() !== '' &&
            idade !== null && idade.trim() !== '' &&
            email !== null && email.trim() !== '' &&
            senha !== null && senha.trim() !== '') {
                
            navigation.navigate('TelaObjetivo');
        }

        else {
            setError('Preencha todos os campos!');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.retangle}>
                <Text style={styles.TextLogin}>Cadastro</Text>

                <TextInput style={styles.input} placeholder="Nome" onChangeText={(text) => setName(text)} value={name} />

                <TextInput style={styles.input} placeholder="Idade" keyboardType="numeric" onChangeText={(text) => setIdade(text)} value={idade} />

                <TextInput style={styles.input} placeholder="E-mail" onChangeText={(text) => setEmail(text)} value={email} />

                <TextInput style={styles.input} placeholder="Senha" onChangeText={(text) => setSenha(text)} value={senha} secureTextEntry={true} />

                {error ? <Text style={styles.error}>{error}</Text> : null}

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Confirmar</Text>
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
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 7,
        marginBottom: 12,
        borderColor: 'gray',
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF',
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

export default Cadastro;
