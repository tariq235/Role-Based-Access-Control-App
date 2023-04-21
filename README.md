# Architecture and Code Explanation

The architecture of this app is based on React context API, which allows for sharing state across different components without having to pass props through multiple levels of components. The app consists of several different components:

## index.js

index.js is the entry point of the application, it renders the App component and the NavBar component inside a React.Fragment.

## App.js

App.js is the main component of the application, it uses the useState hook to manage the userRole and currentPage state. It also defines an updatePage function that updates the currentPage state when called. The component renders the NavBar component and the LoginPage or ExplorePage component depending on the value of currentPage.


## context.js

context.js defines the AuthContext object that is used to share state across components.

## LoginPage.js

LoginPage.js is the component that renders the login page. It uses the useState hook to manage the username and password state. When the login button is clicked, it performs some dummy authentication logic (username and password must be "test") and if the user is authenticated, calls the updatePage function passed as props to update the currentPage state and sets the userRole state to "ISSUER".

## ExplorePage.js

ExplorePage.js is the component that renders the explore page. It uses the AuthContext.Consumer component to access the userRole state from the context and renders the corresponding data from a json object based on the userRole.

## NavBar.js

NavBar.js is the component that renders the navigation bar at the top of the page. It uses the AuthContext.Consumer component to access the currentPage state from the context and renders two buttons, one for "login" and one for "explore", each with an onClick function that calls the updatePage function passed as props to update the currentPage state.
