import React from "react";
import FootList from "./components/FootList";
import FootContextProvider from "./context/FootContext";
import ThemeContextProvider from "./context/ThemeContext";

class App extends React.Component {
  render() {
    return (
      <div>
        <ThemeContextProvider>
          <FootContextProvider>
            <FootList />
          </FootContextProvider>
        </ThemeContextProvider>
      </div>
    );
  }
}

export default App;
