import React from "react";
import Button from "./Button";

const Header = ({ title, onAddToggle, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        title={showAdd ? "Close" : "Add"}
        color={showAdd ? "red" : "green"}
        onClick={onAddToggle}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
