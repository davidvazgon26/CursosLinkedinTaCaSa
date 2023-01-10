import { useState } from "react";
import axios from "axios";

const AddCommentForm = ({articleName, onArticleUpdated}) => {

const [name, setName] = useState('');
const [commentText, setCommentText] = useState('');

const addComment = async () => {
    const response = await axios.post(`/api/articles/${articleName}/comments`,{
        postedBy: name,
        text: commentText
    });
    const updatedArticle = response.data;
    onArticleUpdated(updatedArticle);
    setName('');
    setCommentText('');
}


    return(
        <div id="add-comment-form">
            <h3>Agrega un commentario</h3>
            <label>
                Nombre:
                <input 
                value={name}
                onChange={e=> setName(e.target.value)}
                type="text"/>
            </label>
            <label>
                Commentario:
                <textarea 
                value={commentText}
                onChange={e=>setCommentText(e.target.value)}
                rows="4" 
                cols="50"/>
            </label>
            <button onClick={addComment}>Agregar comentario</button>
        </div>
    )
}


export default AddCommentForm;