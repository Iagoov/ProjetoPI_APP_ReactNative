import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const TelaObjetivo = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePress = (imageName) => {
    setSelectedImage(selectedImage === imageName ? null : imageName);
    const message = selectedImage === imageName ? 'Imagem deselecionada' : 'Imagem selecionada';

  };

  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Menu');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.retangle} >

        <Text style={styles.textoObjetivo}>Qual é o seu objetivo?</Text>

        <TouchableOpacity onPress={() => handleImagePress('PerderPeso')}>
          <Image
            source={require('./Imagens/PerderPeso.png')}
            style={[styles.image, selectedImage === 'PerderPeso' && styles.selectedImage]}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleImagePress('GanharPeso')}>
          <Image
            source={require('./Imagens/GanharPeso.png')}
            style={[styles.image, selectedImage === 'GanharPeso' && styles.selectedImage]}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleImagePress('ManterPeso')}>
          <Image
            source={require('./Imagens/ManterPeso.png')}
            style={[styles.image, selectedImage === 'ManterPeso' && styles.selectedImage]}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>

        <View style={styles.retangleSelect} />

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
    height: '100%'
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

  textoObjetivo: {
    fontSize: 24,
    lineHeight: 29,
    marginBottom: 20,
    fontWeight: 'bold',
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

  image: {
    width: 310,
    height: 60,
    marginBottom: 20,
    marginTop: 5,
  },

  selectedImage: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 12,
  },
});

export default TelaObjetivo;
