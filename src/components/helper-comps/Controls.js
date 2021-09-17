export default function Controls({ onPublish, onDraft, onDiscard }) {
  return (
    <div>
      <button onClick={onPublish}>Publish</button>
      <button onClick={onDraft}>Save to Draft</button>
      <button onClick={onDiscard}>Discard</button>
    </div>
  );
}
