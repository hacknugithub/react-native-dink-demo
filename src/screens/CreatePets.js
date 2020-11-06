import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import CreatePetForm from "../components/CreatePetForm";
import { Title } from "react-native-paper";
import { PetContext } from "../context/PetContext";
import { useNavigation } from "@react-navigation/native";

const CreatePets = () => {
  const [state, setState] = useContext(PetContext);
  const navigation = useNavigation();

  const submitForm = (data) => {
    let update = [...state];
    let ids = update.map((obj) => obj.id);
    ids.sort((a, b) => b - a);

    let updData = { ...data, id: ids[0] + 1 };

    setState([...state, updData]);
    navigation.navigate("Pets");
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
