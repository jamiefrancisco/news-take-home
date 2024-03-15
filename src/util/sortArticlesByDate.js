export function sortArticlesByDate(articles) {
  return articles.sort((a, b) => {
    const dateA = new Date(a.publishedAt);
    const dateB = new Date(b.publishedAt);
    return dateB - dateA;
  });
  }
  