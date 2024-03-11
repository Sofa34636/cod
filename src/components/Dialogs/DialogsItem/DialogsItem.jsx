import React from "react";
import "./../Dialogs.css";
import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className="dialog" activeClassName="active">
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogsItem;
