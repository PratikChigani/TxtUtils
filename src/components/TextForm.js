import React, { useState } from "react";

function TextForm(props) {
  const handleOnClickUpper = () => {
    setText(text.toUpperCase());
    props.showAlert("Text has been converted to uppercase.", "success");
    props.mySetTimeout();
  };

  const handleOnClickLower = () => {
    setText(text.toLowerCase());
    props.showAlert("Text has been converted to lowercase.", "success");
    props.mySetTimeout();
  };

  const handleOnClickCap = () => {
    let trimmedText = text.trim();
    let capedText = trimmedText
      .split(" ")
      .map(
        (element) =>
          element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
      )
      .join(" ");
    setText(capedText);
    props.showAlert("Text has been capitalized.", "success");
    props.mySetTimeout();
  };

  const handleOnClickClear = () => {
    setText("");
    props.showAlert("Text has been cleared.", "success");
    props.mySetTimeout();
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text has been copied to clipboard.", "success");
    props.mySetTimeout();
  };

  const [text, setText] = useState("");

  const handleExtraSpaces = () => {
    let updatedText = text.split(/[ ]+/);
    setText(updatedText.join(" "));
    props.showAlert("Extra spaces has been removed from the text.", "success");
    props.mySetTimeout();
  };

  let words = 0;
  let characters = 0;
  text
    .trim()
    .split(" ")
    .forEach((element) => {
      if (element.trim().length > 0) {
        words++;
        characters += element.trim().length;
      }
    });
  return (
    <>
      <div>
        <h1
          className={`text-${props.mode === "light" ? "dark" : "light"} my-3`}
        >
          {props.heading}
        </h1>
        <div className="my-3 mb-3">
          <textarea
            name="myBox"
            id="myBox"
            cols="30"
            rows="5"
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={props.bodyMode}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary br mx-1"
          onClick={handleOnClickUpper}
          style={props.btnMode}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary br mx-1"
          onClick={handleOnClickLower}
          style={props.btnMode}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary br mx-1"
          style={props.btnMode}
          onClick={handleOnClickCap}
        >
          Capitalize
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary br mx-1"
          style={props.btnMode}
          onClick={handleOnClickClear}
        >
          Clear
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary br mx-1"
          style={props.btnMode}
          onClick={handleCopy}
        >
          Copy
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary br mx-1"
          style={props.btnMode}
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="accordion my-3" id="accordionExample">
        <div className="accordion-item" style={props.bodyMode}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Text Summary
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                {words} words & {characters} characters.
              </p>
              <hr />
              <p>{(0.48 * words) / 60} minutes to read</p>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={props.bodyMode}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Preview
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {text.length > 0
                ? text
                : "Enter something in the above textbox to see preview here."}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TextForm;
