import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "./ArticleCard.css";

export default function ArticleCard({ Article, AddingLikes }) {
  const { img, id, title, writerId, writer, date, likes, content } = Article;

  return (
    <div className="div">
      <div>
        <Link to={`/article/${id}`}>
          <Card.Img className="cardImg" variant="top" src={img} alt={title} />{" "}
        </Link>
      </div>

      <div>
        <Card className="card">
          <Card.Body>
            <Link to={`/article/${id}`}>
              <Card.Title className="cardTitle">
                <strong>{title}</strong>
              </Card.Title>
            </Link>
            <small>
              <Link to={`/author/${writerId}`}>{writer}</Link>
            </small>
            <Card.Text className="container">{content}</Card.Text>
            <Link
              to={`/article/${id}`}
              role="button"
              className="btn btn-primary">
              See more...
            </Link>
            <p>
              <small>{date} </small>
            </p>
          </Card.Body>{" "}
          <Button
            onClick={AddingLikes}
            variant="primary"
            className="likeButton">
            Like
          </Button>
          <strong> {likes} likes </strong>
        </Card>
      </div>
    </div>
  );
}
