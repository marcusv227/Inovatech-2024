import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles}  from '../styles/stylesAlert'

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