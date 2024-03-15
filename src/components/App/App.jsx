import './App.css';
import '../../index.css';
import mockData from "../../mockData";
import { sortArticlesByDate, addIdsAndSlugsToArticles } from '../../util.js';
import Header from '../Header/Header.jsx';
import Home from '../Home/Home.jsx';
import ArticleView from '../ArticleView/ArticleView.jsx';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const articlesWithIdsAndSlugs = addIdsAndSlugsToArticles(mockData);
  const sortedArticleData = sortArticlesByDate(articlesWithIdsAndSlugs);
  const [articleData, setArticleData] = useState(sortedArticleData);

  return (
    <Router>
       <Header />
      <main className='App'>
        <Routes>
          <Route path="/" element={<Home articleData={articleData} />} />
          <Route path="/article/:slug" element={<ArticleView articleData={articleData} />} />
        </Routes>
      </main>
    </Router>
 );
}

export default App;
