import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../src/pages/HomePage";
import AboutPage from "../src/pages/AboutPage";
import ArticlesListPage from "../src/pages/ArticlesListPage";
import ArticlePage from "../src/pages/ArticlePage";
import NavBar from "./NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticlesListPage />} />
            <Route path="/articles/:articleId" element={<ArticlePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
