import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from './Button';

/**
 * Enterprise Hero component.
 * Displays high-converting title, summary, buttons, and a decorative interactive glass metric card.
 */
export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-wrapper" aria-label="Hero Introduction">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-card-tag" style={{ marginBottom: '16px' }}>Enterprise IT Transformation</div>
            <h1>
              Accelerating Digital <span className="gradient-text">Evolution</span> For Global Teams
            </h1>
            <p>
              We design, build, and secure next-generation cloud architectures and custom enterprise software applications to power modern enterprise operations.
            </p>
            <div className="hero-buttons">
              <Button 
                variant="primary" 
                onClick={() => navigate('/contact')} 
                icon={ArrowRight}
                aria-label="Get started today"
              >
                Get Started
              </Button>
              <Button 
                variant="secondary" 
                onClick={() => navigate('/services')}
                aria-label="View our services"
              >
                View Services
              </Button>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-glass-card">
              <div>
                <span className="hero-card-tag">SYSTEM METRIC</span>
                <h3 style={{ marginTop: '16px', fontSize: '1.75rem', fontWeight: 800 }}>Migration Speed</h3>
              </div>
              <div style={{ margin: '24px 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Core System Transfer</span>
                  <strong style={{ color: 'var(--accent)' }}>94% Completed</strong>
                </div>
                <div style={{ height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '94%', height: '100%', background: 'linear-gradient(90deg, var(--primary), var(--accent))' }}></div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Status: Optimizing...</span>
                <span style={{ color: 'var(--accent)' }}>Uptime Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
