import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import AppLoading from 'expo-app-loading';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import { init } from './utils/database';

const Stack = createNativeStackNavigator();

const lightTheme = {
  ...DefaultTheme,
  colors: {
    primary: 'rgb(0, 99, 154)',
    onPrimary: 'rgb(255, 255, 255)',
    primaryContainer: 'rgb(206, 229, 255)',
    onPrimaryContainer: 'rgb(0, 29, 50)',
    secondary: 'rgb(121, 89, 0)',
    onSecondary: 'rgb(255, 255, 255)',
    secondaryContainer: 'rgb(255, 223, 160)',
    onSecondaryContainer: 'rgb(38, 26, 0)',
    tertiary: 'rgb(56, 107, 1)',
    onTertiary: 'rgb(255, 255, 255)',
    tertiaryContainer: 'rgb(183, 244, 129)',
    onTertiaryContainer: 'rgb(13, 32, 0)',
    error: 'rgb(186, 26, 26)',
    onError: 'rgb(255, 255, 255)',
    errorContainer: 'rgb(255, 218, 214)',
    onErrorContainer: 'rgb(65, 0, 2)',
    background: 'rgb(252, 252, 255)',
    onBackground: 'rgb(26, 28, 30)',
    surface: 'rgb(252, 252, 255)',
    onSurface: 'rgb(26, 28, 30)',
    surfaceVariant: 'rgb(222, 227, 235)',
    onSurfaceVariant: 'rgb(66, 71, 78)',
    outline: 'rgb(114, 119, 127)',
    outlineVariant: 'rgb(194, 199, 207)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(47, 48, 51)',
    inverseOnSurface: 'rgb(240, 240, 244)',
    inversePrimary: 'rgb(150, 204, 255)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(239, 244, 250)',
      level2: 'rgb(232, 240, 247)',
      level3: 'rgb(224, 235, 244)',
      level4: 'rgb(222, 234, 243)',
      level5: 'rgb(217, 231, 241)',
    },
    surfaceDisabled: 'rgba(26, 28, 30, 0.12)',
    onSurfaceDisabled: 'rgba(26, 28, 30, 0.38)',
    backdrop: 'rgba(44, 49, 55, 0.4)',
  },
};

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);

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
    <PaperProvider theme={lightTheme}>
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="PracticeProgress" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
