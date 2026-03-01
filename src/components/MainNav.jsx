import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navigation } from '../config';

export default function MainNav({ onSearchClick, showSearch = true, showGraph = true }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="flex items-center gap-3 sm:gap-4">
      {/* Always visible on all screens */}
      {navigation.slice(1).map((item) => (
        <Link
          key={item.path}
          to={item.path}
          onClick={closeMenu}
          className="text-sm sm:text-base transition-all duration-200 hover:text-terminal-green hover:underline cursor-pointer"
        >
          {item.label}
        </Link>
      ))}

      {/* Desktop: search and graph always visible */}
      <div className="hidden sm:flex items-center gap-3 sm:gap-4">
        {showSearch && (
          <button
            onClick={onSearchClick}
            className="text-sm sm:text-base transition-all duration-200 hover:text-terminal-green hover:underline cursor-pointer"
            title="Search (Ctrl+K)"
          >
            search
          </button>
        )}
        {showGraph && (
          <Link
            to="/graph"
            className="text-sm sm:text-base transition-all duration-200 hover:text-terminal-green hover:underline cursor-pointer"
          >
            graph
          </Link>
        )}
      </div>

      {/* Mobile: hamburger menu for search and graph */}
      <div className="sm:hidden relative">
        <button
          onClick={toggleMenu}
          className="text-sm transition-all duration-200 hover:text-terminal-green cursor-pointer"
          title="Menu"
        >
          ☰
        </button>

        {isOpen && (
          <>
            <div 
              className="fixed inset-0 z-40" 
              onClick={closeMenu}
            />
            <div className="absolute right-0 top-full mt-2 bg-gray-900 border border-terminal-green/30 rounded-lg shadow-lg z-50 py-2 min-w-[140px]">
              {showSearch && (
                <button
                  onClick={() => {
                    onSearchClick();
                    closeMenu();
                  }}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-terminal-green/10 transition-colors cursor-pointer"
                >
                  search
                </button>
              )}
              {showGraph && (
                <Link
                  to="/graph"
                  onClick={closeMenu}
                  className="block px-4 py-2 text-sm hover:bg-terminal-green/10 transition-colors"
                >
                  graph
                </Link>
              )}
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
