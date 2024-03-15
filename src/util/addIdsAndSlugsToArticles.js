import { createSlug } from "./createSlug";
import { v4 as uuidv4 } from 'uuid';

export function addIdsAndSlugsToArticles(articles) {
  return articles.map(article => ({
     ...article,
     id: uuidv4(), // Generate a unique ID for each article
     slug: createSlug(article.title), // Add a slug to each article
  }));
 }