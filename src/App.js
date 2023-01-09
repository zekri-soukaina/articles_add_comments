// import React from "react";

// import { Routes, Route } from "react-router-dom";
// import Homepage from "./pages/HomePage/HomePage";
// import NavBar from "./component/NavBar/NavBar"
// import AuthorPage from "./pages/AuthorPage/AuthorPage";

// function App() {
//   return (
//     <div className="App">
//     <NavBar />
//       <Routes>
//         <Route exact path="/" component={Homepage} />
//         <Route path="/author/:author_id" component={AuthorPage}/>
//       </Routes>
//     </div>
//   );
// }

// export default App;

import React from "react";

import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/HomePage";
import NavBar from "./component/NavBar/NavBar";
import AboutUsPage from "./pages/AboutUsPage";
import AuthorPage from "./pages/AuthorPage";
import ArticlePage from "./pages/ArticlePage";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/author/:author_id" element={<AuthorPage />} />
        <Route path="/article/:article_id" element={<ArticlePage />} />
      </Routes>
    </div>
  );
}

export default App;
