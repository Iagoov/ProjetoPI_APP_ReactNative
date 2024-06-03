import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity, Alert } from 'react-native';

const Home = () => {
    const navigation = useNavigation();
    
    const handlePage = () => {
        navigation.navigate('Beba Água - Meta Diária');
    };

    return (
        <SafeAreaView style={styles.container}>
    
            <View style={styles.content}>
                <Image style={styles.image} source={require('./Imagens/Principal.png')} />
            </View>

            <View style={styles.footer}>
                <View style={styles.rectangle}>
                    <Text style={styles.textoAgua}>Já tomou água hoje?</Text>
                    <Image source={require('./Imagens/Agua.png')} />
                    <Text>Registre sua meta diária!</Text>

                    <TouchableOpacity style={styles.button} onPress={handlePage}>
                        <Text style={styles.buttonText}>Registrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3',
    },

    header: {
        height: 77,
        paddingTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#B21E14',
        justifyContent: 'space-between',
    },

    headerText: {
        fontSize: 20,
        color: '#fff',
    },

    icones: {
        paddingTop: 20,
    },

    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8BC34A',
    },

    image: {
        flex: 1,
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
    },

    footer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F3F3F3',
        padding: 20,
    },

    rectangle: {
        width: '80%',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },

    textoAgua: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    button: {
        marginTop: 20,
        width: '50%',
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C1352C',
    },

    buttonText: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Home;
