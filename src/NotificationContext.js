import React from "react";

const { Provider, Consumer } = React.createContext();

class NotificationProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      notify: this.addMessage
    };
  }

  componentDidMount() {
    this.timer = setInterval(this.cleanup, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  addMessage = text => {
    this.setState(prevState => {
      return {
        messages: [
          ...prevState.messages,
          {
            id: Math.random(),
            text,
            addedAt: new Date().getTime()
          }
        ]
      };
    });
  };

  removeMessage = message => {
    this.setState(prevState => ({
      messages: prevState.messages.filter(m => m.id !== message.id)
    }));
  };

  cleanup = () => {
    const now = new Date().getTime();
    this.setState(prevstate => ({
      messages: prevstate.messages.filter(m => now - m.addedAt < 5000)
    }));
  };

  render() {
    const { messages } = this.state;
    return (
      <Provider value={this.state}>
        <ul className="Notification-container">
          {messages.length > 0 &&
            messages.map(message => (
              <Notification
                key={message.id}
                message={message}
                onClose={() => this.removeMessage(message)}
              />
            ))}
        </ul>
        {this.props.children}
      </Provider>
    );
  }
}

const Notification = ({ message, onClose }) => (
  <li className="Notification">
    {message.text}
    <button className="close-btn" onClick={onClose}>
      &times;
    </button>
  </li>
);

const withNotifier = Component => {
  return function Notified(props) {
    return (
      <Consumer>
        {({ notify }) => <Component {...props} notify={notify} />}
      </Consumer>
    );
  };
};

export { NotificationProvider, Consumer as Notifier, withNotifier };
