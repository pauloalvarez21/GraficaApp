import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';
import FunctionPlot from './componens/FunctionPlot';

const CalculadoraScreen: React.FC = () => {
  const [expresion, setExpresion] = useState<string>('');
  const [graficar, setGraficar] = useState<boolean>(false);

  const handleGraficar = () => {
    Keyboard.dismiss();
    setGraficar(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora Gráfica</Text>

      <TextInput
        style={styles.input}
        placeholder="Ej: sin(x), x^2, cos(x)+2"
        placeholderTextColor="#aaa"
        value={expresion}
        onChangeText={(text) => {
          setExpresion(text);
          setGraficar(false);
        }}
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.button} onPress={handleGraficar}>
        <Text style={styles.buttonText}>Graficar</Text>
      </TouchableOpacity>

      {graficar && <FunctionPlot expression={expresion} />}
    </View>
  );
};

export default CalculadoraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2f',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#2d2d44',
    color: '#fff',
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#00b894',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
