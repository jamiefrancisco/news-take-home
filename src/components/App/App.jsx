import './App.css';
import mockData from "../../mockData";
import { sortArticlesByDate } from '../../util.js';
import Home from '../Home/Home.jsx';
import { useState } from 'react';

function App() {
  const sortedArticleData = sortArticlesByDate(mockData);
  const [articleData, setArticleData] = useState(sortedArticleData);

  return (
    <main className='App'>
      <Home articleData={articleData} />
    </main>
 );
}

export default App
