import React from "react";
import Comment from "./Comment"

/** Shows a list of comments that can be deleted*/

function CommentList({comments = [], deleteComment}) {
    return (
      comments.map(c => (
        <Comment
          key={c.id}
          id={c.id}
          text={c.text}
          deleteComment={deleteComment}
        />
      )));
  }
  
  export default CommentList;
  