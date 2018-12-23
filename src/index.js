import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./MainPage";
import LoginPage from "./LoginPage";
import { UserProvider, UserConsumer } from "./UserContext";
import { EmailProvider } from "./EmailContext";
import { NotificationProvider } from "./NotificationContext";
import "./index.css";

function Root() {
  return (
    <UserConsumer>
      {({ user }) => (user ? <MainPage /> : <LoginPage />)}
    </UserConsumer>
  );
}

ReactDOM.render(
  <NotificationProvider>
    <UserProvider>
      <EmailProvider>
        <Root />
      </EmailProvider>
    </UserProvider>
  </NotificationProvider>,
  document.querySelector("#root")
);

// using react context consumer outside of the matching provider
// const Color = React.createContext();
// const FancyButton = props => (
//   <Color.Consumer>
//     {color => {
//       if (typeof color === "undefined")
//         throw Error("FancyButton requires a Color Provider");
//       return (
//         <button className={`fancy-btn ${color}`} {...props}>
//           Click Me
//         </button>
//       );
//     }}
//   </Color.Consumer>
// );

// const App = () => (
//   <div>
//     <Color.Provider value="black">
//       <FancyButton />
//     </Color.Provider>
//     <Color.Provider value="red">
//       <FancyButton />
//     </Color.Provider>
//     <Color.Provider value="green">
//       <FancyButton />
//     </Color.Provider>
//     <Color.Provider value="blue">
//       <FancyButton />
//     </Color.Provider>
//   </div>
// );

// ReactDOM.render(<App />, document.querySelector("#root"));
