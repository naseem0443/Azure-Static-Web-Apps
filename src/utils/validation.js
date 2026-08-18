/**
 * Client-side validation helpers for the contact form.
 */

export const validateName = (name) => {
  if (!name || !name.trim()) {
    return 'Full name is required';
  }
  if (name.trim().length < 2) {
    return 'Name must be at least 2 characters';
  }
  return '';
};

export const validateEmail = (email) => {
  if (!email || !email.trim()) {
    return 'Email is required';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'Please enter a valid email address';
  }
  return '';
};

export const validatePhone = (phone) => {
  if (!phone || !phone.trim()) {
    return ''; // Optional field
  }
  // Standard phone format check: allows digits, spaces, dashes, parentheses, dots, and leading plus
  const phoneRegex = /^[+]*[0-9\s\-().]*$/;
  if (!phoneRegex.test(phone)) {
    return 'Please enter a valid phone number';
  }
  return '';
};

export const validateSubject = (subject) => {
  if (!subject || !subject.trim()) {
    return 'Subject is required';
  }
  if (subject.trim().length < 3) {
    return 'Subject must be at least 3 characters';
  }
  return '';
};

export const validateMessage = (message) => {
  if (!message || !message.trim()) {
    return 'Message is required';
  }
  if (message.trim().length < 10) {
    return 'Message must be at least 10 characters';
  }
  return '';
};
