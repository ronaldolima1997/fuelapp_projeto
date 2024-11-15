import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Alert } from 'react-native';

export default function SimpleCalcScreen({ navigation }) {
  const [gasolinaPrice, setGasolinaPrice] = useState('');
  const [etanolPrice, setEtanolPrice] = useState('');
  const [result, setResult] = useState('');
  const [resultImage, setResultImage] = useState(null);
Alert.alert('Teste', 'Este é um alerta de teste.');
  const calculateBestFuel = () => {
    const gasolina = parseFloat(gasolinaPrice);
    const etanol = parseFloat(etanolPrice);
    if (isNaN(gasolina) || isNaN(etanol) || gasolina <= 0 || etanol <= 0) {
      Alert.alert('Erro', 'Por favor, insira valores válidos para ambos os combustíveis.');
      return;
    }

    const melhorOpcao = etanol / gasolina < 0.7 ? 'Etanol' : 'Gasolina';
    setResult(melhorOpcao);
    setResultImage(
      melhorOpcao === 'Etanol'
        ? require('../assets/image/etanol.jpeg') 
        : require('../assets/image/gasolina.jpeg') 
    );
  };

  const resetFields = () => {
    setGasolinaPrice('');
    setEtanolPrice('');
    setResult('');
    setResultImage(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cálculo de Custo-Benefício</Text>
      <Text>Preço da Gasolina:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={gasolinaPrice}
        onChangeText={setGasolinaPrice}
      />
      <Text>Preço do Etanol:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={etanolPrice}
        onChangeText={setEtanolPrice}
      />
      <Button title="Calcular" onPress={calculateBestFuel} />
      {result ? (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Melhor opção: {result}</Text>
          {resultImage && <Image source={resultImage} style={styles.resultImage} />}
        </View>
      ) : null}
      <View style={styles.buttonContainer}>
        <Button title="Refazer Cálculo" onPress={resetFields} />
        <Button title="Voltar para o Início" onPress={() => navigation.navigate('HomeScreen')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 10,
    borderRadius: 5,
  },
  resultContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  resultText: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },
  resultImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});
