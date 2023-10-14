import React from 'react';
import './App.css';

const WelcomePage = () => {
    return (
        <div className="welcome-container">
          <div className="content">
            <h1>Bienvenue</h1>
            <p>Selon l’OMS, environ 1 Français sur 5 souffre d’une maladie mentale. Bien que de nombreux progrès aient été faits depuis des décennies sur la vision de la santé mentale par le grand public, les idées reçues et les stigmates demeurent dans la société actuelle.</p>
            <p>Les tabous culturels et l’ignorance généralisée de la nature des problèmes de santé mentale alimentent des représentations faussées qui ne relèvent pas de la réalité quotidienne des individus souffrant de troubles mentaux.</p>
            <h2>Notre mission</h2>
            <p>Aider à faire face aux stéréotypes, informer et sensibiliser le plus grand nombre.</p>
    
            <div className="video-container">
              <iframe
                title="YouTube video"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Ne_KHiLdvZo"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      );
    };

export default WelcomePage;