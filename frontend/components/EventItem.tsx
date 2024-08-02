import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface EventItemProps {
  id: string;
  name: string;
  description: string;
  date: string;
  onPress: (id: string, name: string, description: string, date: string) => void;
}

const EventItem: React.FC<EventItemProps> = ({
  id,
  name,
  description,
  date,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onPress(id, name, description, date)}
    >
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    borderWidth:1, 
    borderColor: '#c5c5c5', 
    borderRadius: 20, 
    marginVertical: 5, 
    padding: 30, 

  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333", 
  },
});

export default EventItem;
