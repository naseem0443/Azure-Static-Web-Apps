import { Target, Eye, ShieldAlert } from 'lucide-react';

/**
 * AboutSection component.
 * Displays company overview along with key Mission, Vision, and Values layout.
 */
export const AboutSection = () => {
  return (
    <section className="section" aria-label="About Overview">
      <div className="container">
        <div className="split-layout">
          <div>
            <span className="hero-card-tag" style={{ marginBottom: '16px' }}>OUR CORE PHILOSOPHY</span>
            <h2 style={{ marginBottom: '24px' }}>Engineering High-Performance Digital Solutions</h2>
            <p style={{ marginBottom: '20px', fontSize: '1.05rem' }}>
              Apex Solutions was founded on the principle of bringing enterprise-grade architecture, robust development workflows, and bulletproof security to organizations navigating digital transitions.
            </p>
            <p style={{ marginBottom: '20px' }}>
              We partner with global operations to deliver clean, scalable interfaces, automated backend processes, and reliable infrastructure designs.
            </p>
            <p>
              Our certified engineering teams specialize in cloud migration, DevOps acceleration, and modern React architectures, ensuring your software foundations are robust, auditable, and future-proof.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }} data-testid="about-pillars">
            <div className="pillar-card" style={{ display: 'flex', gap: '20px', textAlign: 'left', padding: '24px', alignItems: 'flex-start' }}>
              <div className="pillar-icon" style={{ margin: 0, flexShrink: 0, width: 48, height: 48 }}>
                <Target size={20} aria-hidden="true" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Our Mission</h3>
                <p style={{ fontSize: '0.92rem' }}>
                  To engineer reliable, clean, and highly secure cloud technologies that simplify complex business workflows and maximize enterprise agility.
                </p>
              </div>
            </div>

            <div className="pillar-card" style={{ display: 'flex', gap: '20px', textAlign: 'left', padding: '24px', alignItems: 'flex-start' }}>
              <div className="pillar-icon" style={{ margin: 0, flexShrink: 0, width: 48, height: 48 }}>
                <Eye size={20} aria-hidden="true" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Our Vision</h3>
                <p style={{ fontSize: '0.92rem' }}>
                  To be the global benchmark for enterprise digital platforms, known for architectural elegance, software quality, and cloud operations.
                </p>
              </div>
            </div>

            <div className="pillar-card" style={{ display: 'flex', gap: '20px', textAlign: 'left', padding: '24px', alignItems: 'flex-start' }}>
              <div className="pillar-icon" style={{ margin: 0, flexShrink: 0, width: 48, height: 48 }}>
                <ShieldAlert size={20} aria-hidden="true" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Our Values</h3>
                <p style={{ fontSize: '0.92rem' }}>
                  We operate with a security-first mindset, value engineering transparency, and commit to delivering modular, well-tested code in every engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
