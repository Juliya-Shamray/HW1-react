import FormNote from "./components/FormNote";
import NoteBlock from "./components/NoteBlock";
import Popup from "../Popup";
import useNote from "./hooks/useNote";

function Notes() {
  const { addNote, isClosePopup, notes } = useNote();
  return (
    <div>
      <Popup isClosePopup={isClosePopup}>
        <FormNote onSubmit={addNote} />
      </Popup>
      <NoteBlock notes={notes} />
    </div>
  );
}

export default Notes;
