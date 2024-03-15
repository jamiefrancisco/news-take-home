import { Link } from 'react-router-dom';
import { formatDate } from "../../util";
import Header from '../Header/Header';

function ArticleCard({ article }) {
  const formattedDate = formatDate(article.publishedAt);

  return (
    <Link to={`/article/${article.slug}`} className="article-card">
      <img src={article.urlToImage} alt={article.title} />
      <h1>{article.title}</h1>
      <p>{article.description}</p>
      <p>{formattedDate}</p>
      <p>
        {article.author ? `${article.author}` : ''}
        {article.author ? ' • ' : ''}
        {article.source.name ? `${article.source.name}` : ''}
      </p>

    </Link>
  );
}

export default ArticleCard;
