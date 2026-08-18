/**
 * Service to manage contact form submissions.
 * Supports a mock mode for local testing without backend infrastructure.
 */

export const submitContactForm = async (contactData) => {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '';
  
  // Check if mock mode is active
  if (apiBaseUrl === 'mock') {
    // Simulate network latency (1.5 seconds)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Developer helper: simulate error conditions using specific test values
    if (contactData.email === 'fail@example.com' || contactData.subject.toLowerCase().includes('trigger error')) {
      throw new Error('Server connection failed. Simulated API Error.');
    }
    
    return {
      success: true,
      message: 'Thank you! Your message has been successfully received (Simulated Success).',
      data: contactData
    };
  }

  // Production or actual Azure SWA backend integration
  // Relative URL `/api/contact` or prepended with apiBaseUrl if running core tools on a separate port
  const endpoint = `${apiBaseUrl.replace(/\/$/, '')}/api/contact`;
  
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: contactData.name,
      email: contactData.email,
      phone: contactData.phone || '',
      company: contactData.company || '',
      subject: contactData.subject,
      message: contactData.message
    }),
  });

  if (!response.ok) {
    let errorMessage = 'Failed to submit contact message.';
    try {
      const errBody = await response.json();
      errorMessage = errBody.message || errorMessage;
    } catch {
      // Fail silently and use default message if body is not JSON
    }
    throw new Error(errorMessage);
  }

  return await response.json();
};
