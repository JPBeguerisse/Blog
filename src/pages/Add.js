import '../css/createblog.css';
import { useState } from "react";

const Add = (props) => {
    /**
     * déclaration des state
     */
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [contenue, setContenue] = useState('');

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleChangeAuthor = (e) => {
        setAuthor(e.target.value);
    }
    const handleChangeContenue = (e) => {
        setContenue(e.target.value);
    }

    const handleAddBlog = (e) => {
        const tmp_date = new Date().toISOString().split('T');  //récupération de la date et le convertir avec split
        const date = `${tmp_date[0]} ${tmp_date[1]}`; //on met juste les 2 élément de notre tmp_date sur date
        e.preventDefault();
        const blog = {title, author, contenue, date}

        //contacter le server
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
                        <textarea className="form-control textarea" id="" cols="30" rows="30" value={contenue} onChange={handleChangeContenue}></textarea>
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