import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddComments from "../component/AddComments/AddComments";
import { Link } from "react-router-dom";

export default function ArticlePage() {
  const route_parameter = useParams();
  console.log("route param", route_parameter);

  const articleId = parseInt(route_parameter.article_id);
  console.log("article id", articleId);

  const [articleData, setArticleData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://my-json-server.typicode.com/DionAlting/project-time/db"
      );
      console.log(res.data);
      setArticleData(res.data.posts);
    };
    fetchData();
  }, []);
  console.log(articleData);

  const addingComment = (comment) => {
    const addedComment = articleData.map((article) => {
      if (article.id === articleId) {
        return {
          ...article,
          comments: [...article.comments, comment],
        };
      } else {
        return article;
      }
    });
    setArticleData(addedComment);
    console.log(addedComment);
  };

  const addingLikes = () => {
    const addedLikes = articleData.map((article) => {
      if (article.id === articleId) {
        return {
          ...article,
          likes: article.likes + 1,
        };
      } else {
        return article;
      }
    });
    setArticleData(addedLikes);
    console.log(addedLikes);
  };
  return (
    <div>
      Articles
      {articleData.length ? (
        articleData.map((article) => {
          if (articleId === article.id) {
            return (
              <div key={article.id}>
                <h2>{article.title}</h2>{" "}
                <p>
                  by
                  <Link to={`/author/${article.writerId}`}>
                    {article.writer}
                  </Link>
                </p>
                <img
                  src={article.img}
                  alt={article.title}
                  style={{ width: 600 }}
                />
                <p>
                  <strong> {article.likes} </strong>
                  <button onClick={addingLikes}>Like</button>
                </p>
                <p>{article.content}</p>
                <p style={{ marginTop: 50 }}>Comments:</p>
                {article.comments.map((comment, index) => {
                  return <li key={index}>{comment} </li>;
                })}
                <p style={{ marginTop: 50 }}>Add your comments here:</p>
                <AddComments AddingComment={addingComment} />
              </div>
            );
          } else {
            return null;
          }
        })
      ) : (
        <p>Loading... </p>
      )}
    </div>
  );
}
