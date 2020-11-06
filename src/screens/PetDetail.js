import React from "react";
import { StyleSheet } from "react-native";

import { Card, Title } from "react-native-paper";

const PetDetail = ({ route }) => {
  const { title, detail } = route.params;
  return (
    <Card style={styles.card}>
      <Card.Title title={title} />
      <Card.Content>
        <Title>{detail}</Title>
      </Card.Content>
    </Card>
  );
};

export default PetDetail;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
  },
});
