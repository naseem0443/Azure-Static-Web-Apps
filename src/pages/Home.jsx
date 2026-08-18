import { useNavigate } from 'react-router-dom';
import { ShieldAlert, Zap, RefreshCw, Layers, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import ServicesCards from '../components/ServicesCards';
import Button from '../components/Button';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';

/**
 * Home page.
 * Implements the homepage structure, utilizing the Hero, ServicesCards snippet, Why Choose Us, and Contact CTA.
 */
export const Home = () => {
  const navigate = useNavigate();
  useDocumentMetadata(
    'Home - Enterprise Cloud & IT Solutions',
    'Apex Solutions delivers top-tier cloud architecture consulting, custom React applications, DevOps workflows, and robust enterprise cybersecurity strategies.'
  );

  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <Hero />

      {/* Metrics Section */}
      <section className="section" style={{ padding: '60px 0', borderBottom: '1px solid var(--border)' }} aria-label="System Metrics">
        <div className="container">
          <div className="metrics-row" data-testid="metrics-row">
            <div className="metric-item">
              <div className="metric-number">99.99%</div>
              <div className="metric-label">Client Uptime Guarantee</div>
            </div>
            <div className="metric-item">
              <div className="metric-number">150+</div>
              <div className="metric-label">Cloud Systems Migrated</div>
            </div>
            <div className="metric-item">
              <div className="metric-number">40M+</div>
              <div className="metric-label">Secure API Calls / Day</div>
            </div>
            <div className="metric-item">
              <div className="metric-number">15min</div>
              <div className="metric-label">Average Incident Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section section-bg-gradient" aria-label="Services overview">
        <div className="container">
          <div className="section-header">
            <span className="hero-card-tag" style={{ marginBottom: '16px' }}>OUR CAPABILITIES</span>
            <h2>Enterprise Services Built For Growth</h2>
            <p>We provide full-lifecycle software engineering and systems design to modernize your operations.</p>
          </div>
          
          <ServicesCards limit={3} />
          
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Button 
              variant="outline" 
              onClick={() => navigate('/services')} 
              icon={ArrowRight}
              aria-label="View all consulting services"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }} aria-label="Why choose Apex Solutions">
        <div className="container">
          <div className="split-layout">
            <div>
              <span className="hero-card-tag" style={{ marginBottom: '16px' }}>THE APEX ADVANTAGE</span>
              <h2>Why Enterprises Partner With Us</h2>
              <p style={{ marginBottom: '32px', fontSize: '1.05rem' }}>
                Deploying software to production demands systematic engineering, regression protection, and absolute design security.
              </p>
              
              <div className="feature-list">
                <div className="feature-item">
                  <div className="feature-icon" aria-hidden="true"><ShieldAlert size={16} /></div>
                  <div className="feature-text">
                    <h4>Security-First Implementation</h4>
                    <p>Every line of code and infrastructure layout operates under zero-trust designs and strict credential protection.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon" aria-hidden="true"><Zap size={16} /></div>
                  <div className="feature-text">
                    <h4>Optimized Performance</h4>
                    <p>Our applications leverage static bundling, tree-shaking, and efficient DOM updates to minimize loading lag.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon" aria-hidden="true"><RefreshCw size={16} /></div>
                  <div className="feature-text">
                    <h4>CI/CD GitOps Automation</h4>
                    <p>Deployments are automated through declarative GitHub Action workflows, containing strict integration and unit checks.</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }} aria-hidden="true">
              <div className="hero-glass-card" style={{ background: 'linear-gradient(135deg, rgba(20, 24, 33, 0.4) 0%, rgba(10, 12, 18, 0.2) 100%)', boxShadow: 'none' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Layers size={22} style={{ color: 'var(--accent)' }} /> Compliance Ready</h3>
                <p style={{ margin: '24px 0', fontSize: '0.95rem' }}>
                  Our cloud deployments and consulting practices follow rigid validation schemes for regulatory standards.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  <span className="hero-card-tag">SOC 2 Type II</span>
                  <span className="hero-card-tag">HIPAA Audit Ready</span>
                  <span className="hero-card-tag">GDPR Aligned</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Banner */}
      <section className="section" aria-label="Consultation inquiry">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <h3>Ready To Modernize Your Systems?</h3>
              <p>Talk with our principal cloud architects and developers today to map out your infrastructure goals.</p>
            </div>
            <Button 
              variant="primary" 
              onClick={() => navigate('/contact')} 
              icon={ArrowRight}
              aria-label="Navigate to contact form"
            >
              Request Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
