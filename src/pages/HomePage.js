import axios from "axios";
import React, { useEffect, useState } from "react";
import ArticleCard from "../component/ArticleCard/ArticleCard";

export default function HomePage() {
  const [articlesData, setArticlesData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      console.log("fetching data!");

      const res = await axios.get(
        "https://my-json-server.typicode.com/DionAlting/project-time/posts"
      );
      console.log("response", res);

      setArticlesData(res.data);
    };
    fetchData();
  }, []);
  // console.log("article data", articlesData);

  // const [sortBy, setSortBy] = useState("numberOfLikes");
  const [sortBy, setSortBy] = useState(0);
  const change_sorting = (event) => {
    console.log("new sort order:", event.target.value);
    setSortBy(event.target.value);
  };

  const compareLikes = (article_a, article_b) => {
    return article_b.likes - article_a.likes;
  };
  const articlesSorted = [...articlesData].sort(compareLikes);
  console.log("articles Sorted", articlesSorted);

  // const addingLikes = () => {
  //   const addedLikes = articlesData.map((article) => {
  //     {
  //       return {
  //         ...article,
  //         likes: article.likes + 1,
  //       };
  //     }
  //   });
  //   setArticlesData(addedLikes);
  //   console.log(addedLikes);
  // };

  return (
    <div>
      <p> home page</p>
      <div>
        Sort by:{" "}
        <select onChange={change_sorting} value={sortBy}>
          <option value="sortBy">Number of likes</option>
        </select>
      </div>
      {articlesSorted.map((article) => {
        return (
          <div key={article.id}>
            <ArticleCard
              Article={article}
              AddingLikes={() => {
                const addedLikes = articlesData.map((a) => {
                  if (a.id === article.id) {
                    return {
                      ...a,
                      likes: a.likes + 1,
                    };
                  }
                  return a;
                });
                setArticlesData(addedLikes);
                console.log(addedLikes);
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
