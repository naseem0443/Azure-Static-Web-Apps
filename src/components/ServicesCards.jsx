import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../utils/servicesData';

/**
 * ServicesCards grid component.
 * Displays interactive service overview cards with Lucide icons.
 * 
 * @param {number} limit - Optional count of cards to render.
 */
export const ServicesCards = ({ limit }) => {
  const navigate = useNavigate();
  const renderedServices = limit ? servicesData.slice(0, limit) : servicesData;

  return (
    <div className="services-grid" data-testid="services-cards-grid">
      {renderedServices.map((service) => {
        const IconComponent = service.icon;
        return (
          <article key={service.id} className="service-card">
            <div className="service-icon-wrapper" aria-hidden="true">
              <IconComponent size={26} />
            </div>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <button
              onClick={() => navigate(`/contact?subject=Inquiry: ${encodeURIComponent(service.name)}`)}
              className="service-cta"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              aria-label={`Inquire about ${service.name}`}
            >
              <span>{service.ctaText}</span>
              <ArrowRight size={14} />
            </button>
          </article>
        );
      })}
    </div>
  );
};

export default ServicesCards;
