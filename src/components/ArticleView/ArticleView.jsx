import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { formatDate } from "../../util/formatDate";

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
 const maxCharacters = 200;
 const truncatedContent = article.content.length > maxCharacters
    ? `${article.content.substring(0, maxCharacters)} `
    : article.content;

 return (
    <div className="article-view">
      <h1 className="article-title">{article.title}</h1>
      <p className="article-source">Source: <a href={article.url} target="_blank" rel="noopener noreferrer">{article.source.name}</a></p>
      {article.author && (
        <p className="article-author">
          Written By: {article.author}
        </p>
      )}
      <p className="article-date">{formattedDate}</p>
      <img className="article-image" src={article.urlToImage} alt={article.title} />
      <p className="article-content">
        {truncatedContent}
        {article.content.length > maxCharacters && (
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            [Read the full article]
          </a>
        )}
      </p>
    </div>
 );
}

export default ArticleView;