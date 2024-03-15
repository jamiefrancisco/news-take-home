
export function sortArticlesByDate(articles) {
return articles.sort((a, b) => {
  const dateA = new Date(a.publishedAt);
  const dateB = new Date(b.publishedAt);
  return dateB - dateA;
});
}


export function formatDate(dateString) {
  const date = new Date(dateString);
  const formattedDate = `${date.toLocaleDateString('en-US', {
     year: 'numeric',
     month: 'long',
     day: 'numeric',
  })} ${date.toLocaleTimeString('en-US', {
     hour: '2-digit',
     minute: '2-digit',
     hour12: true,
  })}`;
  return formattedDate;
 }