import { useState } from "react";
import { useEffect } from "react";
import Blog from "../components/Blog";
import useRecuperation from "../hooks/useRecuperation";
import React from "react";

const Home = () => {
    // Utilisation du hook personnalisé 'useRecuperation' pour récupérer les données des blogs
    const { data: blogsList, isLoading, error } = useRecuperation('http://localhost:8000/blogs');

    return (
        <div className="container">
            {error && <div style={{ 'color': 'red' }}>{error}</div>}
            {/* Affiche un message d'erreur en rouge si une erreur est survenue (si 'error' est défini) */}

            {isLoading && <div>En cours de traitement...</div>}
            {/* Affiche "En cours de traitement..." si les données sont en cours de chargement (si 'isLoading' est true) */}

            {blogsList && <Blog blogsList={blogsList}></Blog>}
            {/* Affiche les blogs en utilisant le composant 'Blog' si 'blogsList' est défini (les données ont été chargées avec succès) */}
        </div>
    );
};

export default Home;
