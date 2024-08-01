import React from "react";
import { SafeAreaView, Text, Button, StyleSheet, View } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function EventsPage() {
  const router = useRouter();
  const { id, title, description } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
            <Text style={styles.header}>Event Details</Text>
            <View style={styles.infoContainer}>
            </View>
            <View style={styles.infoContainer}>
            <Text style={styles.label}>Title:</Text>
            <Text style={styles.info}>{title}</Text>
            </View>
            <View style={styles.infoContainer}>
            <Text style={styles.label}>Description:</Text>
            <Text style={styles.info}>{description}</Text>
            </View>
            <Button
            title="Back"
            onPress={() => router.back()}
            color="#007BFF" 
            />
        </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', 
  },
  contentContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF', 
    borderRadius: 10,
    margin: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, 
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', 
  },
  infoContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444', 
  },
  info: {
    fontSize: 16,
    color: '#333', 
  },
});
