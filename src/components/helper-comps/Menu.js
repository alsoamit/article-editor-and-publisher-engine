export default function Menu({ autosave, handleAutoSave }) {
  return (
    <>
      <div>
        <label htmlFor="autosave">
          <input
            type="checkbox"
            onClick={handleAutoSave}
            value={autosave}
            name="autosave"
          />
          Autosave
        </label>
        <label htmlFor="autosave">
          <input
            type="checkbox"
            onClick={handleAutoSave}
            value={autosave}
            name="autosave"
          />
          Autosave
        </label>
        <label htmlFor="autosave">
          <input
            type="checkbox"
            onClick={handleAutoSave}
            value={autosave}
            name="autosave"
          />
          Autosave
        </label>
      </div>
    </>
  );
}
