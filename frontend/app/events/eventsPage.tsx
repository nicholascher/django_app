import React, { useCallback, useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  Button,
  StyleSheet,
  View,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useIsFocused } from '@react-navigation/native';


export default function EventsPage() {
  const isFocused = useIsFocused();
  const router = useRouter();
  const { id,} = useLocalSearchParams();

  const [eventDetails, setEventDetails] = useState({ name: "", description: "", date: "" });

  useEffect(() => {
    if (isFocused) {
      fetchEventDetails();
    }

  }, [isFocused]);

  const fetchEventDetails = async () => {
    try {
      const response = await fetch(`http://0.0.0.0:8000/api/event/${id}/`);
      if (response.ok) {
        const data = await response.json();
        setEventDetails(data);
      }
    } catch (error) {
      console.error("Error fetching event details: ", error);
    }
  };



  function jsonDateToString(date: string) {
    return new Date(date).toDateString()
  }

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://0.0.0.0:8000/api/event/${id}/`, {
        method: "DELETE",
      });

      if (response.ok) {
        Alert.alert("Success", "Event deleted successfully!", [
          { text: "OK", onPress: () => router.back() },
        ]);
      }
    } catch (error) {
      console.error("Error deleting event: ", error);
      Alert.alert("Error", "Error deleting event! Please try again.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backArrowContainer}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>

        <Text style={styles.header}>Event Details</Text>

        <View style={styles.infoContainer}>
          <Text style={styles.header2}>{eventDetails.name}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Description:</Text>
          <Text style={styles.info}>{eventDetails.description}</Text>
          <Text style={styles.info}>{jsonDateToString(eventDetails.date)}</Text>
        </View>

        <View style={styles.buttonContainer}>
        <TouchableOpacity
            style={[styles.button, styles.editButton]}
            onPress={() =>
              router.push({
                pathname: "events/editEventsPage/",
                params: { id, 
                          name: eventDetails.name, 
                          description: eventDetails.description,
                          date: eventDetails.date,
                        },
              })
            }
          >
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.deleteButton]}
            onPress={handleDelete}
          >
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>


        </View>
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
    justifyContent: "center",
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
  backArrowContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 10,
  },
  backArrow: {
    fontSize: 28,
    color: "#007BFF",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 0, // Adjusted margin to add space below the arrow
    marginBottom: 20,
    color: "#333",
    textAlign: "center", // Center align header text
  },
  header2: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#444",
  },
  infoContainer: {
    marginBottom: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#444",
  },
  info: {
    fontSize: 16,
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  deleteButton: {
    backgroundColor: "#DC3545",
    borderColor: "#DC3545",
  },
  editButton: {
    backgroundColor: "#28A745",
    borderColor: "#28A745",
  },
});
