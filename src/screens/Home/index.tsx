import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Participant from '../../components/Participant';

export default function Home() {
  function handleParticipantAdd() {
    console.log('Teste');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 22 de outubro de 2022</Text>
      <Text style={styles.eventDate}>Parque de exposições</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Participant />
      <Participant />
    </View>
  );
}
