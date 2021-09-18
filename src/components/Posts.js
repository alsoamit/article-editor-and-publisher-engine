import { useState } from "react";
import { connect } from "react-redux";
import { mapDispatchToProp, mapStateToProp } from "./consts";
import { DeleteBtn, PreviewBtn } from "./helper-comps/BtnComps";

export function Posts({ posts, dispatcher }) {
  const [preview, setPreview] = useState(null);
  // console.log("posts", posts);
  const listOfPosts = posts.published.map((post) => {
    // console.log("post", post, "content", post.data.content);
    return (
      <div key={post.id}>
        <h1>{post.title}</h1>
        <img src={post.banner} alt={post.title} />
        <PreviewBtn
          type="published"
          posts={posts}
          setPreview={setPreview}
          id={post.id}
        />
        <DeleteBtn type="deletePost" dispatcher={dispatcher} id={post.id} />
      </div>
    );
  });

  return (
    <div>
      {preview
        ? preview
        : listOfPosts.length
        ? listOfPosts
        : "No posts to show"}
    </div>
  );
}

export default connect(mapStateToProp, mapDispatchToProp)(Posts);
