/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const NoteItem = ({ data: { title, date, description } }) => (
  <div
    css={css`
      width: 280px;
      padding: 5px 15px;
      margin: 20px;
      background-color: #e1c1e3;
      box-shadow: 0px 0px 7px 3px #403939;
      h2,
      p {
        border: 1px solid black;
        padding: 10px;
        font-size: 20px;
      }
    `}
  >
    <h2>{title}</h2>
    <p>{date}</p>
    <p>{description}</p>
  </div>
);
export default NoteItem;
