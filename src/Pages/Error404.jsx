import React from "react";
import '../styles/Error404.css';


const Error404 = () => (
    <div className="Error404">
        <h1 className="Error404_code">404</h1>
        <p className="Error404_message">Oups! La page que vous demandez n'existe pas.</p>
        <a href="/" className="Error404_link">Retourner sur la page d'accueil</a>
    </div>
)

export default Error404