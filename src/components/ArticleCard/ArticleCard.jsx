import { formatDate } from "../../util";



function ArticleCard({ article }) {

  const formattedDate = formatDate(article.publishedAt);
  
  return (
    <div className="article-card">
      <img src={article.urlToImage} alt={article.title} />
      <h1>{article.title}</h1>
      <h2>{article.description}</h2>
      <h3>{formattedDate}</h3>

    </div>
 );
}

export default ArticleCard;
