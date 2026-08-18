/**
 * Service to manage contact form submissions.
 *
 * Supports:
 * - Mock mode for frontend-only development
 * - Local Azure Functions Core Tools
 * - Azure Static Web Apps managed API
 */

export const submitContactForm = async (contactData) => {
  const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || '').trim();

  // ---------------------------------------------------------
  // Mock mode
  // ---------------------------------------------------------
  if (apiBaseUrl.toLowerCase() === 'mock') {
    // Simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Simulate API error for testing
    const email = contactData.email?.trim().toLowerCase() || '';
    const subject = contactData.subject?.trim().toLowerCase() || '';

    if (
      email === 'fail@example.com' ||
      subject.includes('trigger error')
    ) {
      throw new Error('Server connection failed. Simulated API Error.');
    }

    return {
      success: true,
      message:
        'Thank you! Your message has been successfully received (Simulated Success).',
      data: contactData,
    };
  }

  // ---------------------------------------------------------
  // Azure Function API
  // ---------------------------------------------------------
  //
  // Production:
  //   VITE_API_BASE_URL=""
  //   -> /api/contact
  //
  // Local Functions Core Tools:
  //   VITE_API_BASE_URL="http://localhost:7071"
  //   -> http://localhost:7071/api/contact
  //
  const normalizedBaseUrl = apiBaseUrl.replace(/\/+$/, '');

  const endpoint = `${normalizedBaseUrl}/api/contact`;

  // ---------------------------------------------------------
  // Submit request
  // ---------------------------------------------------------
  let response;

  try {
    response = await fetch(endpoint, {
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
        message: contactData.message,
      }),
    });
  } catch {
    throw new Error(
      'Network error. Please check your internet connection and try again.'
    );
  }

  // ---------------------------------------------------------
  // Handle server error responses
  // ---------------------------------------------------------
  if (!response.ok) {
    let errorMessage = 'Failed to submit contact message.';

    try {
      const errBody = await response.json();
      errorMessage = errBody.message || errorMessage;
    } catch {
      // Fallback
    }

    throw new Error(errorMessage);
  }

  // ---------------------------------------------------------
  // Parse successful response
  // ---------------------------------------------------------
  try {
    const result = await response.json();

    return result;
  } catch {
    throw new Error(
      'The server returned an invalid response. Please try again.'
    );
  }
};
