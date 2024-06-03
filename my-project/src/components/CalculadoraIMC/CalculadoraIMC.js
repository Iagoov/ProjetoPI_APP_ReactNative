import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';

const CalculadoraIMC = () => {
  const navigation = useNavigation();

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePress = (imageName) => {
    setSelectedImage(selectedImage === imageName ? null : imageName);
  };

  const [imc, setIMC] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const calculateBMR = () => {
    if (!peso || !altura) return;

    const pesoKg = parseFloat(peso);
    const alturaCM = parseFloat(altura); 

    const imc = pesoKg / (alturaCM * alturaCM);

    const imcFormatado = imc.toFixed(2);

    let category = '';

    if (imc < 18.5) {
      category = 'Magreza';
    } else if (imc >= 18.5 && imc < 24.9) {
      category = 'Peso Saudável';
    } else if (imc >= 25 && imc < 29.9) {
      category = 'Sobrepeso';
    } else if (imc > 29.9) {
      category = 'Obesidade';
    }

    setIMC(imcFormatado);
    setResultado(category);
  };

  const handleLimparCampos = () => {
    setPeso('');
    setAltura('');
    setIMC('');
    setResultado('');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <SafeAreaView style={styles.container}>

        <View style={styles.content}>
          <View style={styles.genderContainer}>
            <TouchableOpacity onPress={() => handleImagePress('Masculino')}>
              <Image
                source={require('./Imagens/Masculino.png')}
                style={[styles.image, selectedImage === 'Masculino' && styles.selectedImage]}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleImagePress('Feminino')}>
              <Image
                source={require('./Imagens/Feminino.png')}
                style={[styles.image, selectedImage === 'Feminino' && styles.selectedImage]}
              />
            </TouchableOpacity>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Peso (kg)"
            keyboardType="numeric"
            value={peso}
            onChangeText={setPeso}
          />
          <TextInput
            style={styles.input}
            placeholder="Altura (cm)"
            keyboardType="numeric"
            value={altura}
            onChangeText={setAltura}
          />

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button} onPress={calculateBMR}>
              <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>

            <TouchableOpacity placeholder="Limpar quantidade ingerida" style={styles.iconButton} onPress={handleLimparCampos}>
              <Icon name="trash" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          {resultado !== '' && (
            <View style={styles.resultContainer}>
              <Text style={styles.resultText}>IMC: {imc}</Text>
              <Text style={styles.resultText}>Categoria de peso: {resultado}</Text>
            </View>
          )}
        </View>

        <View style={styles.footer}>
          <Text style={styles.textoTabela}>Categorias</Text>
          <Image source={require('./Imagens/Tabela.png')} style={styles.resultImage} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    paddingTop: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    flex: 1,
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },

  image: {
    marginHorizontal: 30,
  },

  selectedImage: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 12,
  },

  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 12,
    borderColor: '#C1352C',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
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

  button: {
    width: 120,
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
    borderColor: '#C1352C',
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
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
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F3F3',
    padding: 20,
  },
  textoTabela: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  resultImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1.5,
    resizeMode: 'contain',
  },
});

export default CalculadoraIMC;
