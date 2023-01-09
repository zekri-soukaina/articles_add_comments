import React, { useState } from "react";

export default function AboutUsPage() {
  const [comment, setComment] = useState();
  const [commentSaved, setCommentSaved] = useState([]);

  const onSubmitComment = (e) => {
    e.preventDefault();
    setCommentSaved([...commentSaved, comment]);
    console.log("c", comment);
    setComment("");
  };

  return (
    <div>
      <h2>About us</h2>
      <p>Welcome to our article app!</p>
      <p>leave us your feedback!</p>
      {commentSaved.map((c, index) => {
        return <p key={index}>{c}</p>;
      })}

      <form onSubmit={onSubmitComment}>
        <textarea
          type="text"
          rows="4"
          cols="50"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
