import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function KmCostCalcScreen({ navigation }) {
  const [fuelType, setFuelType] = useState('gasolina');
  const [fuelPrice, setFuelPrice] = useState('');
  const [fuelEfficiency, setFuelEfficiency] = useState('');
  const [amountToSpend, setAmountToSpend] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const price = parseFloat(fuelPrice);
    const efficiency = parseFloat(fuelEfficiency);
    const amount = parseFloat(amountToSpend);

    if (price && efficiency && amount) {
      const liters = amount / price;
      const distance = liters * efficiency;
      setResult({ liters, distance });
    }
  };

  const resetFields = () => {
    setFuelPrice('');
    setFuelEfficiency('');
    setAmountToSpend('');
    setResult(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Cálculo estimado de KM a ser pecorrido com o valor que pretende investir
      </Text>

      <TextInput
        placeholder="Preço do combustível (R$/L)"
        keyboardType="numeric"
        value={fuelPrice}
        onChangeText={setFuelPrice}
        style={styles.input}
      />
      <TextInput
        placeholder="Consumo médio do veículo (km/L)"
        keyboardType="numeric"
        value={fuelEfficiency}
        onChangeText={setFuelEfficiency}
        style={styles.input}
      />
      <TextInput
        placeholder="Valor que pretende gastar (R$)"
        keyboardType="numeric"
        value={amountToSpend}
        onChangeText={setAmountToSpend}
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Button title="Calcular" onPress={calculate} />
      </View>
      {result && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            Litros de combustível necessário: {result.liters.toFixed(2)} L
          </Text>
          <Text style={styles.resultText}>
            Distância possível: {result.distance.toFixed(2)} km
          </Text>
        </View>
      )}

      <View style={styles.buttonContainer}>
        <Button title="Refazer Cálculo" onPress={resetFields} />
        <Button
          title="Voltar para o Início"
          onPress={() => navigation.navigate('HomeScreen')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  resultContainer: {
    marginTop: 20,
  },
  resultText: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});
