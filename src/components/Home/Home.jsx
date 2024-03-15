import ArticleList from "../ArticleList/ArticleList";
import './Home.css';

function Home({ articleData }) {
  return (
    <>
      <main className="home-container">
        <ArticleList articleData={articleData} />
      </main>
    </>
  )
}


export default Home;