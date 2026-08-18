import AboutSection from '../components/AboutSection';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';

/**
 * About page.
 * Combines company overview header, mission statement, and operational milestone timeline.
 */
export const About = () => {
  useDocumentMetadata(
    'About - Corporate Profile & Philosophy',
    'Learn about Apex Solutions - our history, mission, vision, core engineering principles, and values.'
  );

  return (
    <div data-testid="about-page">
      <section className="page-header">
        <div className="container">
          <span className="hero-card-tag" style={{ marginBottom: '16px' }}>CORPORATE PROFILE</span>
          <h1>Who We Are</h1>
          <p>A specialized team of engineers, developers, and cloud architects committed to building robust digital architectures.</p>
        </div>
      </section>

      {/* Reusable Mission/Vision/Values section */}
      <AboutSection />

      {/* Corporate Timeline Section */}
      <section className="section" style={{ borderTop: '1px solid var(--border)' }} aria-label="Corporate Timeline">
        <div className="container">
          <div className="section-header">
            <h2>Our Operational Milestones</h2>
            <p>From initial consultancy to launching global architectures, here is our journey.</p>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }} data-testid="timeline">
            <div style={{ display: 'flex', gap: '32px' }}>
              <div style={{ minWidth: '80px', fontWeight: '800', fontSize: '1.25rem', color: 'var(--accent)', textAlign: 'right' }}>2022</div>
              <div style={{ borderLeft: '2px solid var(--primary)', paddingLeft: '32px', position: 'relative' }}>
                <div style={{ width: '12px', height: '12px', background: 'var(--bg)', border: '3px solid var(--accent)', borderRadius: '50%', position: 'absolute', left: '-7px', top: '8px' }}></div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '8px' }}>Apex Solutions Founded</h3>
                <p style={{ fontSize: '0.95rem' }}>Established in Seattle, WA with a focus on custom cloud-native APIs and identity access management integration.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '32px' }}>
              <div style={{ minWidth: '80px', fontWeight: '800', fontSize: '1.25rem', color: 'var(--accent)', textAlign: 'right' }}>2024</div>
              <div style={{ borderLeft: '2px solid var(--primary)', paddingLeft: '32px', position: 'relative' }}>
                <div style={{ width: '12px', height: '12px', background: 'var(--bg)', border: '3px solid var(--accent)', borderRadius: '50%', position: 'absolute', left: '-7px', top: '8px' }}></div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '8px' }}>Enterprise Expansion</h3>
                <p style={{ fontSize: '0.95rem' }}>Launched our Cloud Infrastructure Migration practice. Reached the milestone of managing 50+ enterprise production clusters.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '32px' }}>
              <div style={{ minWidth: '80px', fontWeight: '800', fontSize: '1.25rem', color: 'var(--accent)', textAlign: 'right' }}>2026</div>
              <div style={{ borderLeft: '2px solid var(--primary)', paddingLeft: '32px', position: 'relative' }}>
                <div style={{ width: '12px', height: '12px', background: 'var(--bg)', border: '3px solid var(--accent)', borderRadius: '50%', position: 'absolute', left: '-7px', top: '8px' }}></div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '8px' }}>Secured Global Architectures</h3>
                <p style={{ fontSize: '0.95rem' }}>Enhanced security compliance consulting division, helping clients conform to modern privacy requirements and SOC 2 audits.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
