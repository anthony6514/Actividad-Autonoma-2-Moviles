
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';


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
    <View>
      <Text>Calculadora de División</Text>

      <Text>Primer número:</Text>
      <TextInput 
        value={num1}
        onChangeText={setNum1}
        keyboardType="numeric"
      />

      <Text>Segundo número:</Text>
      <TextInput
        value={num2} 
        onChangeText={setNum2}
        keyboardType="numeric"
      />

      <TouchableOpacity onPress={dividir}>
        <Text>Calcular</Text>
      </TouchableOpacity>

      <Text>{result}</Text>
    </View>
  );
};

export default DivisionScreen;
