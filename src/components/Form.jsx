import React from "react";

const Form = ({ setInputText, inputText }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  return (
    <form className="c-form">
      <input
        type="text"
        className="form-control c-todo-input"
        id="InputName"
        aria-describedby="pokemon"
        placeholder="Pokemon Name"
        value={inputText}
        onChange={inputTextHandler}
      />
    </form>
  );
};

export default Form;
