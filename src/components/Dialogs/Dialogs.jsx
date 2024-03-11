import React from "react";
import "./Dialogs.css";
import { NavLink } from "react-router-dom";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  // let state = props.dialogsPage;

  // let dialogsElements = state.dialogs.map((d) => (
  //   <DialogsItem name={d.name} key={d.id} />
  // ));
  // let messagesElements = state.messages.map((m) => (
  //   <Message message={m.message} key={m.id} />
  // ));
  // let newMessageBody = state.newMessageBody;

  // let onSendMessageClick = () => {
  //   props.sendMessage();
  // };

  // let newSendMessageCnange = (e) => {
  //   let body = e.target.value;
  //   props.updateNewMessageBody(body); // позволяет вводить данные в поле
  // };

  return (
    <div>
      {/* <div className="dialogs">
        <div className="dialogsItems">{dialogsElements}</div>
        <div className="messages">
          <div>{messagesElements}</div>
          <div>
            <div>
              <textarea
                value={newMessageBody}
                onChange={newSendMessageCnange}
                placeholder="Enter you message"
              ></textarea>
            </div>
            <div>
              <button onClick={onSendMessageClick}>Sent</button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Dialogs;
