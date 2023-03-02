// Dépendances
import { Redirect, Route, Switch } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";

// Composants
import { Navbar, Footer } from "./Components";
import { Accueil, Story, Projects } from "./Pages";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props: any) => props.theme.backgroundColor};
    box-shadow: inset 0 0 50px #1f1f1f;
  }
  body::-webkit-scrollbar {
    width: 12px; /* width of the entire scrollbar */
  }
  body::-webkit-scrollbar-track {
    background: ${(props: any) =>
    props.theme.primary}; /* color of the tracking area */
  }
  body::-webkit-scrollbar-thumb {
    background-color: ${(props: any) =>
    props.theme.backgroundColor}; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 1px solid ${(props: any) =>
    props.theme.primary};; /* creates padding around scroll thumb */
  }
  ::selection {
    background-color: ${(props: any) => props.theme.secondary};
    color: #1f1f1f;
  }
`;

function App() {
  const theme = useSelector((state: any) => state.theme);

  return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <GlobalStyle />
          <Navbar />

          <Switch>
            <Route path="/accueil" component={Accueil} />
            <Route path="/story" component={Story} />
            <Route path="/project" component={Projects} />
            <Route path="/contact" render={() => "<h1>A étiter Contact</h1>"} />
            <Redirect to="/accueil" />
          </Switch>

          <Footer />
        </div>
      </ThemeProvider>
  );
}

export default App;