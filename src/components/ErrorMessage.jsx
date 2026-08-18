import { AlertTriangle } from 'lucide-react';

/**
 * Reusable alert component for displaying errors.
 * 
 * @param {string} message - Error details text
 * @param {string} className - Optional CSS override classes
 */
export const ErrorMessage = ({ message, className = '' }) => {
  if (!message) return null;
  return (
    <div className={`alert alert-error ${className}`} role="alert" data-testid="error-message">
      <AlertTriangle className="alert-icon" size={20} style={{ color: 'var(--error)' }} />
      <span>{message}</span>
    </div>
  );
};

export default ErrorMessage;
