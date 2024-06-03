import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MetAgua = () => {
    const [metaDiaria, setMetaDiaria] = useState('');
    const [ingerido, setIngerido] = useState('');
    const [registros, setRegistros] = useState({});
    const [totalIngeridoHoje, setTotalIngeridoHoje] = useState(0);
    const [metaDefinida, setMetaDefinida] = useState(false);

    const handleDefinirMetaDiaria = () => {
        const meta = parseInt(metaDiaria);
        if (!isNaN(meta) && meta > 0) {
            setMetaDiaria(meta);
            setMetaDefinida(true);
            alert(`Meta diária definida para ${meta} ml!`);
        } else {
            alert('Por favor, insira um valor válido para a meta diária.');
        }
    };

    const handleRegistrar = () => {
        const intakeValue = parseInt(ingerido);
        if (!isNaN(intakeValue) && intakeValue > 0) {
            const today = new Date().toLocaleDateString();
            const totalHoje = (registros[today] || 0) + intakeValue;
            setRegistros({ ...registros, [today]: totalHoje });
            setTotalIngeridoHoje(totalHoje);
            setIngerido('');
        } else {
            alert('Por favor, insira um valor válido para a quantidade bebida.');
        }
    };

    const handleAlterarMeta = () => {
        setMetaDefinida(false);
        setMetaDiaria('');
    };

    const handleLimparCampos = () => {
        setIngerido('');
        setTotalIngeridoHoje(0);
        setRegistros({});
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Image style={styles.image} source={require('./Imagens/Agua.png')} />

                {!metaDefinida && (
                    <>
                        <TextInput
                            style={styles.input}
                            placeholder="Defina sua meta diária (ml)"
                            keyboardType="numeric"
                            value={metaDiaria}
                            onChangeText={setMetaDiaria}
                        />
                        <TouchableOpacity style={styles.button} onPress={handleDefinirMetaDiaria}>
                            <Text style={styles.buttonText}>Cadastrar Meta Diária</Text>
                        </TouchableOpacity>
                    </>
                )}
                {metaDefinida && (
                    <>
                        <TextInput
                            style={styles.input}
                            placeholder="Quantidade bebida (ml)"
                            keyboardType="numeric"
                            value={ingerido}
                            onChangeText={setIngerido}
                        />
                        <View style={styles.buttonRow}>
                            <TouchableOpacity style={styles.button} onPress={handleRegistrar}>
                                <Text style={styles.buttonText}>Adicionar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity placeholder="Alterar MetA" style={styles.iconButton} onPress={handleAlterarMeta}>
                                <Icon name="edit" size={24} color="#FFFFFF" />
                            </TouchableOpacity>

                            <TouchableOpacity placeholder="Limpar quantidade ingerida" style={styles.iconButton} onPress={handleLimparCampos}>
                                <Icon name="trash" size={24} color="#FFFFFF" />
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </View>

            <View style={styles.resultContainer}>
                <Text style={styles.resultText}>Total ingerido hoje: {totalIngeridoHoje} ml </Text>
                <Text style={styles.resultText}>Meta diária: {metaDiaria || 0} ml</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3',
        paddingTop: 20,
    },

    content: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },

    image: {
        width: '50%',
        height: '50%',
        marginBottom: 20,
    },

    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: 12,
        borderColor: '#C1352C',
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF',
    },

    button: {
        width: '50%',
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C1352C',
    },

    buttonRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },

    iconButton: {
        marginLeft: 10,
        width: 40,
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

    resultContainer: {
        marginTop: 20,
        padding: 15,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        borderColor: '#C1352C',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginHorizontal: 40,

        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },

    resultText: {
        fontSize: 18,
        color: '#C1352C',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default MetAgua;
