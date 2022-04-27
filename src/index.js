import React from "react";
import ReactDOM from "react-dom";
//Add NavLink to import
//Step 1. Import react-router functions
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import App from "./App";


// //Add basic styling for NavLinks
// const linkStyles = {
//   display: "inline-block",
//   width: "50px",
//   padding: "12px",
//   margin: "0 6px 6px",
//   background: "blue", 
//   textDecoration: "none",
//   color: "white",
// };

//define the NavBar component
// function NavBar() {
//   return (
//     <div>
//       <NavLink
//         to = "/"
//         //set exact so it knows to only set activeSty;e when route is deeply equal to link
//         exact
//         //add styling to Navelink
//         style = {linkStyles}
//         //add prop for activeStyles 
//         activeStyle = {{
//           background: "darkblue",
//         }}
//         >
//         Home
//       </NavLink>
//       <NavLink
//         to = "/about"
//         exact
//         style = {linkStyles}
//         activeStyle = {{
//           background: "darkblue",
//         }}
//         >
//           About
//         </NavLink>
//         <NavLink
//         to = "/login"
//         exact
//         style = {linkStyles}
//         activeStyle = {{
//           background: "darkblue",
//         }}
//         >
//           Login
//         </NavLink>
//         <NavLink
//         to = "/signup"
//         exact
//         style = {linkStyles}
//         activeStyle = {{
//           background: "darkblue",
//         }}
//         >
//           Sign Up
//         </NavLink>
//         <NavLink
//         to = "/messages"
//         exact
//         style = {linkStyles}
//         activeStyle = {{
//           background: "darkblue",
//         }}
//         >
//           Messages
//         </NavLink>
//       </div>
//     );
//   }


// function Home() {
//   return (
//     <div>
//       <h1>Home!</h1>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h1>This is my about component!</h1>
//     </div>
//   );
// }

// function Login() {
//   return (
//     <div>
//       <h1>Login</h1>
//       <form>
//         <div>
//           <input type = "text" name = "username" placeholder = "Username" />
//         </div>
//         <div>
//           <input type = "password" name = "password" placeholder = "Password" />
//         </div>
//         <input type = "submit" value = "Submit" />
//       </form>
//     </div>
//   );
// }

// function SignUp() {
//   return (
//     <div>
//       <h1>Please sign up!</h1>
//     </div>
//   );
// }

// function Messages() {
//   return (
//     <div>
//       <h1>Post your messages here! </h1>
//     </div>
//   );
// }

//Add the NavBar component to our App component
//Step 2. Use <Route> components to define client-side routes in our app
// function App() {
//   return (
//     <div>
//       <NavBar />
//       <Switch>
//         <Route path = "/about">
//           <About />
//         </Route>
//         <Route path = "/login">
//           <Login />
//         </Route>
//         <Route path = "/signup">
//           <SignUp />
//         </Route>
//         <Route path = "/messages">
//           <Messages />
//         </Route>
//         <Route exact path = "/">
//           <Home />
//         </Route>
//     </Switch>
//   </div>
//   );
// }

//Step 3. Use <BrowserRouter> component to wrap the entire application and provide React Router context
// ReactDOM.render(
//   <BrowserRouter>
//     <NavBar />
//     <Switch>
//       <Route exact path = "/about">
//         <About />
//       </Route>
//       <Route exact path = "/login">
//         <Login />
//       </Route>
//       <Route exact path = "/signup">
//         <SignUp />
//       </Route>
//       <Route exact path = "/messages">
//         <Messages />
//       </Route>
//       <Route exact path = "/">
//         <Home />
//       </Route>
//     </Switch>
//     <App />  
//   </BrowserRouter>,
//   document.getElementById("root")
// );


ReactDOM.render(
  <BrowserRouter>
    <App />  
  </BrowserRouter>,
  document.getElementById("root")
);
