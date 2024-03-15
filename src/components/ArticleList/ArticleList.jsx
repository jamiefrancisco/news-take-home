import ArticleCard from '../ArticleCard/ArticleCard.jsx';

function ArticleList( {articleData} ) {

  return (
    <div className='article-cards'>
      {articleData.map((article, index) => (
        <ArticleCard
          key={index}
          article={article}
        />
      ))}
    </div>
  )
}

export default ArticleList;