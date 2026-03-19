import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import PublicRouter from "../router/PublicRouter";
import Header from "../frontend/layouts/header";
import Footer from "../frontend/layouts/footer";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../styles/components/themes";
import { GlobalStyle } from "../styles/components/globalStyle";
import ScrollToTop from "../hooks/ScrollToTop";
import { Toaster } from "react-hot-toast";
import { MetaContextProvider } from "../stores/MetaContext";

function App() {
      return (
            <>
                  <MetaContextProvider>
                        <GlobalStyle />
                        <ThemeProvider theme={lightTheme}>
                              <Toaster position="top-right" />
                              <Router>
                                    <ScrollToTop />
                                    <Header />
                                    <PublicRouter />
                                    <Footer />
                              </Router>
                        </ThemeProvider>
                  </MetaContextProvider>
            </>
      );
}

export default App;
