
/**
 * Reusable loading component with animated spinner.
 * 
 * @param {string} message - Text description of loading action
 */
export const Loading = ({ message = 'Please wait...' }) => {
  return (
    <div className="loading-container" role="status" aria-live="polite">
      <div className="loading-spinner" data-testid="loading-spinner"></div>
      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{message}</p>
    </div>
  );
};

export default Loading;
