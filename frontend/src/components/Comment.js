import React from "react";

/** Shows all comments for a post */

function Comment({deleteComment, text, id}) {

    function handleDelete(evt) {
      deleteComment(id);
    }
  
    return (
      <div>
        <p>
          {deleteComment && (
            <i
              className="fa fa-times text-danger mr-2"
              onClick={handleDelete}
            />
          )}
  
          {text}
        </p>
      </div>
    );
  }
  
  export default Comment;
  