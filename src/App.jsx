import React, { useMemo } from 'react';
import { HashRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

const App = ({ data }) => {
  const primaryTable = Object.keys(data)[0];
  
  const content = (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)] transition-colors duration-500">
        <Header primaryTable={data[primaryTable]} tableName={primaryTable} siteSettings={data['site_settings']} />
        
        <main>
          <Section data={data} />
        </main>

        <Footer data={data} />
      </div>
    </Router>
  );

  

  
  return content;
  
};

export default App;