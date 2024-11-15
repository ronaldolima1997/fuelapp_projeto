import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    // Redireciona para a tela principal após 3 segundos
    const timer = setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 3000);
    return () => clearTimeout(timer); // Limpeza do timer ao desmontar o componente
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/image/fuelapp.webp')} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff', 
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});
