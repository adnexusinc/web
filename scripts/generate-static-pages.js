#!/usr/bin/env node

/**
 * Static Page Generation Script for GitHub Pages
 *
 * This script generates static HTML files for all routes to ensure
 * proper routing on GitHub Pages for our SPA.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the index.html template
const indexPath = path.join(__dirname, '..', 'dist', 'index.html');

// Define all routes that need static HTML files
const routes = [
  // Home
  '/',

  // Main pages
  '/contact',
  '/faq',
  '/help',
  '/support',
  '/pricing',
  '/about',
  '/company',
  '/resources',
  '/newsletter',
  '/book-demo',
  '/get-started',
  '/enterprise',

  // Products
  '/dsp',
  '/ssp',
  '/adx',
  '/studio',

  // Platform
  '/platform/overview',
  '/platform/plan',
  '/platform/activate',
  '/platform/measure',

  // Solutions
  '/advertisers',
  '/agencies',
  '/publishers',
  '/partners',
  '/inventory',
  '/industries',
  '/premium',
  '/ctv',
  '/our-work',

  // Services (with redirects and aliases)
  '/services',
  '/services/ai',
  '/services/ai-services',
  '/services/creative',
  '/services/creative-design',
  '/services/marketing',
  '/services/production',
  '/services/specialized-production',

  // CTV Goal Pages
  '/goals/build-awareness',
  '/goals/attract-traffic',
  '/goals/generate-leads',
  '/goals/increase-sales',
  '/goals/retarget-prospects',
  '/goals/promote-your-app',

  // CTV Feature Pages
  '/features/apps-channels',
  '/features/audience-targeting',
  '/features/ai-optimization',
  '/features/measurement-reporting',
  '/features/ai-creatives',
  '/features/integrations-api',

  // Case Studies
  '/case-study/damon-motorcycles',
  '/case-study/trillerfest',
  '/case-study/unikoin-gold',
  '/case-studies',

  // Agency pages (full section)
  '/agency',
  '/agency/our-work',
  '/agency/pricing',
  '/agency/contact',
  '/agency/faq',
  '/agency/enterprise',
  '/agency/onboarding',
  '/agency/onboarding-success',
  '/agency/payment',
  '/agency/services',
  '/agency/solutions',
  '/agency/login',
  '/agency/signup',
  '/agency/dashboard',

  // Auth pages
  '/auth',
  '/password-reset',
  '/dashboard',

  // Legal pages
  '/terms-of-service',
  '/terms',
  '/privacy-policy',
  '/privacy',
  '/cookie-policy',
  '/cookies',
  '/data-processing-addendum',
  '/dpa',
  '/gdpr-compliance',
  '/gdpr',
];

// Function to ensure directory exists
function ensureDirectoryExists(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExists(dirname);
  fs.mkdirSync(dirname);
}

// Function to generate static HTML file for a route
function generateStaticHtml(route) {
  try {
    // Check if index.html exists
    if (!fs.existsSync(indexPath)) {
      console.error(`Error: ${indexPath} not found. Run 'npm run build' first.`);
      process.exit(1);
    }

    // Read the index.html content
    const indexHtml = fs.readFileSync(indexPath, 'utf-8');

    // Skip if route is root
    if (route === '/') {
      console.log(`✓ Skipping root route /`);
      return;
    }

    // Determine the output path
    const outputPath = path.join(__dirname, '..', 'dist', route, 'index.html');

    // Ensure the directory exists
    ensureDirectoryExists(outputPath);

    // Check if file already exists
    if (fs.existsSync(outputPath)) {
      console.log(`✓ Static HTML already exists for ${route}`);
      return;
    }

    // Write the index.html content to the route directory
    fs.writeFileSync(outputPath, indexHtml);
    console.log(`✓ Generated static HTML for ${route}`);

  } catch (error) {
    console.error(`✗ Error generating static HTML for ${route}:`, error.message);
  }
}

// Main execution
console.log('Starting static page generation for GitHub Pages...\n');

// Check if dist directory exists
if (!fs.existsSync(path.join(__dirname, '..', 'dist'))) {
  console.error('Error: dist directory not found. Run "npm run build" first.');
  process.exit(1);
}

// Generate static HTML for each route
routes.forEach(generateStaticHtml);

// Create a sitemap.txt file for better SEO
const sitemapPath = path.join(__dirname, '..', 'dist', 'sitemap.txt');
const sitemapContent = routes
  .map(route => `https://ad.nexus${route === '/' ? '' : route}`)
  .join('\n');

fs.writeFileSync(sitemapPath, sitemapContent);
console.log(`\n✓ Generated sitemap.txt with ${routes.length} routes`);

// Create robots.txt if it doesn't exist
const robotsPath = path.join(__dirname, '..', 'dist', 'robots.txt');
if (!fs.existsSync(robotsPath)) {
  const robotsContent = `User-agent: *
Allow: /
Sitemap: https://ad.nexus/sitemap.txt`;
  fs.writeFileSync(robotsPath, robotsContent);
  console.log('✓ Generated robots.txt');
}

console.log('\n✅ Static page generation completed successfully!');
console.log(`Generated ${routes.length - 1} static HTML files (excluding root).`);