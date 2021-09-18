import { connect } from "react-redux";

export function Drafts({ state }) {
  // console.log("published", state.published);
  // console.log("posts", state.drafts);

  const listOfPosts = state.published.map((post) => {
    // console.log("post", post, "content", post.data.content);
    return (
      <div key={post.id}>
        <h1> {post.title} </h1>
        <div dangerouslySetInnerHTML={{ __html: post.data.content }}></div>
      </div>
    );
  });

  const listOfDrafts = state.drafts.map((draft) => {
    // console.log("post", post, "content", post.data.content);
    return (
      <div key={draft.id}>
        <h1> {draft.title} </h1>
        <div dangerouslySetInnerHTML={{ __html: draft.data.content }}></div>
      </div>
    );
  });

  // console.log(listOfPosts, listOfDrafts);
  return (
    <div>
      <div>{listOfPosts.length}</div>
      <div>{listOfDrafts.length}</div>
      <div>{listOfPosts.length ? listOfPosts : "No posts to show"}</div>
      <div>{listOfDrafts.length ? listOfDrafts : "No drafts to show"}</div>
    </div>
  );
}

const mapStateToProp = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProp)(Drafts);
