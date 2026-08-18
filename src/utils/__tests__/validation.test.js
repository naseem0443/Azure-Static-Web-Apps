import { describe, it, expect } from 'vitest';
import { validateName, validateEmail, validatePhone, validateSubject, validateMessage } from '../validation';

describe('Validation Helpers', () => {
  describe('validateName', () => {
    it('should return error for empty names', () => {
      expect(validateName('')).toBe('Full name is required');
      expect(validateName('   ')).toBe('Full name is required');
    });

    it('should return error for short names', () => {
      expect(validateName('A')).toBe('Name must be at least 2 characters');
    });

    it('should return empty string for valid names', () => {
      expect(validateName('John Doe')).toBe('');
    });
  });

  describe('validateEmail', () => {
    it('should return error for empty email', () => {
      expect(validateEmail('')).toBe('Email is required');
    });

    it('should return error for invalid email formats', () => {
      expect(validateEmail('invalid-email')).toBe('Please enter a valid email address');
      expect(validateEmail('test@')).toBe('Please enter a valid email address');
      expect(validateEmail('@example.com')).toBe('Please enter a valid email address');
    });

    it('should return empty string for valid emails', () => {
      expect(validateEmail('test@example.com')).toBe('');
    });
  });

  describe('validatePhone', () => {
    it('should return empty string for empty phone numbers (optional)', () => {
      expect(validatePhone('')).toBe('');
      expect(validatePhone('   ')).toBe('');
    });

    it('should return error for invalid phone formats', () => {
      expect(validatePhone('abc-123')).toBe('Please enter a valid phone number');
      expect(validatePhone('12-34-56-ab')).toBe('Please enter a valid phone number');
    });

    it('should return empty string for valid phone formats', () => {
      expect(validatePhone('+1 (206) 555-0100')).toBe('');
      expect(validatePhone('5551234567')).toBe('');
    });
  });

  describe('validateSubject', () => {
    it('should return error for empty subject', () => {
      expect(validateSubject('')).toBe('Subject is required');
    });

    it('should return error for short subject', () => {
      expect(validateSubject('Hi')).toBe('Subject must be at least 3 characters');
    });
  });

  describe('validateMessage', () => {
    it('should return error for empty message', () => {
      expect(validateMessage('')).toBe('Message is required');
    });

    it('should return error for short message', () => {
      expect(validateMessage('Hello')).toBe('Message must be at least 10 characters');
    });
  });
});
