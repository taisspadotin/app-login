import { Login } from "./pages/Login";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./themes";
import { useColorScheme } from "nativewind";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HelpCenter } from "./pages/HelpCenter";

const Stack = createStackNavigator();

const App = (): JSX.Element => {
  const scheme = useColorScheme();
  return (
    <ThemeProvider theme={scheme === "dark" ? darkTheme : lightTheme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "" }}
          />
          <Stack.Screen
            name="HelpCenter"
            component={HelpCenter}
            options={{ title: "Central de ajuda" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
