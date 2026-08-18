const { app } = require('@azure/functions');

app.http('contact', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`HTTP function processed contact form submission.`);

        try {
            const body = await request.json();
            
            // Basic fields extraction
            const { name, email, phone, company, subject, message } = body;
            
            // Basic required fields check
            if (!name || !email || !subject || !message) {
                return {
                    status: 400,
                    jsonBody: {
                        success: false,
                        message: 'Missing required fields. Name, email, subject, and message are required.'
                    }
                };
            }

            // Basic email pattern check
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

            // Return success payload to client
            return {
                status: 200,
                jsonBody: {
                    success: true,
                    message: 'Contact request received'
                }
            };
        } catch (error) {
            context.error('Error processing contact request:', error.message || error);
            return {
                status: 400,
                jsonBody: {
                    success: false,
                    message: 'Invalid JSON request payload.'
                }
            };
        }
    }
});
