import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';  // Add this line to fix "useSelector is not defined"

const OurTeam = () => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');

  // Redux boolean for language (EN: true, FR: false)
  const boolean = useSelector((state) => state.boolean.bool);  // Adjust path if needed

  // French text
  const frenchText = "Notre équipe est composée de professionnels dédiés à l'intégration audiovisuelle, chacun apportant des compétences variées et une vaste expérience à la table. Grâce à une connaissance approfondie des dernières technologies et outils, nous offrons un aperçu clair et complet de votre projet, afin d'assurer un alignement parfait du début à la fin.Au fil des années de collaboration avec des clients du monde entier, nous avons affiné notre approche pour proposer des solutions sur mesure qui s'adaptent à tout budget ou calendrier. Nous nous engageons à créer des expériences audiovisuelles efficaces qui répondent à vos objectifs, quelle que soit l'ampleur du projet.Grâce à notre expertise éprouvée, nous travaillons en étroite collaboration avec vous pour obtenir un résultat réussi, en livrant des résultats de la plus haute qualité. Discutons de la manière dont nous pouvons soutenir votre prochaine initiative d'intégration audiovisuelle.";  // Your full French string here

  // English text - UPDATE THIS WITH YOUR NEW CONTENT
  const englishText = "Our team consists of dedicated AV integration professionals, each bringing diverse skills and extensive experience to the table. With a thorough knowledge of the latest technologies and tools, we offer a clear, end-to-end overview of your project to ensure alignment from start to finish. Through years of collaboration with clients around the world, we've refined our approach to deliver tailored solutions that accommodate any budget or schedule. We're committed to crafting effective audio-visual experiences that meet your goals, regardless of project scale. With our proven expertise, we work closely with you to achieve a successful outcome, delivering results of the highest standard. Let's discuss how we can support your next AV integration initiative.";

  // French title
  const frenchTitle = "Une expertise de confiance";

  // English title
  const englishTitle = "Expertise You Can Trust";

  useEffect(() => {
    if (!boolean) {  // French
      setText(frenchText);
      setTitle(frenchTitle);
    } else {  // English
      setText(englishText);
      setTitle(englishTitle);
    }
  }, [boolean]);

  return (
    <section className="ourTeamSection">
      <div className="ourTeamGlobalDiv">
        <h3 className="ourTeamTitle">{title}</h3>
        <div className="ourTeam-div">
          <div className="ourTeamImg">
            {/* Your images here, e.g. <img src="path/to/img1.png" alt="" /> */}
          </div>
          <div className="ourTeamText">
            <p className="yellow-box">{text}</p>  {/* This is the yellow box */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
