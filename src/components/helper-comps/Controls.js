export default function Controls({ onPublish, onDraft, onDiscard }) {
  return (
    <div>
      <button className="btn btn-g" onClick={onPublish}>
        Publish
      </button>
      <button className="btn" onClick={onDraft}>
        Save to Draft
      </button>
      <button className="btn btn-d" onClick={onDiscard}>
        Discard
      </button>
    </div>
  );
}
