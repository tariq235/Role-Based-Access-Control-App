import React from "react";
import AuthContext from "./context";
import "./active-button.css";

function NavBar() {
  return (
    <AuthContext.Consumer>
      {({ currentPage, updatePage }) => (
        <div>
          <button
            className={currentPage === "login" ? "active" : ""}
            onClick={() => updatePage("login")}
          >
            Login
          </button>
          <button
            className={currentPage === "explore" ? "active" : ""}
            onClick={() => updatePage("explore")}
          >
            Explore
          </button>
        </div>
      )}
    </AuthContext.Consumer>
  );
}

export default NavBar;
