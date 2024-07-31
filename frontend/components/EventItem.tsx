import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface EventItemProps {
  id: string;
  title: string;
  description: string;
  onPress: (id: string, title:string, description: string) => void; 
}

const EventItem: React.FC<EventItemProps> = ({ id, title, description, onPress }) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={() => onPress(id, title, description)}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
    backgroundColor: '#fff', 
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default EventItem;
