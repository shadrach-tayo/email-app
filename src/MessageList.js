import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { EmailContext } from "./EmailContext";

const MessageList = () => {
  const { user } = useContext(UserContext);
  const { loading, emails, onSelectEmail } = useContext(EmailContext);
  return (
    <div className="MessageList">
      {loading ? (
        <div className="no-mesasages">loading...</div>
      ) : emails.length === 0 ? (
        <div className="no-messages">
          Your mailbox is empty, {user.firstName}! 🎉
        </div>
      ) : (
        <ul className="message-container">
          {emails.map(email => (
            <Email key={Math.random()} email={email} onClick={onSelectEmail} />
          ))}
        </ul>
      )}
    </div>
  );
};

const Email = React.memo(({ email, onClick }) => (
  <li className="message-item" onClick={() => onClick(email)}>
    <div className="subject">{email.subject}</div>
    <div className="preview">{email.preview}</div>
  </li>
));

export default MessageList;
