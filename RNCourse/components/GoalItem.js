import { View, Text, StyleSheet, Pressable } from "react-native";

export default function GoalItem(props) {
  return (
    <View style={styles.goalContent}>
      <Pressable
        onPress={props.onDeleteGoal.bind(this, props.id)}
        android_ripple={{ color: "#350672ff" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalContent: {
    backgroundColor: "#5e0acc",
    marginVertical: 5,
    fontWeight: 800,
    fontSize: 18,
    borderRadius: 10,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: "white",
  },
});
