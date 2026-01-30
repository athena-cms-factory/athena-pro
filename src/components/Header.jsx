import React from 'react';
import EditableText from './EditableText';

import { Link } from 'react-router-dom';

function Header({ primaryTable, siteSettings = {} }) {
  
  const info = Array.isArray(primaryTable) ? (primaryTable[0] || {}) : (primaryTable || {});
  
  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-[1000] border-b border-slate-100 px-6 py-4 transition-colors duration-500"
      style={{ backgroundColor: 'var(--color-header-bg, rgba(255,255,255,0.8))', backdropFilter: 'blur(12px)' }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Naam */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform">
            {info.site_naam?.charAt(0) || info.naam?.charAt(0) || 'A'}
          </div>
          <span className="text-xl font-serif font-bold tracking-tight text-primary">
            <EditableText value={info.site_naam || info.naam || 'Athena'} cmsBind={{file: 'basisgegevens', index: 0, key: info.site_naam ? 'site_naam' : 'naam'}} />
          </span>
        </Link>

        {/* Navigatie & Cart */}
        <div className="flex items-center gap-8">
          {}
        </div>
      </div>
    </nav>
  );
}

export default Header;
