import React from "react";
import { EmailConsumer } from "./EmailContext";

const MessageViewer = () => (
  <EmailConsumer>
    {({ currentEmail, onSelectEmail }) => (
      <div className="MessageViewer">
        <div className="message-container">
          <div className="message-header">
            <button className="back-btn" onClick={() => onSelectEmail(null)}>
              back
            </button>
          </div>
          <h2 className="message-text">{currentEmail.subject}</h2>
          <div>{currentEmail.body}</div>
        </div>
      </div>
    )}
  </EmailConsumer>
);

export default MessageViewer;
