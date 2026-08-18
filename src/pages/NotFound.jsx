import { useNavigate } from 'react-router-dom';
import { Home, HelpCircle } from 'lucide-react';
import Button from '../components/Button';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';

/**
 * Custom 404 NotFound page.
 * Displays clean error notice and triggers navigation redirect shortcuts.
 */
export const NotFound = () => {
  const navigate = useNavigate();
  useDocumentMetadata('404 Page Not Found', 'The requested page was not found at this location.');

  return (
    <div className="error-page-wrapper" data-testid="not-found-page">
      <div className="error-page-content">
        <h1>404</h1>
        <h2>Resource Not Found</h2>
        <p>The requested page could not be located. It might have been moved, deleted, or the URL structure may be incorrect.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <Button 
            variant="primary" 
            onClick={() => navigate('/')} 
            icon={Home}
            aria-label="Return to homepage"
          >
            Back to Home
          </Button>
          <Button 
            variant="secondary" 
            onClick={() => navigate('/contact')} 
            icon={HelpCircle}
            aria-label="Navigate to contact form for support"
          >
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
