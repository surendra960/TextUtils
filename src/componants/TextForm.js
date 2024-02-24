
import React, { useState } from "react";


export default function TextForm(props) {
  const [text, setText] = useState("Enter text here2");
  const [textCount, setTextCount] = useState(0);

  const handleUpClick = () => {
    const upperCaseText = text.toUpperCase();
    setText(upperCaseText);
  };
  const handleCount = () => {
    let trimmedText = text.trim();
    let wordsArray = trimmedText.split(/\s+/);
    console.log(wordsArray.length);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h3 className="my-2">{props.heading}</h3>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleChange}
          id="myBox"
          rows="10"
        />
      </div>
      <button
        type="button"
        className="btn btn-primary cursor-pointer"
        onClick={handleUpClick}
      >
        Convert to Uppercase
      </button>
      <button
        type="button"
        className="btn btn-primary cursor-pointer mx-4"
        onClick={handleCount}
      >
        Count Words
      </button>
    </div>
  );
}
