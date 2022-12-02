import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Router from "./router";
import "./index.css"
import Header from "./components/header";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <Router />
    </ThemeProvider>
  );
};

export default App;
