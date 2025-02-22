import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Button, Checkbox, Text } from "react-native-paper";

export default function SkillSelectionScreen() {
  const skills = ["Machine Learning", "Deep Learning", "DevOps", "Frontend Development", "Backend Development"];
  const [selectedSkills, setSelectedSkills] = useState([]);

  const toggleSkill = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleSubmit = () => {
    console.log("Selected Skills:", selectedSkills);
    // Store in database or navigate to the next screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Skills</Text>
      <FlatList
        data={skills}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={selectedSkills.includes(item) ? "checked" : "unchecked"}
              onPress={() => toggleSkill(item)}
            />
            <Text>{item}</Text>
          </View>
        )}
      />
      <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        Submit
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  checkboxContainer: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  button: { marginTop: 20 },
});
