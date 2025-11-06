import React from 'react';
import OurTeam from './components/OurTeam';  // Add this line (imports your new component)

function App() {
  return (
    <div className="App">
      <OurTeam />  {/* Add this line - renders the yellow box */}
      {/* Add other components here, e.g. <Header />, <Footer /> */}
    </div>
  );
}

export default App;
