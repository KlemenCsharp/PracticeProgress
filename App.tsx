import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { createContext, useEffect, useState } from 'react';
import AppLoading from 'expo-app-loading';
import HomeScreen from './screens/HomeScreen';
import { darkTheme, theme } from './theme';
import { init } from './utils/database';

const Stack = createNativeStackNavigator();

export const ThemeContext = createContext(theme);

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);
  // TODO: Popravi ko bos implementiral DTO-je oziroma modele
  // eslint-disable-next-line
  const [darkMode] = useState(false);

  useEffect(() => {
    init()
      .then(() => {
        setDbInitialized(true);
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, []);

  if (!dbInitialized) {
    return <AppLoading />;
  }

  return (
    <ThemeContext.Provider value={darkMode ? darkTheme : theme}>
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="dark" />
      {/* TODO: Using switch only as a test for changing themes */}
      {/* <Switch value={darkMode} onValueChange={setDarkMode} /> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="PracticeProgress" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}
