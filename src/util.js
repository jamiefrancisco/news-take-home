import { v4 as uuidv4 } from 'uuid';


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


function createSlug(title) {
 return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

export function addIdsAndSlugsToArticles(articles) {
 return articles.map(article => ({
    ...article,
    id: uuidv4(), // Generate a unique ID for each article
    slug: createSlug(article.title), // Add a slug to each article
 }));
}
