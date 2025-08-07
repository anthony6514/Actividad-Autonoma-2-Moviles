import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { estilos } from '../theme/appTheme';

type RootStackParamList = {
  Bienvenida: undefined;
  Division: undefined;
};

type BienvenidaScreenProps = StackScreenProps<RootStackParamList, 'Bienvenida'>;

const BienvenidaScreen = ({ navigation }: BienvenidaScreenProps) => {
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>Bienvenido</Text>
      
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6399/6399478.png' }}
        style={estilos.imagen}
      />
      
      <TouchableOpacity
        style={[estilos.boton, { padding: 15, borderRadius: 8 }]}
        onPress={() => navigation.navigate('Division')}
      >
        <Text style={estilos.textoBoton}>Acceder</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BienvenidaScreen;