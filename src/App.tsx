import React from "react";
import { ThemeProvider } from "./theme";

const App: React.FC = props => {
  return (
    <ThemeProvider>
      <div className="App">I am boilerplate</div>
    </ThemeProvider>
  );
};

export default App;
