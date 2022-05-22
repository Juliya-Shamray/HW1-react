/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import notes from "./notes.json";

import NoteBlock from "./components/NoteBlock";

function App() {
  return (
    <div
      css={css`
        max-width: 1100px;
        margin: auto;
        @media screen (width: auto ;) {
        }
      `}
    >
      <NoteBlock notes={notes} />
    </div>
  );
}

export default App;
