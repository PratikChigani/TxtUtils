import React from "react";

function About(props) {
  return (
    <div
      className={`container my-5 text-${
        props.mode === "light" ? "dark" : "light"
      }`}
    >
      <h2>About Our Text Utility Tool</h2>
      <p>
        Welcome to our Text Utility website! We're here to make working with
        text easier and more efficient. Whether you're a writer, a student, or
        just someone who frequently deals with text, our tool has you covered.
        Here's a little bit about what we offer:
      </p>

      <h3>Text Transformation:</h3>
      <ul>
        <li>
          <strong>Uppercase:</strong> Convert text to UPPERCASE to make it stand
          out.
        </li>
        <li>
          <strong>Lowercase:</strong> Change text to lowercase for a more subtle
          look.
        </li>
        <li>
          <strong>Capitalize:</strong> Easily capitalize the first letter of
          each word.
        </li>
        <li>
          <strong>Remove Extra Spaces:</strong> Tidy up your text by eliminating
          unnecessary spaces.
        </li>
        <li>
          <strong>Clear Text:</strong> Start fresh with a clean slate.
        </li>
      </ul>

      <h3>Text Analysis:</h3>
      <ul>
        <li>
          <strong>Word Count:</strong> Find out how many words are in your text.
          Helpful for essays, reports, and more.
        </li>
        <li>
          <strong>Character Count:</strong> See the total number of characters
          in your text, including spaces.
        </li>
      </ul>

      <h3>Customization:</h3>
      <ul>
        <li>
          <strong>Custom Themes:</strong> Personalize your experience with our
          selection of themes. Choose the one that suits your style and
          preference.
        </li>
        <li>
          <strong>Preview:</strong> Get a live preview of your text as you make
          changes, so you can see the results in real-time.
        </li>
      </ul>

      <h3>Why Use Our Tool?</h3>
      <ul>
        <li>
          <strong>Simplicity:</strong> Our tool is designed to be user-friendly
          and straightforward.
        </li>
        <li>
          <strong>Efficiency:</strong> Save time by quickly formatting and
          analyzing text.
        </li>
        <li>
          <strong>Accessibility:</strong> Access our tool from anywhere with an
          internet connection.
        </li>
        <li>
          <strong>No Downloads:</strong> No need to install anything; it's all
          online!
        </li>
      </ul>

      <h3>Feedback and Support:</h3>
      <p>
        We value your feedback and are constantly looking for ways to improve
        our tool. If you have any suggestions, questions, or encounter any
        issues, please don't hesitate to contact us. We're here to assist you.
      </p>

      <h3>Privacy:</h3>
      <p>
        Rest assured, your text remains private. We do not store any of the text
        you input, so you can use our tool with confidence.
      </p>

      <h3>Thank You:</h3>
      <p>
        Thank you for choosing our Text Utility website. We hope our tool helps
        simplify your text-related tasks. Feel free to share it with your
        friends and colleagues!
      </p>

      <p>Happy text editing!</p>
    </div>
  );
}

export default About;
