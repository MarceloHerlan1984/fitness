import { StatusBar } from "expo-status-bar";
import exercises from "../../assets/data/exercises";
import { FlatList, StyleSheet, View } from "react-native";
import ExerciseListItem from "../../src/components/ExerciseListItem";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        contentContainerStyle={{ gap: 5 }}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item, index }) => <ExerciseListItem item={item} />}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gainsboro",

    justifyContent: "center",
    padding: 10,
  },
});
