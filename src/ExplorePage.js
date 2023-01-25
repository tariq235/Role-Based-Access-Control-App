import React from 'react';
import AuthContext from './context';

function ExplorePage() {
  const jsonData = {
    ISSUER: {
      name: "Issuer Page",
      data: [
        { id: 1, name: "issuer 1" },
        { id: 2, name: "issuer 2" },
        { id: 3, name: "issuer 3" },
      ],
    },
    MERCHANT: {
      name: "Merchant Page",
      data: [
        { id: 1, name: "merchant 1" },
        { id: 2, name: "merchant 2" },
        { id: 3, name: "merchant 3" },
      ],
    },
    USER: {
      name: "User Page",
      data: [
        { id: 1, name: "user 1" },
        { id: 2, name: "user 2" },
        { id: 3, name: "user 3" },
      ],
    },
  };

  return (
    <AuthContext.Consumer>
      {({ userRole }) => (
        <div>
          <h1>{jsonData[userRole].name}</h1>
          <ul>
            {jsonData[userRole].data.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      )}
    </AuthContext.Consumer>
  );
}

export default ExplorePage;