import { useState, useEffect, useCallback } from 'react';
import ArticleCard from '../ArticleCard/ArticleCard.jsx';
import FilterBySource from '../FilterBySource/FilterBySource.jsx';

function ArticleList({ articleData }) {
 const [filteredArticles, setFilteredArticles] = useState(articleData);

 useEffect(() => {
    setFilteredArticles(articleData);
 }, [articleData]);

 const handleFilterChange = useCallback((selectedSources) => {
    if (selectedSources.length === 0) {
      setFilteredArticles(articleData);
    } else {
      const filtered = articleData.filter((article) =>
        selectedSources.includes(article.source.name)
      );
      setFilteredArticles(filtered);
    }
 }, [articleData]);

 return (
    <div className='article-cards'>
      <FilterBySource onFilterChange={handleFilterChange} /> 
      {filteredArticles.map((article, index) => (
        <ArticleCard
          key={index}
          article={article}
        />
      ))}
    </div>
 );
}

export default ArticleList;
