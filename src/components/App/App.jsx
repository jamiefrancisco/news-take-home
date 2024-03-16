import './App.css';
import '../../index.css';
import { useEffect } from 'react';
import { addIdsAndSlugsToArticles } from '../../util/addIdsAndSlugsToArticles.js';
import { sortArticlesByDate } from '../../util/sortArticlesByDate.js';
import Header from '../Header/Header.jsx';
import Home from '../Home/Home.jsx';
import ArticleView from '../ArticleView/ArticleView.jsx';
import fetchData from '../../apiCalls.js';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [articleData, setArticleData] = useState([]);


 useEffect(() => {
  const fetchAndSetData = async () => {
    const data = await fetchData();
    const articlesWithIdsAndSlugs = addIdsAndSlugsToArticles(data);
    const sortedArticleData = sortArticlesByDate(articlesWithIdsAndSlugs);
    setArticleData(sortedArticleData);
  };

  fetchAndSetData();
}, []);


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
