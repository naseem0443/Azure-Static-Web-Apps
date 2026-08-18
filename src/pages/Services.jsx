import ServicesCards from '../components/ServicesCards';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';

/**
 * Services catalog page.
 * Displays the complete set of enterprise services and details the operational delivery methodology.
 */
export const Services = () => {
  useDocumentMetadata(
    'Services - IT Infrastructure & Cloud Architecture',
    'Explore our professional engineering services: Cloud Migration, Cyber Security audits, Enterprise App Development, and Strategic Architecture reviews.'
  );

  return (
    <div data-testid="services-page">
      <section className="page-header">
        <div className="container">
          <span className="hero-card-tag" style={{ marginBottom: '16px' }}>SERVICES PORTFOLIO</span>
          <h1>Enterprise Engineering Services</h1>
          <p>Next-generation digital capabilities designed to secure, scale, and automate your company operations.</p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="section section-bg-gradient" aria-label="Capabilities grid">
        <div className="container">
          <ServicesCards />
        </div>
      </section>

      {/* Delivery Methodology Section */}
      <section className="section" style={{ borderTop: '1px solid var(--border)' }} aria-label="Our delivery methodology">
        <div className="container">
          <div className="section-header">
            <h2>Our Operational Model</h2>
            <p>How we partner with your engineering teams to audit, architect, and deploy production resources.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }} data-testid="methodology-grid">
            <div className="pillar-card" style={{ padding: '32px', textAlign: 'left' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--accent)', marginBottom: '16px' }}>01</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Discovery & Audit</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                We inspect codebases, database behaviors, and network routing configurations to assess optimization boundaries.
              </p>
            </div>

            <div className="pillar-card" style={{ padding: '32px', textAlign: 'left' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--accent)', marginBottom: '16px' }}>02</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Topology Blueprinting</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                We draw out landing zones, networking graphs, database replication strategies, and pipeline flows.
              </p>
            </div>

            <div className="pillar-card" style={{ padding: '32px', textAlign: 'left' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--accent)', marginBottom: '16px' }}>03</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>GitOps Execution</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Our teams deploy infrastructure via IaC models and ship fully-verified, modular code with complete automated checks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
