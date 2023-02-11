import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Index from "./screens/Index";
import Header from "./layouts/Header";
import CSR from "./screens/CSR";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <Header />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Home"
            component={Index}
            options={{ title: "Welcome" }}
          />

          <Stack.Screen name="CSR" component={CSR} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
