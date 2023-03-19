import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {StatusBar} from "expo-status-bar";
import HomeScreen from "./screens/HomeScreen";
import {createContext, useState} from "react";
import {darkTheme, theme} from "./theme";
import {Switch} from "react-native";

const Stack = createNativeStackNavigator();

export const ThemeContext = createContext(theme);

export default function App() {
    const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={darkMode ? darkTheme : theme}>
      <StatusBar style="dark" />
        <Switch value={darkMode} onValueChange={setDarkMode} />
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="PracticeProgress" component={HomeScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}
