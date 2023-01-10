import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddCommentForm from "../components/AddCommentForm";
import articles from "./articles-content";
import NotFoundPage from "./NotFoundPage";
import axios from 'axios'
import CommentList from "../components/CommentsList";

const ArticlePage =  () => {
    const [articleInfo, setArticleInfo] = useState({upvotes:0, comments:[]});
    const { articleId } = useParams();

    useEffect(() => {
      const loadArtilceInfo = async() => {
      const respuesta = await axios.get(`/api/articles/${articleId}`)  //recuerda que activamos el proxy en package.json
      const newArticleInfo = respuesta.data;
      setArticleInfo(newArticleInfo);
      // console.log(articleInfo)
      };
      loadArtilceInfo();
    }, []);

  const article = articles.find((article) => article.name === articleId);

    const addUpvote = async () => {
      const response = await axios.put(`/api/articles/${articleId}/upvote`);
      const updatedArticle = response.data;
      setArticleInfo(updatedArticle);
    }


  if (!article) return <NotFoundPage />;

  return (
    <>
      <h1>{article.title}</h1>
      <div className="upvotes-section">
      <button onClick={addUpvote}>Vote</button>
      <p>Este articulo tiene {articleInfo.upvotes} upvote(s)</p>
      </div>
      {article.content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
      <AddCommentForm  
        articleName={articleId}
        onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)}
      />
      <CommentList  comments={articleInfo.comments}/>
    </>
  );
};

export default ArticlePage;
