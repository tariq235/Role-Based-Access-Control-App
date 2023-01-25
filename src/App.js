import React, { useState } from "react";
import AuthContext from "./context";
import LoginPage from "./LoginPage";
import ExplorePage from "./ExplorePage";
import NavBar from "./NavBar";

function App() {
  const [userRole, setUserRole] = useState(null);
  const [currentPage, setCurrentPage] = useState("login");

  const updatePage = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <AuthContext.Provider
      value={{ userRole, setUserRole, currentPage, updatePage }}
    >
      <div>
        <NavBar currentPage={currentPage} />
        {currentPage === "login" ? (
          <LoginPage updatePage={updatePage} setUserRole={setUserRole} />
        ) : (
          <ExplorePage updatePage={updatePage} setUserRole={setUserRole} />
        )}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
