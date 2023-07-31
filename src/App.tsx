import { ChakraProvider, extendTheme, CSSReset, Box } from "@chakra-ui/react";
import AppStateProvider from "./context/AppStateProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppTabs from "./components/AppTabs";
import { appTheme } from "./utils/constants";

const theme = extendTheme(appTheme);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <CSSReset />
        <AppStateProvider>
          <Header />
          <AppTabs />
          <Footer />
        </AppStateProvider>
      </Box>
    </ChakraProvider>
  );
}

export default App;
