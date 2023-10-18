import { Login } from "./pages/Login";
import { ThemeProvider } from "styled-components/native";
import { darkTheme, lightTheme } from "./themes";
import { useColorScheme } from "nativewind";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HelpCenter } from "./pages/HelpCenter";

const Stack = createStackNavigator();

const App = (): JSX.Element => {
  const scheme = useColorScheme();
  const currentTheme = scheme?.colorScheme === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: "",
              headerStyle: {
                backgroundColor: currentTheme.background,
              },
            }}
          />
          <Stack.Screen
            name="HelpCenter"
            component={HelpCenter}
            options={{
              title: "Central de ajuda",
              headerStyle: {
                backgroundColor: currentTheme.background,
              },
              headerTintColor: currentTheme.colorPrimary,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
