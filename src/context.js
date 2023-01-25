import React from "react";

const AuthContext = React.createContext({
  userRole: null,
  currentPage: "login",
});

export default AuthContext;
