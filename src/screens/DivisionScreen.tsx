import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { estilos } from '../theme/appTheme';

const DivisionScreen = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState(''); 
  const [result, setResult] = useState('');

  const dividir = () => {
    const numero1 = Number(num1);
    const numero2 = Number(num2);

    if (numero2 === 0) {
      setResult('No se puede dividir por cero');
    } else {
      const division = numero1 / numero2;
      setResult('Resultado: ' + division);
    }
  };

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>Calculadora de División</Text>

      <View style={estilos.contenedorEntrada}>
        <Text style={estilos.etiqueta}>Primer número:</Text>
        <TextInput 
          style={estilos.entrada}
          value={num1}
          onChangeText={setNum1}
          keyboardType="numeric"
          placeholder="Ingrese el primer número"
          placeholderTextColor="#6a3da1"
        />
      </View>

      <View style={estilos.contenedorEntrada}>
        <Text style={estilos.etiqueta}>Segundo número:</Text>
        <TextInput
          style={estilos.entrada}
          value={num2} 
          onChangeText={setNum2}
          keyboardType="numeric"
          placeholder="Ingrese el segundo número"
          placeholderTextColor="#6a3da1"
        />
      </View>

      <TouchableOpacity 
        style={estilos.boton}
        onPress={dividir}
      >
        <Text style={estilos.textoBoton}>Calcular</Text>
      </TouchableOpacity>

      <Text style={estilos.resultado}>{result}</Text>
    </View>
  );
};

export default DivisionScreen;