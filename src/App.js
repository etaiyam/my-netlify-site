import React, { useState, useEffect } from 'react';  // Built-in, no extra deps

function App() {
  const [isEnglish, setIsEnglish] = useState(false);  // Simple local toggle (no Redux needed)

  // French content
  const frenchTitle = "Une expertise de confiance";
  const frenchText = "Notre équipe est composée de professionnels dédiés à l'intégration audiovisuelle, chacun apportant des compétences variées et une vaste expérience à la table. Grâce à une connaissance approfondie des dernières technologies et outils, nous offrons un aperçu clair et complet de votre projet, afin d'assurer un alignement parfait du début à la fin.Au fil des années de collaboration avec des clients du monde entier, nous avons affiné notre approche pour proposer des solutions sur mesure qui s'adaptent à tout budget ou calendrier. Nous nous engageons à créer des expériences audiovisuelles efficaces qui répondent à vos objectifs, quelle que soit l'ampleur du projet.Grâce à notre expertise éprouvée, nous travaillons en étroite collaboration avec vous pour obtenir un résultat réussi, en livrant des résultats de la plus haute qualité. Discutons de la manière dont nous pouvons soutenir votre prochaine initiative d'intégration audiovisuelle.";

  // English content - YOUR UPDATED TEXT HERE
  const englishTitle = "Expertise You Can Trust";
  const englishText = "Our team consists of dedicated AV integration professionals, each bringing diverse skills and extensive experience to the table. With a thorough knowledge of the latest technologies and tools, we offer a clear, end-to-end overview of your project to ensure alignment from start to finish. Through years of collaboration with clients around the world, we've refined our approach to deliver tailored solutions that accommodate any budget or schedule. We're committed to crafting effective audio-visual experiences that meet your goals, regardless of project scale. With our proven expertise, we work closely with you to achieve a successful outcome, delivering results of the highest standard. Let's discuss how we can support your next AV integration initiative.";

  const [title, setTitle] = useState(frenchTitle);
  const [text, setText] = useState(frenchText);

  useEffect(() => {
    if (isEnglish) {
      setTitle(englishTitle);
      setText(englishText);
    } else {
      setTitle(frenchTitle);
      setText(frenchText);
    }
  }, [isEnglish]);

  return (
    <div className="App" style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      {/* Header */}
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1>ETC AudioVisual</h1>
        <button onClick={() => setIsEnglish(!isEnglish)} style={{ padding: '10px 20px', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
          {isEnglish ? 'FR' : 'EN'}
        </button>
      </header>

      {/* Your OurTeam Section */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#002556' }}>{title}</h2>
        <div style={{ background: 'yellow', padding: '20px', borderRadius: '5px', border: '1px solid #ccc' }}>
          <p>{text}</p>
        </div>
      </section>

      {/* Placeholder for Other Sections */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Services</h2>
        <p>Your services content here...</p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Contact</h2>
        <p>Email: contact@etcaudiovisual.com | Phone: +33 6 51 96 65 85</p>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '20px', background: '#f8f9fa', borderTop: '1px solid #dee2e6' }}>
        <p>&copy; 2023 ETC AudioVisual</p>
      </footer>
    </div>
  );
}

export default App;
