import { Link as RouterLink } from 'react-router-dom';
import { Mail, Phone, MapPin, Link as LinkIcon, MessageSquare, Users, Home, Building2, Star, FileText, Shield } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-surface" role="contentinfo">
      <div className="container py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <RouterLink to="/" className="flex items-center gap-2 mb-6" aria-label="Redbricks Home">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <Home className="w-6 h-6" aria-hidden="true" />
              </div>
              <span className="text-xl font-bold">{siteConfig.name}</span>
            </RouterLink>
            <p className="text-text-light text-base max-w-xs mb-8 leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex flex-wrap gap-4">
              {siteConfig.social.linkedin && (
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-secondary transition-colors" aria-label="LinkedIn">
                  <LinkIcon className="w-5 h-5" aria-hidden="true" />
                </a>
              )}
              {siteConfig.social.twitter && (
                <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-secondary transition-colors" aria-label="Twitter">
                  <MessageSquare className="w-5 h-5" aria-hidden="true" />
                </a>
              )}
              {siteConfig.social.facebook && (
                <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-secondary transition-colors" aria-label="Facebook">
                  <Users className="w-5 h-5" aria-hidden="true" />
                </a>
              )}
              {siteConfig.social.instagram && (
                <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-secondary transition-colors" aria-label="Instagram">
                  <Home className="w-5 h-5" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          <nav aria-label="Quick links">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {siteConfig.footer.quickLinks.map((link, index) => (
                <li key={index}>
                  <RouterLink to={link.href} className="text-text-light hover:text-secondary transition-colors text-sm">
                    {link.label}
                  </RouterLink>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Property services">
            <h3 className="font-semibold text-lg mb-4">Property Services</h3>
            <ul className="space-y-3">
              {siteConfig.footer.services.map((link, index) => (
                <li key={index}>
                  <RouterLink to={link.href} className="text-text-light hover:text-secondary transition-colors text-sm">
                    {link.label}
                  </RouterLink>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <address className="not-italic space-y-4 text-text-light text-sm">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-secondary" aria-hidden="true" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-secondary transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-secondary" aria-hidden="true" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-secondary transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-secondary" aria-hidden="true" />
                <div>
                  <p>{siteConfig.contact.address.line1}</p>
                  <p>{siteConfig.contact.address.line2}</p>
                  <p>{siteConfig.contact.address.city} {siteConfig.contact.address.postcode}</p>
                  <p>{siteConfig.contact.address.country}</p>
                </div>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-light">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-text-light text-sm">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <nav aria-label="Legal links" className="flex flex-wrap items-center gap-6">
              {siteConfig.footer.legal.map((link, index) => (
                <RouterLink key={index} to={link.href} className="text-text-light hover:text-secondary transition-colors text-sm">
                  {link.label}
                </RouterLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;