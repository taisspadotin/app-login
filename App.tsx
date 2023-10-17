import { Login } from "./pages/Login";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./themes";
import { useColorScheme } from "nativewind";

const App = (): JSX.Element => {
  const scheme = useColorScheme();
  return (
    <ThemeProvider theme={scheme === "dark" ? darkTheme : lightTheme}>
      <Login />
    </ThemeProvider>
  );
};

export default App;
