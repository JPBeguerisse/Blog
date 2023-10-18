import '../css/createblog.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = (props) => {
    /**
     * déclaration des state
     */
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [isLoading, setIsLoading] = useState(false); // si c'est true on affiche en cours de traitement

    const navigate = useNavigate();

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleChangeAuthor = (e) => {
        setAuthor(e.target.value);
    }
    const handleChangeContenue = (e) => {
        setContent(e.target.value);
    }

    //conversion de la date
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('fr-FR', options);
    }

    const handleAddBlog = (e) => {
        const date = formatDate(new Date());
        e.preventDefault();
        const blog = {title, author, content, date}

        //contacter le server
        fetch('http://localhost:8000/blogs',
        {
            method:'POST',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(blog)
        })
        .then(
            console.log('Blog Ajouté avec succès'),
            setIsLoading(false), // reviens à false après envoi des données
            navigate('/')
        );
    }

    
    return ( 
        <div className="create-blog">
            <div className="container">
                <form className="form" onSubmit={handleAddBlog} >
                    <div className="form-group">
                        <label htmlFor="">Titre de l'article</label>
                        <input type="text" className="form-control" id="title" value={title} onChange={handleChangeTitle}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Auteur</label>
                        <select className="form-control" id="author" value={author} onChange={handleChangeAuthor}>
                            <option value=""></option>
                            <option value="Jean">Jean</option>
                            <option value="Junior">Junior</option>
                            <option value="Saliou">Saliou</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Contenu</label>
                        <textarea className="form-control textarea" id="" cols="30" rows="30" value={content} onChange={handleChangeContenue}></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn-create">Enregistrer</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Add;