import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#0d011f',
    justifyContent: 'center',
    padding: 20,
  },

  titulo: {
    color: '#e2c4ff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },

  subtitulo: {
    color: '#b388ff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },

  contenedorEntrada: {
    marginBottom: 25,
  },

  etiqueta: {
    color: '#b388ff',
    fontSize: 16,
    marginBottom: 8,
  },

  entrada: {
    backgroundColor: '#1a0333',
    color: '#e2c4ff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#4a1b80',
  },

  boton: {
    backgroundColor: '#4a1b80',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },

  textoBoton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },

  resultado: {
    color: '#e2c4ff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },

  imagen: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  }
});