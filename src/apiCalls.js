import mockData from './mockData';

const USE_MOCK_DATA = true;

export default async function fetchData() {
 try {
    if (USE_MOCK_DATA) {
       return mockData;
    } else {
       const response = await fetch('https://newsapi.org/v2/everything?q=+%22golden%20state%20warriors%22&apiKey=eb40eea4ba5946fbb1e29f29edb5b4b9&pageSize=100');
       if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
       }
       const data = await response.json();
       return data.articles || [];
    }
 } catch (error) {
    console.error('Failed to fetch data:', error);
    return [];
 }
};
