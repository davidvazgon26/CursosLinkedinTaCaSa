import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import NotFoundPage from "./NotFoundPage";
import CommentList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";
import useUser from "../hooks/useUser";  // Hook personalizado
import articles from "./articles-content";

const ArticlePage =  () => {
    const [articleInfo, setArticleInfo] = useState({upvotes:0, comments:[]});
    const { articleId } = useParams();

    const {user, isLoading} = useUser();

    useEffect(() => {
      const loadArtilceInfo = async() => {
        const token = user && await user.getIdToken();
        const headers = token ? {authtoken:token} : {};
        const respuesta = await axios.get(`/api/articles/${articleId}`, { headers });  //recuerda que activamos el proxy en package.json
      const newArticleInfo = respuesta.data;
      setArticleInfo(newArticleInfo);
      // console.log(articleInfo)
      };
      loadArtilceInfo();
    }, []);

  const article = articles.find((article) => article.name === articleId);

    const addUpvote = async () => {
      const token = user && await user.getIdToken();
        const headers = token ? { authtoken: token } : {};
      const response = await axios.put(`/api/articles/${articleId}/upvote`, null,{headers});
      const updatedArticle = response.data;
      setArticleInfo(updatedArticle);
    }


  if (!article) return <NotFoundPage />;

  return (
    <>
      <h1>{article.title}</h1>
      <div className="upvotes-section">
      {user
      ? <button onClick={addUpvote}>Vote</button> 
      : <button> Inicia sesion para votar</button>}
      <p>Este articulo tiene {articleInfo.upvotes} upvote(s)</p>
      </div>
      {article.content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
      {user? 
        <AddCommentForm  
        articleName={articleId}
        onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)}
      />
      : <button> Inicia sesion para comentar</button>}
      
      <CommentList  comments={articleInfo.comments}/>
    </>
  );
};

export default ArticlePage;
