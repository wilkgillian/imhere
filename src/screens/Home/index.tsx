import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TextInputChangeEventData,
  NativeSyntheticEvent
} from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import Participant from '../../components/Participant';

export default function Home() {
  let participants = [
    'Jão',
    'tonho',
    'jorgin',
    'norbit',
    'junho',
    'zé',
    'igo',
    'bruno',
    'mamaco'
  ];
  function handleParticipantAdd() {
    // participants.push(name);
    console.log('Teste');
  }
  function handleRemoveParticipant(name: string) {
    participants.map(participant => {
      if (name === participant) {
        participants.pop();
      }
    });
    console.log(`Participante removido ${name}`);
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
      <FlatList
        data={participants}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            handleRemoveParticipant={() => handleRemoveParticipant(item)}
          />
        )}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmpty}>
            Nenhum participante chegou ainda? Adicione participantes no botão
            acima
          </Text>
        )}
      />
    </View>
  );
}
