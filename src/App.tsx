import React, { useEffect } from "react";
import axios from "axios";

import { ThemeProvider } from "./theme";

const App: React.FC = props => {
  useEffect(function() {
    axios.get("/api/v1/sanky-data").then(data => {
      console.log("data", data);
    });
  });
  return (
    <ThemeProvider>
      <div className="App">I am boilerplate</div>
    </ThemeProvider>
  );
};

export default App;
