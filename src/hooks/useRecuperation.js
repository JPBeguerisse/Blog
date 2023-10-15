import { useState, useEffect } from "react";

const useRecuperation = (url) => {
    // Définition de l'état des données, du chargement et des erreurs
    const [data, setData] = useState(null); // getter, setter des données
    const [error, setError] = useState(); // permet d'afficher un message d'erreur en cas d'échec
    const [isLoading, setIsLoading] = useState(true); // permet de suivre l'état de chargement

    useEffect(() => {
        // Utilisation de useEffect pour effectuer l'appel réseau
        setTimeout(() => {
            // Simule un délai de 2 secondes pour récupérer les données depuis le serveur (ne pas utiliser dans une application réelle)

            fetch(url)
            .then((response) => {
                if (!response.ok) {
                    //si on arrive pas à accéder à l'url
                    throw Error('Désolé, une erreur est survenue...!');
                }
                return response.json();
            })
            .then((data) => {
                // Mise à jour de l'état avec les données récupérées, indication de non-chargement, et suppression des erreurs
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch((err) => {
                // Gestion des erreurs en mettant à jour l'état d'erreur et l'indication de non-chargement
                setError(err.message);
                setIsLoading(false);
            });
        }, 2000); // Attendez 2 secondes avant d'effectuer l'appel réseau
    }, [url]); // Le hook s'exécute lorsque l'URL change

    // Renvoie un objet contenant les données, l'état de chargement et les erreurs
    return { data, isLoading, error };
};

export default useRecuperation;
