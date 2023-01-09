import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function AuthorPage() {
  const route_parameters = useParams();
  console.log("route parameter", route_parameters);

  const currentAuthor = route_parameters.author_id;
  console.log("current author", currentAuthor);

  const [authorInfo, setAuthorInfo] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          "https://my-json-server.typicode.com/DionAlting/project-time/writers"
        )
        .then((res) => {
          const author = res.data.find(
            (author) => author.id.toString() === currentAuthor
          );
          setAuthorInfo(author);
        });
    };
    fetchData();
  }, [currentAuthor]);
  console.log(authorInfo);

  return (
    <div style={{ display: "flex", padding: 20 }}>
      <div>
        <img
          src={authorInfo.img}
          alt={authorInfo.name}
          style={{ maxWidth: 300, height: "auto" }}></img>
      </div>
      <div>
        <div style={{ marginLeft: 20 }}>
          <h3>{authorInfo.name}</h3>
          <p>
            <strong>Email</strong> : {authorInfo.email}
          </p>

          <p>
            {" "}
            <strong>Twitter</strong> : {authorInfo.twitter}
          </p>

          <p>
            {" "}
            <strong>LinkedIn</strong> : {authorInfo.linkedin}
          </p>
        </div>
      </div>
    </div>
  );
}
