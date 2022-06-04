/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function FormNote({ onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      css={css`
        width: 350px;
        padding: 35px 25px;
        background-color: #e1c1e3;
        box-shadow: 0px 0px 7px 3px #403939;
        input,
        textarea {
          background-color: #e1c1e3;
          border: 1px solid black;
          padding: 15px;
          margin-bottom: 20px;
          width: 100%;
          box-sizing: border-box;
        }
      `}
    >
      <input name="notetitle" type="text" placeholder="Enter note title" />
      <textarea
        name="notedescription"
        type="text"
        placeholder="Enter note description"
        rows="5"
      />
      <button
        data-status="close"
        css={css`
          padding: 5px 20px;
          cursor: pointer;
          float: right;
          background-color: #c9a1c5;
          font-weight: bold;
        `}
      >
        Add
      </button>
    </form>
  );
}

export default FormNote;
