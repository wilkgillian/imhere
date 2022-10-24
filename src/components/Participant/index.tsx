import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';

interface ParticipantProps {
  name: string;
  handleRemoveParticipant: (name: string) => void;
}

export default function Participant({
  name,
  handleRemoveParticipant
}: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleRemoveParticipant(name)}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
