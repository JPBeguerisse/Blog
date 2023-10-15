import { useParams, useNavigate } from "react-router-dom";
import useRecuperation from "../hooks/useRecuperation";


const BlogView = () => {
    // Utilisation de useParams pour obtenir l'identifiant ('id') depuis l'URL
    const { id } = useParams();

    // Utilisation du hook personnalisé 'useRecuperation' pour récupérer les données du blog avec l'identifiant spécifié
    const { data: blog, isLoading, error } = useRecuperation('http://localhost:8000/blogs/' + id);

    // Utilisation de useNavigate pour la navigation
    const navigate = useNavigate();

    // Fonction pour gérer la suppression du blog
    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        })
        .then(() => {
            console.log("Blog supprimé");
            // Après la suppression, naviguer vers la page d'accueil
            navigate('/');
        })
    }

    return ( 
        <div className="container details">
            <h2>Détails du blog - {id}</h2>
            {isLoading && (<div>En cours de traitement...</div>)}
            {/* Affiche "En cours de traitement..." si les données sont en cours de chargement (si 'isLoading' est true) */}

            {error && (<div style={{ 'color': 'red' }}>{error}</div>)}
            {/* Affiche un message d'erreur en rouge si une erreur est survenue (si 'error' est défini) */}

            {
                blog && (
                    <div className="blog">
                        <h2 className="blog-title" href="">{blog.title}</h2>
                        <small className="blog-date">{`Publié le : ${blog.date}`}</small>
                        <p className="blog-description">{blog.body}</p>
                        <p className="blog-author">{`Publié par : ${blog.author}`}</p>
                        {/* Affiche les détails du blog si 'blog' est défini (les données ont été chargées avec succès) */}
                        <button onClick={handleDelete}>Supprimer</button>
                        {/* Un bouton pour supprimer le blog, avec une fonction de gestion au clic */}
                    </div>
                )
            }
        </div>
     );
}

export default BlogView;
