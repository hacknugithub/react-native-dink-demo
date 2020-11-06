import React, { useState } from "react";

const initState = [
  { id: 0, title: "Garfield", tag: "cats" },
  { id: 1, title: "Garfield2", tag: "cats" },
  { id: 2, title: "Garfield3", tag: "cats" },
  { id: 3, title: "Garfield4", tag: "cats" },
  { id: 4, title: "Garfield5", tag: "cats" },
  { id: 5, title: "Garfield6", tag: "cats" },
  { id: 6, title: "Garfield7", tag: "cats" },
];

const PetContext = React.createContext([[], () => {}]);

const PetProvider = (props) => {
  const [state, setState] = useState(initState);
  const getState = () => {
    return state;
  };
  return (
    <PetContext.Provider value={[state, setState, getState]}>
      {props.children}
    </PetContext.Provider>
  );
};

export { PetContext, PetProvider };
