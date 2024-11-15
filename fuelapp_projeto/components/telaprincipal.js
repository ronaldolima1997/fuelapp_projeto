import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/image/posto.jpeg')} style={styles.logo} />
      <Text style={styles.welcomeText}>
        SEJA BEM-VINDO AO FUEL APP! AQUI VOCÊ GARANTE QUAL COMBUSTÍVEL TEM O MELHOR CUSTO-BENEFÍCIO!
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Cálculo de Custo-Benefício" onPress={() => navigation.navigate('SimpleCalcScreen')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Valor a ser gasto através do km que quer pecorrer" onPress={() => navigation.navigate('FuelAmountCalcScreen')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Cálculo de Custo por Quilometragem" onPress={() => navigation.navigate('KmCostCalcScreen')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});
