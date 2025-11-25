import React, { useState } from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import Hero from './components/Hero';
import NicheSelector from './components/NicheSelector';
import HowItWorks from './components/HowItWorks';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import { niches } from './data/niches';

function App() {
  const [currentNicheId, setCurrentNicheId] = useState('default');
  const currentNiche = niches[currentNicheId];

  const handleScrollToNiche = () => {
    const element = document.getElementById('niche-selector');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNicheSelect = (id) => {
    setCurrentNicheId(id);
    // Smooth scroll to next section after a short delay
    setTimeout(() => {
      const element = document.getElementById('how-it-works');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <Layout>
      <Header />
      <Hero niche={currentNiche} onScrollToNiche={handleScrollToNiche} />
      <NicheSelector
        currentNicheId={currentNicheId}
        onSelectNiche={handleNicheSelect}
      />
      <div id="how-it-works">
        <HowItWorks niche={currentNiche} />
      </div>
      {/* <SocialProof niche={currentNiche} /> */}
      <Pricing niche={currentNiche} />
      <FinalCTA />
      <Footer />
    </Layout>
  );
}

export default App;
