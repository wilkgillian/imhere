import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert
} from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import Participant from '../../components/Participant';

export default function Home() {
  const [name, setName] = useState('');
  const [participants, setParticipants] = useState<string[]>([]);
  function handleParticipantAdd(name: string) {
    if (participants.includes(name)) {
      Alert.alert(`O participante ${name} já existe`);
      return;
    }
    setParticipants([...participants, name]);
  }
  function removeParticipant(name: string) {
    if (participants.includes(name)) {
      setParticipants(prevState =>
        prevState.filter(participant => participant != name)
      );
      Alert.alert(`${name} Deletado!`);
    }
  }
  function handleRemoveParticipant(name: string) {
    Alert.alert(
      'Remover',
      `Tem certeza que deseja remover o participante ${name}?`,
      [
        {
          text: 'Sim',
          onPress: () => removeParticipant(name)
        },
        {
          text: 'Não',
          style: 'cancel'
        }
      ]
    );
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
          value={name}
          onChangeText={e => setName(e)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleParticipantAdd(name)}
        >
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
