import React from 'react';
import OurTeam from './components/OurTeam';  // Your updated text component

// Add these if missing (create stub files as below)
import Header from './components/Header';  // Nav bar
import Services from './components/Services';  // Services section
import Footer from './components/Footer';  // Footer

function App() {
  return (
    <div className="App">
      <Header />  {/* Top nav */}
      <OurTeam />  {/* Your section with new text */}
      <Services />  {/* Other content */}
      <Footer />  {/* Bottom */}
    </div>
  );
}

export default App;
