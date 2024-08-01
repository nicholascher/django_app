import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface EventItemProps {
  id: string;
  title: string;
  description: string;
  onPress: (id: string, title: string, description: string) => void;
}

const EventItem: React.FC<EventItemProps> = ({
  id,
  title,
  description,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onPress(id, title, description)}
    >
      <Text style={styles.title}>{title}</Text>
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
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333", 
  },
});

export default EventItem;
