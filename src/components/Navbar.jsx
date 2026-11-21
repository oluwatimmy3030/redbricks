import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Home } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import Button from './Button';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const dropdownTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const handleMobileDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const startCloseDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 300);
  };

  const cancelCloseDropdown = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
  };

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-surface/95 backdrop-blur-sm shadow-md' : 'bg-surface/95 backdrop-blur-sm shadow-md'}`}>
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      <nav className="container relative z-50" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2" aria-label="Redbricks Home">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
              <Home className="w-6 h-6 text-surface" aria-hidden="true" />
            </div>
            <span className="text-xl font-bold text-primary hidden sm:block">{siteConfig.name}</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {siteConfig.navigation.main.map((item, index) => (
              <div key={index} className="relative" onMouseEnter={cancelCloseDropdown} onMouseLeave={startCloseDropdown}>
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      onMouseEnter={cancelCloseDropdown}
                      onMouseLeave={startCloseDropdown}
                      className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        isActive(item.href) ? 'text-secondary' : 'text-text hover:text-primary'
                      }`}
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} aria-hidden="true" />
                    </button>
                    {openDropdown === item.label && (
                      <div
                        className="absolute top-full left-0 mt-2 w-56 bg-surface rounded-xl shadow-xl border border-border py-2 animate-slide-down"
                        role="menu"
                        onMouseEnter={cancelCloseDropdown}
                        onMouseLeave={startCloseDropdown}
                      >
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.href}
                            className={`block px-4 py-2.5 text-sm transition-colors ${
                              isActive(subItem.href) ? 'bg-primary/5 text-secondary' : 'text-text hover:bg-primary/5 hover:text-primary'
                            }`}
                            role="menuitem"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.href) ? 'bg-primary/10 text-primary' : 'text-text hover:bg-primary/5 hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link to={siteConfig.navigation.cta.href} className="ml-2">
              <Button variant="secondary" size="sm">
                {siteConfig.navigation.cta.label}
              </Button>
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className="w-6 h-6" aria-hidden="true" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-slide-down bg-surface">
            <div className="flex flex-col gap-2">
              {siteConfig.navigation.main.map((item, index) => (
                <div key={index}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleMobileDropdown(item.label)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left text-base font-medium ${
                          openDropdown === item.label ? 'bg-primary/5 text-primary' : 'text-text hover:bg-primary/5'
                        }`}
                        aria-expanded={openDropdown === item.label}
                      >
                        {item.label}
                        <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} aria-hidden="true" />
                      </button>
                      {openDropdown === item.label && (
                        <div className="mt-2 ml-4 border-l-2 border-border pl-4 space-y-2">
                          {item.dropdown.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.href}
                              className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                                isActive(subItem.href) ? 'text-secondary bg-primary/5' : 'text-text hover:text-primary'
                              }`}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        isActive(item.href) ? 'bg-primary/5 text-primary' : 'text-text hover:bg-primary/5'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border">
                <Link to={siteConfig.navigation.cta.href} onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="secondary" fullWidth>
                    {siteConfig.navigation.cta.label}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;