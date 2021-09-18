import { connect } from "react-redux";
import "./styles/Dashboard.css";
export function Drafts({ state }) {
  // console.log("published", state.published);
  // console.log("posts", state.drafts);

  const listOfPosts = state.published.map((post) => {
    // console.log("post", post, "content", post.data.content);
    return (
      <div key={post.id}>
        <p className="post_preview"> {post.title} </p>
      </div>
    );
  });

  const listOfDrafts = state.drafts.map((draft) => {
    // console.log("post", post, "content", post.data.content);
    return (
      <div key={draft.id}>
        <p className="post_preview"> {draft.title} </p>
      </div>
    );
  });

  // console.log(listOfPosts, listOfDrafts);
  return (
    <div className="dashboard">
      <div className="stats">
        <div className="left">
          <h2>Published</h2>
          <p>{listOfPosts.length}</p>
        </div>
        <div className="right">
          <h2>Drafts</h2>
          <p>{listOfDrafts.length}</p>
        </div>
      </div>
      <div className="recent recent_posts">
        <h2 className="titles">Recent Posts</h2>
        {listOfPosts.length ? (
          listOfPosts
        ) : (
          <NoRecentItem str="No recent drafts" />
        )}
      </div>
      <div className="recent recent_drafts">
        <h2 className="titles">Recent Drafts</h2>
        {listOfDrafts.length ? (
          listOfDrafts
        ) : (
          <NoRecentItem str="No recent drafts" />
        )}
      </div>
    </div>
  );
}

function NoRecentItem({ str }) {
  return <p className="post_preview">{str}</p>;
}

const mapStateToProp = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProp)(Drafts);
