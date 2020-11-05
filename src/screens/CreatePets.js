import React from "react";
import { StyleSheet, View } from "react-native";
import CreatePetForm from "../components/CreatePetForm";
import { Title } from "react-native-paper";

const CreatePets = () => {
  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Title>Create new Pet</Title>
      <CreatePetForm submitForm={(data) => submitForm(data)} />
    </View>
  );
};

export default CreatePets;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    margin: 10,
  },
});
