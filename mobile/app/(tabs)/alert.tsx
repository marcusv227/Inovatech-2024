import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../../assets/styles/stylesAlert';
import { MapPinned, CalendarDays, Clock } from 'lucide-react-native'
import { Card, List, TouchableRipple } from 'react-native-paper';

type AlertItem = {
  local: string
  data: string
  horario: string
  descricao: string;
}




export default function Ocorrencia() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);


  const dadosMocados = [
    {
      "local": "T1 - Manaus",
      "data": "15/11/2024",
      "horario": "22:30",
      "descricao": "Assalto a mão armada, onde o criminoso abordou a vítima enquanto ela estava no celular e roubou seu aparelho e carteira."
    },
    {
      "local": "Bairro Vieiraveis",
      "data": "16/11/2024",
      "horario": "19:00",
      "descricao": "Roubo de veículo, onde o motorista foi rendido por dois indivíduos armados que o forçaram a sair do carro e fugiram em alta velocidade."
    },
    {
      "local": "Educandos",
      "data": "17/11/2024",
      "horario": "03:00",
      "descricao": "Homicídio, onde uma discussão entre dois indivíduos culminou em um dos envolvidos disparando contra o outro, causando sua morte no local."
    },
    {
      "local": "Jorge Teixeira",
      "data": "18/11/2024",
      "horario": "16:30",
      "descricao": "Furto em loja, onde o criminoso se aproveitou de um descuido do atendente e roubou diversos itens de vestuário de alto valor."
    },
    {
      "local": "Cidade Nova",
      "data": "19/11/2024",
      "horario": "20:45",
      "descricao": "Vandalismo, durante uma partida de futebol, um grupo de torcedores invadiu o campo e destruiu equipamentos de segurança do estádio."
    }

  ];
  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ocorrências</Text>
      <View style={styles.mainBox}>
        {dadosMocados.map((dados, index) => (
          <Card
            key={index}
            style={[styles.card, expandedIndex === index && styles.expandedCard]}
            elevation={2}
          >
            <TouchableRipple onPress={() => toggleExpand(index)}>
              <View style={styles.cardHeader}>
                <View style={styles.infoRow}>
                  <MapPinned size={20} color="#000" />
                  <Text style={styles.infoText}>Local: {dados.local}</Text>
                </View>
                <View style={styles.infoRow}>
                  <CalendarDays size={20} color="#000" />
                  <Text style={styles.infoText}>Data: {dados.data}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Clock size={20} color="#000" />
                  <Text style={styles.infoText}>Horário: {dados.horario}</Text>
                </View>
              </View>
            </TouchableRipple>
            {expandedIndex === index && (
              <Card.Content>
                <Text style={styles.descriptionText}>Descrição: {dados.descricao}</Text>
              </Card.Content>
            )}
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}
