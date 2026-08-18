import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ContactForm from '../ContactForm';
import { submitContactForm } from '../../services/contactService';

// Mock the contact service client
vi.mock('../../services/contactService', () => ({
  submitContactForm: vi.fn(),
}));

describe('ContactForm Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders all form input fields and the submit button', () => {
    render(<ContactForm />);
    
    expect(screen.getByLabelText(/Full Name \*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address \*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Company/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Subject \*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message \*/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Send Inquiry/i })).toBeInTheDocument();
  });

  it('displays inline validation errors on empty form submissions', async () => {
    render(<ContactForm />);
    
    const submitButton = screen.getByRole('button', { name: /Send Inquiry/i });
    fireEvent.click(submitButton);

    expect(await screen.findByText('Full name is required')).toBeInTheDocument();
    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(screen.getByText('Subject is required')).toBeInTheDocument();
    expect(screen.getByText('Message is required')).toBeInTheDocument();
    
    expect(submitContactForm).not.toHaveBeenCalled();
  });

  it('displays an error if email format is invalid', async () => {
    render(<ContactForm />);
    
    const emailInput = screen.getByLabelText(/Email Address \*/i);
    fireEvent.change(emailInput, { target: { value: 'invalid-email-address' } });
    fireEvent.blur(emailInput);

    expect(await screen.findByText('Please enter a valid email address')).toBeInTheDocument();
  });

  it('submits correctly and displays success message when validation passes', async () => {
    submitContactForm.mockResolvedValueOnce({ success: true });
    
    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/Full Name \*/i), { target: { value: 'Naseem' } });
    fireEvent.change(screen.getByLabelText(/Email Address \*/i), { target: { value: 'naseem@example.com' } });
    fireEvent.change(screen.getByLabelText(/Subject \*/i), { target: { value: 'Testing subject' } });
    fireEvent.change(screen.getByLabelText(/Message \*/i), { target: { value: 'Testing contact form submissions for SWA.' } });

    const submitButton = screen.getByRole('button', { name: /Send Inquiry/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(submitContactForm).toHaveBeenCalledWith({
        name: 'Naseem',
        email: 'naseem@example.com',
        phone: '',
        company: '',
        subject: 'Testing subject',
        message: 'Testing contact form submissions for SWA.'
      });
    });

    expect(await screen.findByText(/Your message has been successfully sent/i)).toBeInTheDocument();
    
    // Form fields should be cleared after success
    expect(screen.getByLabelText(/Full Name \*/i).value).toBe('');
    expect(screen.getByLabelText(/Email Address \*/i).value).toBe('');
  });
});
