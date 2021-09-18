import "./styles/Help.css";

export default function Help() {
  return (
    <div className="help" dangerouslySetInnerHTML={{ __html: data }}></div>
  );
}

const data = `<div>
<h1>How it works</h1>
<ol>
  <li>
    <a
      href="https://www.npmjs.com/package/react-quill"
      rel="noopener noreferrer"
      target="_blank"
    >
      React-quill
    </a>
    is used to for the rich text editor.
  </li>
  <li>React-redux is used to manage the state.</li>
  <li>
    Posts are stored in
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"
      rel="noopener noreferrer"
      target="_blank"
    >
      localstorage
    </a>
    of the browser.
  </li>
</ol>
<p>
  <br />
</p>
<h1>Features</h1>
<ol>
  <li>
    This web app provides you with a rich text editor to write articles.
  </li>
  <li>
    You can publish your articles using the publish button below the
    editor.
  </li>
  <li>Or you can save it as a Draft.</li>
  <li>
    You can view your published posts by accessing the
    <strong style="color: rgb(255, 153, 0);">Uploaded</strong> Tab from
    the navigation menu.
  </li>
  <li>
    You can view your drafts by accessing the
    <span style="color: rgb(255, 153, 0);">Drafts</span> Tab from the
    navigation menu.
  </li>
</ol>
<p>
  <br />
</p>
<h2>Features not present yet</h2>
<ol>
  <li>
    The Web App doesn't have the feature of Editing the Draft yet.
  </li>
  <li>Options Menu doesn't work currently.</li>
  <li>Notification features are not implemented.</li>
</ol>
<p>
  <br />
</p>
<p>This post was written using the editor as provided in the web app.</p>
<p>Thanks</p>
<p>
  <a
    href="https://www.linkedin.com/in/alsoamit/"
    rel="noopener noreferrer"
    target="_blank"
  >
    Alsoamit
  </a>
  :)
</p>
</div>`;
