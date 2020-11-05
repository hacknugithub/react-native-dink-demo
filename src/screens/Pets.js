import React from "react";
import { StyleSheet, View } from "react-native";
import PetList from "../components/PetList";

const dummyItems = [
  { id: 0, title: "Garfield", tag: "cats" },
  { id: 1, title: "Garfield2", tag: "cats" },
  { id: 2, title: "Garfield3", tag: "cats" },
  { id: 3, title: "Garfield4", tag: "cats" },
  { id: 4, title: "Garfield5", tag: "cats" },
  { id: 5, title: "Garfield6", tag: "cats" },
  { id: 6, title: "Garfield7", tag: "cats" },
];

const Pets = () => {
  return (
    <View>
      <PetList items={dummyItems} />
    </View>
  );
};

export default Pets;

const styles = StyleSheet.create({});
