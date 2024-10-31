import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Ocorrencia() {
  const dadosMocados = [
    { local: 'Local 1', data: '01/01/2024', horario: '10:00' },
    { local: 'Local 2', data: '02/01/2024', horario: '14:30' },
    { local: 'Local 3', data: '03/01/2024', horario: '16:45' },
    { local: 'Local 4', data: '04/01/2024', horario: '09:15' },
    { local: 'Local 5', data: '05/01/2024', horario: '12:00' },
    { local: 'Local 6', data: '06/01/2024', horario: '18:20' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ocorrência</Text>
      <View style={styles.mainBox}>
        {dadosMocados.map((dados, index) => (
          <View key={index} style={styles.innerBox}>
            <View style={styles.infoRow}>
              <Icon name="map-marker" size={20} color="#000" />
              <Text style={styles.infoText}>Local: {dados.local}</Text>
            </View>
            <View style={styles.infoRow}>
              <Icon name="calendar" size={20} color="#000" />
              <Text style={styles.infoText}>Data: {dados.data}</Text>
            </View>
            <View style={styles.infoRow}>
              <Icon name="clock-o" size={20} color="#000" />
              <Text style={styles.infoText}>Horário: {dados.horario}</Text>
            </View>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Crie a sua</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 35
  },
  mainBox: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },
  innerBox: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  infoText: {
    color: '#000',
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#333333',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});