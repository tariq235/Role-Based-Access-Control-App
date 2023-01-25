import React, { useState } from 'react';

function LoginPage({ updatePage, setUserRole }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    // Dummy authentication logic
    const authenticated = username === "test" && password === "test";

    if (authenticated) {
      setUserRole("ISSUER");
      updatePage("explore");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default LoginPage;
