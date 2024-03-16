import { Link } from 'react-router-dom';
import { formatDate } from "../../util/formatDate";

function ArticleCard({ article }) {
  const formattedDate = formatDate(article.publishedAt);

  return (
    <Link to={`/article/${article.slug}`} className="article-card" style={{ textDecoration: 'none' }}>
      <h2 className="article-card-title">{article.title}</h2>
      <img className="article-card-image" src={article.urlToImage} alt={article.title} />
      <p className="article-card-description">{article.description}</p>
      <p className="article-card-date">{formattedDate}</p>
      <p className="article-card-author-source">
        {article.author ? `${article.author}` : ''}
        {article.author ? ' • ' : ''}
        {article.source.name ? `${article.source.name}` : ''}
      </p>

    </Link>
  );
}

export default ArticleCard;
