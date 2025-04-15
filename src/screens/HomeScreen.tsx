import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToCalculator = () => {
    navigation.navigate('Calculadora');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a GraficaApp</Text>
      <Text style={styles.subtitle}>Tu herramienta para gráficas matemáticas</Text>

      <TouchableOpacity style={styles.button} onPress={goToCalculator}>
        <Text style={styles.buttonText}>Ir a Calculadora Gráfica</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2f',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#00b894',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
