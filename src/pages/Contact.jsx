import { useSearchParams } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { MapPin, Phone, Mail } from 'lucide-react';

/**
 * Contact page wrapper.
 * Retrieves referer search parameters to initialize subject text inside the ContactForm component.
 */
export const Contact = () => {
  const [searchParams] = useSearchParams();
  const initialSubject = searchParams.get('subject') || '';

  useDocumentMetadata(
    'Contact Us - Request Consultation',
    'Get in touch with the engineering team at Apex Solutions to discuss your next software, cloud migration, or security project.'
  );

  return (
    <div data-testid="contact-page">
      <section className="page-header">
        <div className="container">
          <span className="hero-card-tag" style={{ marginBottom: '16px' }}>GET IN TOUCH</span>
          <h1>Contact Our Team</h1>
          <p>We are ready to assist with your enterprise integration, cybersecurity, and cloud migration requirements.</p>
        </div>
      </section>

      <section className="section" aria-label="Contact options">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info-panel">
              <div>
                <h2 style={{ marginBottom: '16px' }}>Start a Conversation</h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
                  Have an upcoming modernization project or need architectural advisory? Complete the contact form to connect directly with our engineering department.
                </p>
              </div>

              <div className="contact-details" data-testid="contact-info-details">
                <div className="contact-detail-item">
                  <div className="contact-detail-icon" aria-hidden="true">
                    <MapPin size={20} />
                  </div>
                  <div className="contact-detail-text">
                    <h4>Headquarters Office</h4>
                    <p>100 Enterprise Way, Suite 400<br />Seattle, WA 98101</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon" aria-hidden="true">
                    <Phone size={20} />
                  </div>
                  <div className="contact-detail-text">
                    <h4>Telephone Support</h4>
                    <p>+1 (206) 555-0199</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon" aria-hidden="true">
                    <Mail size={20} />
                  </div>
                  <div className="contact-detail-text">
                    <h4>Email Address</h4>
                    <p>contact@apexsolutions.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm key={initialSubject} initialSubject={initialSubject} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
