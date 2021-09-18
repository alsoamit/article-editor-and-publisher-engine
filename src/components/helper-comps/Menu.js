export default function Menu({ autosave, toggleAutoSave }) {
  return (
    <>
      <div>
        <label htmlFor="autosave">
          <input
            type="checkbox"
            onClick={toggleAutoSave}
            value={autosave}
            name="autosave"
          />
          Autosave
        </label>
        <label htmlFor="autosave">
          <input
            type="checkbox"
            onClick={toggleAutoSave}
            value={autosave}
            name="autosave"
          />
          Autosave
        </label>
        <label htmlFor="autosave">
          <input
            type="checkbox"
            onClick={toggleAutoSave}
            value={autosave}
            name="autosave"
          />
          Autosave
        </label>
      </div>
    </>
  );
}
