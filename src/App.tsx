import React, { useState } from "react";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import { Provider as AppProvider } from "./AppProvider";
import { AppContainerStyled } from "./app.style";
import Login from "./containers/login";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";

const App: React.FC = props => {
  const loggedInObj = localStorage.getItem("eastone-app-auth");
  const [loggedInUser, setloggedInUser] = useState(JSON.parse(loggedInObj || "{}"));
  const login = () => {};
  const logout = () => {};
  return (
    <AppProvider
      value={{
        userObj: loggedInUser,
        login,
        logout
      }}>
      <Router>
        <AppContainerStyled>
          {/* <ThemeProvider mode="light" theme={theme}> */}
          <div className="app-header">
            <Header />
          </div>
          <div className="app-body">
            <div className="app-content">
              <Switch>
                <Route exact={true} path="/" render={() => <Redirect to="/login" />} />
                <Route exact={true} path="/login" component={Login} />
              </Switch>
            </div>
          </div>
          <div className="app-footer">
            <Footer />
          </div>
          {/* </ThemeProvider> */}
        </AppContainerStyled>
      </Router>
    </AppProvider>
  );
};

export default App;
