import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { formatDate } from "../../util";

function ArticleView({ articleData }) {
 const { slug } = useParams();
 const [article, setArticle] = useState(null);

 useEffect(() => {
    const foundArticle = articleData.find(article => article.slug === slug);
    setArticle(foundArticle);
 }, [slug, articleData]);

 if (!article) {
    return <div className="loading">Loading...</div>;
 }

 const formattedDate = formatDate(article.publishedAt);

 return (
    <div className="article-view">
      <h1 className="article-title">{article.title}</h1>
      <img className="article-image" src={article.urlToImage} alt={article.title} />
      <p className="article-date">{formattedDate}</p>
      <p className="article-content">{article.content}</p>
      <p className="article-source">Source: <a href={article.url} target="_blank" rel="noopener noreferrer">{article.source.name}</a></p>
    </div>
 );
}

export default ArticleView;
