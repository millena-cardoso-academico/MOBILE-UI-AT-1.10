import { useState, useEffect } from 'react';
import icone_usuario from '../images/icone_usuario.png';

const Menu = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileView, setIsMobileView] = useState(true);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsMobileView(false);
      setIsExpanded(false);
    } else {
      setIsMobileView(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="menu-container">
      <div className="menu-header">
        {isMobileView && (
          <div className="menu-icon" onClick={toggleMenu}>
            <div className="menu-bar"></div>
            <div className="menu-bar"></div>
            <div className="menu-bar"></div>
          </div>
        )}
        <h1 className="brand-title">Alquimia das Linhas</h1>
        {!isMobileView && (
          <ul className="menu-horizontal">
            <li>Sobre nós</li>
            <li>Loja</li>
            <li>Novidades</li>
            <li>Contato</li>
          </ul>
        )}
        <img src={icone_usuario} alt="User Icon" className="user-icon" />
      </div>

      {isMobileView && isExpanded && (
        <ul className="menu-options">
          <li>Sobre nós</li>
          <li>Loja</li>
          <li>Novidades</li>
          <li>Contato</li>
        </ul>
      )}
    </div>
  );
};

export default Menu;