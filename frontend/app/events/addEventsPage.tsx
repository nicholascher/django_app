import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function AddEventPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const router = useRouter();

  const handleConfirm = (selectedDate: Date) => {
    setDatePickerVisibility(false);
    setDate(selectedDate.toISOString()); 
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://0.0.0.0:8000/api/event/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          description,
          date,
        }),
      });

      const result = await response.json();
      console.log(result)
      console.log('Event added:', result);
      Alert.alert('Event added!');
      router.back();
    } catch (error: any) {
      Alert.alert('Error');
      console.log(date)
      console.log(error)
    }
  };

  function jsonDateToString(date: string) {
    return new Date(date).toDateString()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New Event</Text>
      <TextInput
        style={styles.input}
        placeholder="Event Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Select Date" onPress={() => setDatePickerVisibility(true)} />
      <Text style={styles.input}>{jsonDateToString(date)}</Text>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={() => setDatePickerVisibility(false)}
      />
      <Button title="Add Event" onPress={handleSubmit} />
      <Button title="Back" onPress={()=> router.back()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 5,
    padding: 8,
    marginBottom: 16,
  },
});
