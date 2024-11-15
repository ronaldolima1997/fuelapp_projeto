import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function FuelAmountCalcScreen({ navigation }) {
  const [fuelType, setFuelType] = useState('');
  const [fuelPrice, setFuelPrice] = useState('');
  const [fuelConsumption, setFuelConsumption] = useState('');
  const [distance, setDistance] = useState('');
  const [result, setResult] = useState('');

  const calculateFuelCost = () => {
    const price = parseFloat(fuelPrice);
    const consumption = parseFloat(fuelConsumption);
    const dist = parseFloat(distance);
    if (isNaN(price) || isNaN(consumption) || isNaN(dist) || price <= 0 || consumption <= 0 || dist <= 0) {
      Alert.alert('Erro', 'Por favor, insira valores válidos para todos os campos.');
      return;
    }

    const cost = (dist / consumption) * price;
    setResult(`Custo estimado para ${dist} km: R$ ${cost.toFixed(2)}`);
  };

  const resetFields = () => {
    setFuelType('');
    setFuelPrice('');
    setFuelConsumption('');
    setDistance('');
    setResult('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Valor a ser gasto através do km que quer pecorrer</Text>
      
      <Text>Preço do Combustível:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={fuelPrice}
        onChangeText={setFuelPrice}
      />
      <Text>Consumo (km/L):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={fuelConsumption}
        onChangeText={setFuelConsumption}
      />
      <Text>Distância a Percorrer (km):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={distance}
        onChangeText={setDistance}
      />
      <Button title="Calcular" onPress={calculateFuelCost} />
      {result ? (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{result}</Text>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});
