import React from "react";

// Internals
import { fetchEmails } from "./api";
import { withNotifier } from "./NotificationContext";

let EmailContext;
const { Provider, Consumer } = (EmailContext = React.createContext());

class EmailProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emails: [],
      currentEmail: null,
      error: null,
      loading: true,
      onSelectEmail: this.handleSelectEmail
    };
  }

  componentDidMount() {
    this.setState({ loading: false, error: null });
    fetchEmails()
      .then(emails => {
        this.setState({ emails });
      })
      .catch(error => this.setState({ error }));
    this.refreshInterval = setInterval(this.refresh, 3000);
  }

  refresh = () => {
    fetchEmails().then(emails => {
      this.setState(prevstate => {
        return {
          emails: [...prevstate.emails, ...emails]
        };
      });
      if (emails.length > 0)
        this.props.notify(
          `${emails.length} more email${emails.length > 1 ? "s" : ""} arrived`
        );
    });
  };

  componentWillUnmount() {
    clearInterval(this.refreshInterval);
  }

  handleSelectEmail = email => {
    this.setState({ currentEmail: email });
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

const Wrapped = withNotifier(EmailProvider);
export { Wrapped as EmailProvider, Consumer as EmailConsumer, EmailContext };
