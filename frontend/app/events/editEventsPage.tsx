import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, Button, StyleSheet, View, Alert, TouchableOpacity } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import DateTimePicker from '@react-native-community/datetimepicker';


export default function EditEventPage() {
  const router = useRouter();
  const { id, name, description, date } = useLocalSearchParams();

  const initialDate = new Date(date as string)

  const [eventName, setEventName] = useState<string>(name as string || "");
  const [eventDescription, setEventDescription] = useState<string>(description as string|| "");
  const [eventDate, setEventDate] = useState<Date>(initialDate)
  const [showDatePicker, setShowDatePicker] = useState(false)

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://0.0.0.0:8000/api/event/${id}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: eventName,
          description: eventDescription,
          date: eventDate,
        }),
      });

      if (response.ok) {
        Alert.alert("Success", "Event updated successfully!", [
          { 
            text: "OK", 
            onPress: () => {
              router.back();
            }
          },
        ]);
      } else {
        Alert.alert("Error", "Failed to update the event. Please try again.");
      }
    } catch (error) {
      console.error("Error updating event:", error);
      Alert.alert("Error", "An error occurred. Please try again.");
    }
  };
  const onDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setEventDate(selectedDate);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.header}>Edit Event</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.input}
            value={eventName}
            onChangeText={setEventName}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Description:</Text>
          <TextInput
            style={styles.input}
            value={eventDescription}
            onChangeText={setEventDescription}
            multiline
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Date:</Text>
          <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
            <Text style={styles.dateText}>{eventDate.toDateString()}</Text>
          </TouchableOpacity>
            {showDatePicker && (
                <DateTimePicker
                    value={eventDate}
                    mode="date"
                    display="default"
                    onChange={onDateChange}
                    onTouchCancel={() => setShowDatePicker(false)}
                />
                )}
        </View>
        <Button title="Update" onPress={handleUpdate} color="#007BFF" />
        <Button title="Cancel" onPress={() => router.back()} color="#6C757D" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  contentContainer: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    margin: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  infoContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#444",
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: "#333",
  },  dateText: {
    fontSize: 16,
    color: '#333',
  },
});
