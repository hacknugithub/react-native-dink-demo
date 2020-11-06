import React from "react";
import { StyleSheet } from "react-native";
import { List } from "react-native-paper";

const PetListItem = ({ text, onPressNav }) => {
  return <List.Item title={text} onPress={() => onPressNav()}></List.Item>;
};

export default PetListItem;

const styles = StyleSheet.create({});
