import React from "react";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { List } from "react-native-paper";
import PetListItem from "./PetListItem";

const PetList = ({ items }) => {
  const navigation = useNavigation();
  const listItems = items.map((obj) => {
    let handleNav = (t, d) => {
      navigation.dispatch(
        CommonActions.navigate({
          name: "Detail",
          params: { title: t, detail: d },
        })
      );
    };
    return (
      <PetListItem
        key={obj.id}
        text={obj.title}
        onPressNav={() => handleNav(obj.title, obj.tag)}
      />
    );
  });
  return <List.Section>{listItems}</List.Section>;
};

export default PetList;
