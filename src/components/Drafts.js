import { useState } from "react";
import "./styles/Posts.css";
import { connect } from "react-redux";
import { mapDispatchToProp, mapStateToProp } from "./fragments/consts";
import { DeleteBtn, PreviewBtn } from "./fragments/BtnComps";

export function Drafts({ posts, dispatcher }) {
  const [preview, setPreview] = useState(null);
  // console.log("posts", posts);
  const listOfPosts = posts.drafts.map((post) => {
    // console.log("post", post, "content", post.data.content, post.title);
    return (
      <div key={post.id} className="post">
        <div className="banner_wrap">
          <img src={post.banner} alt={post.title} className="banner" />
        </div>
        <h1 className="title">{post.title}</h1>
        <PreviewBtn
          type="drafts"
          posts={posts}
          setPreview={setPreview}
          id={post.id}
        />
        <DeleteBtn type="deleteDraft" dispatcher={dispatcher} id={post.id} />
      </div>
    );
  });

  return (
    <div className="published">
      <div className={preview ? "" : "posts"}>
        {preview ? (
          preview
        ) : listOfPosts.length ? (
          listOfPosts
        ) : (
          <NothingToShow />
        )}
      </div>
    </div>
  );
}

function NothingToShow() {
  return <h2 className="nothing">No Drafts Yet :)</h2>;
}

export default connect(mapStateToProp, mapDispatchToProp)(Drafts);
