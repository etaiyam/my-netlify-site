import React from 'react';
import OurTeam from './components/OurTeam';  // Your updated component
// Add other imports (create stubs if missing)
import Header from './components/Header';  // e.g., your nav bar
import Services from './components/Services';  // e.g., services section
import Footer from './components/Footer';  // e.g., footer

function App() {
  return (
    <div className="App">
      <Header />  {/* Nav/Header */}
      <OurTeam />  {/* Your yellow box section */}
      <Services />  {/* Other sections */}
      <Footer />  {/* Footer */}
    </div>
  );
}

export default App;
