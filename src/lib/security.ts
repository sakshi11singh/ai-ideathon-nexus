/**
 * Security Utilities for AI Ideathon 2026
 * Provides input sanitization, validation, and security helpers
 */

import DOMPurify from 'dompurify';

/**
 * Sanitize HTML to prevent XSS attacks
 */
export const sanitizeHTML = (html: string): string => {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [], // Strip all tags, text only
    ALLOWED_ATTR: [],
  });
};

/**
 * Sanitize email input
 */
export const sanitizeEmail = (email: string): string => {
  return sanitizeHTML(email.trim().toLowerCase());
};

/**
 * Sanitize phone number - allow only digits, +, -, (), and spaces
 */
export const sanitizePhone = (phone: string): string => {
  return phone.replace(/[^\d+\-\s()]/g, '');
};

/**
 * Sanitize text input - remove potentially dangerous characters
 */
export const sanitizeText = (text: string): string => {
  return sanitizeHTML(text.trim());
};

/**
 * Validate email format with regex
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number (Indian format)
 */
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

/**
 * Generate CSRF token (simple implementation)
 */
export const generateCSRFToken = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

/**
 * Store CSRF token in sessionStorage
 */
export const storeCSRFToken = (): string => {
  const token = generateCSRFToken();
  sessionStorage.setItem('csrf_token', token);
  return token;
};

/**
 * Get CSRF token from sessionStorage
 */
export const getCSRFToken = (): string | null => {
  return sessionStorage.getItem('csrf_token');
};

/**
 * Rate limiter for form submissions
 */
class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  private readonly windowMs: number = 60000; // 1 minute
  private readonly maxAttempts: number = 5;

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const userAttempts = this.attempts.get(identifier) || [];
    
    // Remove attempts outside the time window
    const validAttempts = userAttempts.filter(time => now - time < this.windowMs);
    
    if (validAttempts.length >= this.maxAttempts) {
      return false;
    }
    
    validAttempts.push(now);
    this.attempts.set(identifier, validAttempts);
    return true;
  }

  getRemainingTime(identifier: string): number {
    const userAttempts = this.attempts.get(identifier) || [];
    if (userAttempts.length === 0) return 0;
    
    const oldestAttempt = Math.min(...userAttempts);
    const remaining = this.windowMs - (Date.now() - oldestAttempt);
    return Math.max(0, remaining);
  }
}

export const rateLimiter = new RateLimiter();

/**
 * Honeypot validator
 */
export const validateHoneypot = (value: string): boolean => {
  // If honeypot field has any value, it's likely a bot
  return value === '';
};

/**
 * Measure time spent on form (anti-bot)
 */
export const createFormTimer = (): { startTime: () => void, getTimeSpent: () => number } => {
  let startTimeRef = Date.now();
  
  return {
    startTime: () => {
      startTimeRef = Date.now();
    },
    getTimeSpent: () => {
      return Date.now() - startTimeRef;
    }
  };
};
