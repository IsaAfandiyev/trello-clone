import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../src/pages/login";
import SignUp from "../src/pages/signUp";
import { AuthProvider } from "./Auth";
import WithPrivateRoute from "./privateRoot/index";
import CardModule from "./modules/cardModules";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <WithPrivateRoute>
                <CardModule />
              </WithPrivateRoute>
            }
          />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
