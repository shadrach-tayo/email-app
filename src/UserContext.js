import React from "react";
import { FAKE_USER } from "./api";

let UserContext;
const { Provider, Consumer } = (UserContext = React.createContext());
// Context.Consumer, Context.Provider

class UserProvider extends React.Component {
  state = {
    user: FAKE_USER,
    onLogin: this.handleLogin,
    onLogout: this.handleLogout
  };

  handleLogin = user => {
    this.setState({ currentUser: user });
  };

  handleLogout = () => {
    this.setState({ currentUser: null });
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}
export { UserProvider, Consumer as UserConsumer, UserContext };
