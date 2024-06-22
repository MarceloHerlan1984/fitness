import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

const ExerciseListItem = ({ item }) => {
  return (
    <Link href={`/${item.name}`} asChild>
      <Pressable style={styles.exerciseContainer}>
        <Text style={styles.exerciseName}>{item.name}</Text>
        <Text style={{ color: "gray" }}>{item.muscle.toUpperCase()}</Text>
      </Pressable>
    </Link>
  );
};

export default ExerciseListItem;

const styles = StyleSheet.create({
  exerciseName: {
    fontSize: 24,
    fontWeight: "600",
  },
  exerciseContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    gap: 5,
    elevation: 4,
  },
});
