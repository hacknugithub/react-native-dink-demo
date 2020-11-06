import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

const CreatePetForm = ({ submitForm }) => {
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");
  const [tagError, setTagError] = useState(undefined);
  const [nameError, setNameError] = useState(undefined);

  const handleSubmit = () => {
    let valid = true;
    if (name === "") {
      valid = false;
      setNameError("Please add a tag");
    }
    if (tag === "") {
      valid = false;
      setTagError("Please provide a name");
    }
    let data = { title: name, tag: tag };
    if (valid) {
      submitForm(data);
      setNameError(undefined);
      setTagError(undefined);
      setName("");
      setTag("");
    }
  };
  return (
    <View>
      <TextInput
        label="Name"
        mode="outlined"
        value={name}
        onChangeText={(name) => setName(name)}
        placeholder="Garfield"
        error={nameError != undefined ? true : false}
        style={styles.input}
      />
      <TextInput
        label="Tag"
        mode="outlined"
        value={tag}
        onChangeText={(tag) => setTag(tag)}
        placeholder="Cats"
        error={tagError != undefined ? true : false}
        style={styles.input}
      />
      <Button
        icon="send"
        mode="contained"
        onPress={handleSubmit}
        style={styles.input}
      >
        {" "}
        Submit
      </Button>
    </View>
  );
};

export default CreatePetForm;

const styles = StyleSheet.create({
  input: {
    margin: 5,
    padding: 2,
  },
});
