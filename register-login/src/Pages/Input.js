import "./Form.css";
import React from "react";
import { useState } from "react";

export const Input = ({ name, label, form, setForm, type }) => {
  const [isFocus, setIsFocus] = useState(false);

  const changeHandler = (event) => {
    setForm((prevState) => ({
      ...prevState,
      [name]: event.target.value,
    }));
  };

  return (
    <>
      <div className="input-container ic">
        <input
          name={name}
          value={form[name]}
          id={name}
          className="input"
          type={type}
          onChange={changeHandler}
          onFocus={() => setIsFocus(true)}
          onBlur={() => {
            if (!form[name]) {
              setIsFocus(false);
            }
          }}
        />
        <div className="cut"></div>
        <label
          htmlFor={name}
          className={`placeholder ${isFocus ? "active" : ""}`}
        >
          {label}
        </label>
      </div>
    </>
  );
};

export default Input;
