import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import exercises from "../../assets/data/exercises";

export default function ExerciseDetailScreen() {
  const params = useLocalSearchParams();

  const exercise = exercises.find((item) => item.name === params.name);

  if (!exercise) {
    return <Text>Exercise not found</Text>;
  }

  return (
    <ScrollView style={{ padding: 10, gap: 10 }}>
      <Stack.Screen options={{ title: exercise.name }} />
      <View style={styles.panel}>
        <Text style={styles.exerciseName}>{exercise.name}</Text>
        <Text style={{ color: "gray" }}>{exercise.muscle.toUpperCase()}</Text>
      </View>
      <View style={styles.panel}>
        <Text style={styles.instructions}>{exercise.instructions}</Text>
      </View>
    </ScrollView>
  );
}

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
  instructions: {
    fontHeigth: 16,
    lineHeight: 22,
  },
  panel: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
  },
});
