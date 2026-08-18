import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { validateName, validateEmail, validatePhone, validateSubject, validateMessage } from '../utils/validation';
import { submitContactForm } from '../services/contactService';
import Button from './Button';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';

/**
 * ContactForm component.
 * Implements client-side validation, anti-duplicate submissions, and handles API operations.
 * 
 * @param {string} initialSubject - Pre-populated subject line (e.g., from service card referrals)
 */
export const ContactForm = ({ initialSubject = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: initialSubject,
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [apiError, setApiError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear validation error for this field on input change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let error = '';
    
    if (name === 'name') error = validateName(value);
    if (name === 'email') error = validateEmail(value);
    if (name === 'phone') error = validatePhone(value);
    if (name === 'subject') error = validateSubject(value);
    if (name === 'message') error = validateMessage(value);
    
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Run validation across all fields
    const formErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      subject: validateSubject(formData.subject),
      message: validateMessage(formData.message)
    };

    // Filter out empty error strings
    const hasErrors = Object.values(formErrors).some(err => err !== '');
    if (hasErrors) {
      setErrors(formErrors);
      return;
    }

    // Reset states
    setIsSubmitting(true);
    setApiError(null);
    setSubmitSuccess(false);

    try {
      await submitContactForm(formData);
      setSubmitSuccess(true);
      // Clear form inputs
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
      setErrors({});
    } catch (err) {
      setApiError(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-card" data-testid="contact-form-container">
      {submitSuccess && (
        <div className="alert alert-success" role="alert" data-testid="success-banner" style={{ marginBottom: '24px' }}>
          <CheckCircle className="alert-icon" size={20} style={{ color: 'var(--success)' }} />
          <span>Your message has been successfully sent! We will contact you shortly.</span>
        </div>
      )}

      {apiError && <ErrorMessage message={apiError} style={{ marginBottom: '24px' }} />}

      {isSubmitting ? (
        <Loading message="Sending your message to our team..." />
      ) : (
        <form onSubmit={handleSubmit} noValidate aria-label="Contact sales and engineering team">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name-input">Full Name *</label>
              <input
                id="name-input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                placeholder="John Doe"
              />
              {errors.name && <span className="error-text" id="name-error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email-input">Email Address *</label>
              <input
                id="email-input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                placeholder="john@company.com"
              />
              {errors.email && <span className="error-text" id="email-error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone-input">Phone Number</label>
              <input
                id="phone-input"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                placeholder="+1 (206) 555-0100"
              />
              {errors.phone && <span className="error-text" id="phone-error">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="company-input">Company</label>
              <input
                id="company-input"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="form-control"
                placeholder="Acme Corp"
              />
            </div>

            <div className="form-group form-full-width">
              <label htmlFor="subject-input">Subject *</label>
              <input
                id="subject-input"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                aria-required="true"
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
                placeholder="Inquiry regarding services"
              />
              {errors.subject && <span className="error-text" id="subject-error">{errors.subject}</span>}
            </div>

            <div className="form-group form-full-width">
              <label htmlFor="message-input">Message *</label>
              <textarea
                id="message-input"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                rows="5"
                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                aria-required="true"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                placeholder="Please describe your project requirements in detail..."
                style={{ resize: 'vertical' }}
              />
              {errors.message && <span className="error-text" id="message-error">{errors.message}</span>}
            </div>
          </div>

          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            icon={Send}
            style={{ width: '100%' }}
          >
            Send Inquiry
          </Button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;


