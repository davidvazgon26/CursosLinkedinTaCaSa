import { useState } from "react";
import axios from "axios";
import useUser from '../hooks/useUser';

const AddCommentForm = ({articleName, onArticleUpdated}) => {

const [name, setName] = useState('');
const [commentText, setCommentText] = useState('');
const { user } = useUser();


const addComment = async () => {
    const token = user && await user.getIdToken();
    const headers = token ? { authtoken: token } : {};
    const response = await axios.post(`/api/articles/${articleName}/comments`,{
        postedBy: name,
        text: commentText
    },{
        headers
    });
    const updatedArticle = response.data;
    onArticleUpdated(updatedArticle);
    setName('');
    setCommentText('');
}


    return(
        <div id="add-comment-form">
            <h3>Agrega un commentario</h3>
            {/* <label>
                Nombre:
                <input 
                value={name}
                onChange={e=> setName(e.target.value)}
                type="text"/>
            </label> */}
            {/* <label> 
                Commentario: */}
                {user && <p>Tu post saldra como {user.email}</p>}
                <textarea 
                value={commentText}
                onChange={e=>setCommentText(e.target.value)}
                rows="4" 
                cols="50"/>
            {/* </label> */}
            <button onClick={addComment}>Agregar comentario</button>
        </div>
    )
}


export default AddCommentForm;