/**
 * Vercel Web Analytics Initialization
 * 
 * This script initializes Vercel Web Analytics for the Shahada.org website.
 * It uses the @vercel/analytics package to track page views and events.
 */

import { inject } from '@vercel/analytics';

// Initialize Vercel Analytics
inject({
  mode: 'auto', // Automatically detects environment (production/development)
  debug: false   // Set to true for debug logging
});
