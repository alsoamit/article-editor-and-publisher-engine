export default function Menu({ autosave, toggleAutoSave }) {
  return (
    <>
      <div className="menu">
        <h2>Options</h2>
        <div className="option">
          <label class="switch">
            <input
              type="checkbox"
              onClick={toggleAutoSave}
              value={autosave}
              name="autosave"
            />
            <span class="slider round"></span>
            <span className="info">Autosave</span>
          </label>
        </div>
        <div className="option">
          <label class="switch">
            <input
              type="checkbox"
              // onClick={toggleAutoSave}
              value={autosave}
              name="autosave"
            />
            <span class="slider round"></span>
            <span className="info">Anonymous</span>
          </label>
        </div>
        <div className="option">
          <label class="switch">
            <input
              type="checkbox"
              // onClick={toggleAutoSave}
              value={autosave}
              name="autosave"
            />
            <span class="slider round"></span>
            <span className="info">Public</span>
          </label>
        </div>
      </div>
    </>
  );
}
