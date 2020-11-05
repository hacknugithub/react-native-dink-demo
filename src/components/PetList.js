import React from "react";
import { StyleSheet } from "react-native";
import { List } from "react-native-paper";
import PetListItem from "./PetListItem";

const PetList = ({ items }) => {
  const listItems = items.map((obj) => (
    <PetListItem key={obj.id} text={obj.title} />
  ));
  return (
    <>
      <List.Section>
        <List.Subheader>Your Pets</List.Subheader>
        {listItems}
      </List.Section>
    </>
  );
};

export default PetList;

const styles = StyleSheet.create({});
