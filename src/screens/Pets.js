import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { List } from "react-native-paper";
import PetList from "../components/PetList";
import { PetContext } from "../context/PetContext";

const Pets = () => {
  const [state] = useContext(PetContext);

  return (
    <ScrollView>
      <List.Section>
        <PetList items={state} />
      </List.Section>
    </ScrollView>
  );
};

export default Pets;

const styles = StyleSheet.create({});
