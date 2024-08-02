import React from 'react';
import { useState } from 'react';
import { Text, View, SafeAreaView, Button, TouchableOpacity, StyleSheet} from "react-native";
import EventList from "@/components/EventList";
import { useRouter } from 'expo-router';

export default function Index() {

  const router = useRouter()

  const handleAddEvent = () => {
    router.push('/events/addEventsPage');
  };

  return (
    <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Events</Text>
          <TouchableOpacity style={styles.addButton} onPress={handleAddEvent}>
            <Text style={styles.addButtonText}>Add Event</Text>
          </TouchableOpacity>
        </View>
        <EventList></EventList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  addButton: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
