const { app } = require('@azure/functions');
const { getSecret } = require('../services/keyVault');

app.http('contact', {
  methods: ['POST'],
  authLevel: 'anonymous',

  handler: async (request, context) => {
    context.log('HTTP function processed contact form submission.');

    try {
      const body = await request.json();

      const {
        name,
        email,
        phone,
        company,
        subject,
        message
      } = body;

      if (!name || !email || !subject || !message) {
        return {
          status: 400,
          jsonBody: {
            success: false,
            message:
              'Missing required fields. Name, email, subject, and message are required.'
          }
        };
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        return {
          status: 400,
          jsonBody: {
            success: false,
            message: 'Invalid email address format.'
          }
        };
      }

      // Test Key Vault connectivity
      const testSecret = await getSecret('test-secret');

      context.log(
        `Key Vault secret retrieved successfully. Secret length: ${testSecret.length}`
      );

      return {
        status: 200,
        jsonBody: {
          success: true,
          message: 'Contact request received',
          keyVault: 'connected'
        }
      };

    } catch (error) {
      context.error(
        'Error processing contact request:',
        error.message || error
      );

      return {
        status: 500,
        jsonBody: {
          success: false,
          message: 'Unable to process contact request.'
        }
      };
    }
  }
});