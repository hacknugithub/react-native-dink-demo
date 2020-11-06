import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import "react-native-gesture-handler";

import { PetProvider } from "./src/context/PetContext";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Pets from "./src/screens/Pets";
import CreatePets from "./src/screens/CreatePets";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import theme from "./Theme";
import PetDetail from "./src/screens/PetDetail";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator initialRouteName="Pets" headerMode="float">
      <Stack.Screen
        name="Pets"
        component={Pets}
        options={{
          title: "Pet Store",
        }}
      />
      <Stack.Screen
        name="Detail"
        component={PetDetail}
        options={{
          title: "Pet Detail",
        }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        backBehavior="initialRoute"
        shifting={true}
        barStyle={{ backgroundColor: DefaultTheme.colors.primary }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: "Pet Store",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="New"
          component={CreatePets}
          options={{
            tabBarLabel: "New Pet",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="plus-circle"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <PetProvider>
      <PaperProvider>
        <App />
      </PaperProvider>
    </PetProvider>
  );
};
