import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { estilos } from '../theme/appTheme';

interface InputFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChangeText,
  placeholder = '',
  keyboardType = 'default',
}) => {
  return (
    <View style={estilos.contenedorEntrada}>
      <Text style={estilos.etiqueta}>{label}</Text>
      <TextInput
        style={estilos.entrada}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        placeholderTextColor="#CCCCCC"
      />
    </View>
  );
};

export default InputField;