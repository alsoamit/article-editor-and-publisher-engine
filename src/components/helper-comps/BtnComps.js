import { dispatcher } from "../../dispatcher";

export function PreviewBtn({ type, posts, setPreview, id }) {
  let post = null;
  const getPost = (post) => {
    // return for unmatched posts
    if (post.id !== id) {
      return;
    }
    // console.log("from filter", post.id, preview);
    return (
      <div key={post.id}>
        <h1>{post.title}</h1>
        <img src={post.banner} alt={post.title} />
        <div dangerouslySetInnerHTML={{ __html: post.data.content }}></div>
        <BackBtn setPreview={setPreview} />
      </div>
    );
  };

  if (type === "drafts") {
    post = posts.drafts.map(getPost);
  } else {
    post = posts.published.map(getPost);
  }

  return (
    <button
      onClick={() => {
        setPreview(post);
        // console.log(post);
      }}
    >
      Preview
    </button>
  );
}

function BackBtn({ setPreview }) {
  return (
    <button
      onClick={() => {
        setPreview(null);
      }}
    >
      Back
    </button>
  );
}

export function DeleteBtn({ type, dispatcher, id }) {
  return (
    <button
      onClick={() => {
        dispatcher(type, id);
      }}
    >
      Delete
    </button>
  );
}
