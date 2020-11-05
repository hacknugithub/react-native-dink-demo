import React from "react";
import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

const AppBarPet = ({ navigation }) => {
  return (
    <Appbar.Header style={{ width: "100%", top: 0 }}>
      <Appbar.Content title="Pet Store" />
      <Appbar.Action
        icon="plus-box"
        onPress={() => navigation.navigate("Create")}
      />
    </Appbar.Header>
  );
};

export default AppBarPet;

const styles = StyleSheet.create({
  appbar: {
    height: "10em",
  },
});
