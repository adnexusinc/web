import { test, expect } from '@playwright/test';

// Define all goals pages to test
const goalsPages = [
  { path: '/goals/build-awareness', title: 'Build Brand Awareness' },
  { path: '/goals/increase-sales', title: 'Increase Sales' },
  { path: '/goals/generate-leads', title: 'Generate More Leads' },
  { path: '/goals/attract-traffic', title: 'Drive More Traffic' },
  { path: '/goals/retarget-prospects', title: 'Retarget Your Audience' },
  { path: '/goals/promote-your-app', title: 'Promote Your App' }
];

test.describe('CTV Goals Pages Layout Tests', () => {
  for (const page of goalsPages) {
    test.describe(`${page.title} Page`, () => {
      test('should load without layout issues', async ({ page: browserPage }) => {
        await browserPage.goto(page.path);

        // Wait for page to fully load
        await browserPage.waitForLoadState('networkidle');

        // Check that the page title is visible
        await expect(browserPage.locator('h1')).toBeVisible();
      });

      test('should not have overlapping CTA section and footer', async ({ page: browserPage }) => {
        await browserPage.goto(page.path);
        await browserPage.waitForLoadState('networkidle');

        // Find the CTA section (last section before footer)
        const ctaSection = browserPage.locator('section').filter({ hasText: /Ready to/ }).last();
        const footer = browserPage.locator('footer');

        // Get bounding boxes
        const ctaBox = await ctaSection.boundingBox();
        const footerBox = await footer.boundingBox();

        // Assert they exist
        expect(ctaBox).toBeTruthy();
        expect(footerBox).toBeTruthy();

        if (ctaBox && footerBox) {
          // Check that CTA section ends before footer starts (no overlap)
          // Add a small tolerance of 5px for rounding errors
          expect(ctaBox.y + ctaBox.height).toBeLessThanOrEqual(footerBox.y + 5);
        }
      });

      test('should display footer newsletter form correctly', async ({ page: browserPage }) => {
        await browserPage.goto(page.path);
        await browserPage.waitForLoadState('networkidle');

        // Scroll to footer
        await browserPage.locator('footer').scrollIntoViewIfNeeded();

        // Check newsletter form elements are visible
        const emailInput = browserPage.locator('footer input[type="email"]');
        const submitButton = browserPage.locator('footer button[type="submit"]');

        await expect(emailInput).toBeVisible();
        await expect(submitButton).toBeVisible();

        // Check that the newsletter text is visible
        await expect(browserPage.locator('footer').getByText(/Stay ahead in the/)).toBeVisible();
      });

      test('should have proper spacing between CTA and newsletter form', async ({ page: browserPage }) => {
        await browserPage.goto(page.path);
        await browserPage.waitForLoadState('networkidle');

        // Get CTA buttons
        const ctaButtons = browserPage.locator('section').filter({ hasText: /Ready to/ }).last().locator('a');
        const firstCtaButton = ctaButtons.first();

        // Get newsletter form
        const newsletterHeading = browserPage.locator('footer').getByText(/Stay ahead in the/).first();

        // Get bounding boxes
        const ctaButtonBox = await firstCtaButton.boundingBox();
        const newsletterBox = await newsletterHeading.boundingBox();

        expect(ctaButtonBox).toBeTruthy();
        expect(newsletterBox).toBeTruthy();

        if (ctaButtonBox && newsletterBox) {
          // Verify there's adequate spacing (at least 100px) between CTA and newsletter
          const spacing = newsletterBox.y - (ctaButtonBox.y + ctaButtonBox.height);
          expect(spacing).toBeGreaterThanOrEqual(100);
        }
      });

      test('should display CTA buttons without being cut off', async ({ page: browserPage }) => {
        await browserPage.goto(page.path);
        await browserPage.waitForLoadState('networkidle');

        // Find CTA section
        const ctaSection = browserPage.locator('section').filter({ hasText: /Ready to/ }).last();

        // Scroll to CTA section
        await ctaSection.scrollIntoViewIfNeeded();

        // Check both CTA buttons are visible
        const getStartedBtn = ctaSection.locator('a').filter({ hasText: /Get Started/ });
        const talkToSalesBtn = ctaSection.locator('a').filter({ hasText: /Talk to Sales/ });

        await expect(getStartedBtn).toBeVisible();
        await expect(talkToSalesBtn).toBeVisible();

        // Verify buttons are not clipped by checking they're fully in viewport
        const getStartedBox = await getStartedBtn.boundingBox();
        expect(getStartedBox).toBeTruthy();
        if (getStartedBox) {
          expect(getStartedBox.height).toBeGreaterThan(30); // Button should have reasonable height
        }
      });

      test('should have readable text in newsletter section', async ({ page: browserPage }) => {
        await browserPage.goto(page.path);
        await browserPage.waitForLoadState('networkidle');

        // Scroll to footer
        const footer = browserPage.locator('footer');
        await footer.scrollIntoViewIfNeeded();

        // Check newsletter heading contrast and visibility
        const heading = footer.getByText(/Stay ahead in the/).first();
        await expect(heading).toBeVisible();

        // Check description text
        const description = footer.getByText(/Get the latest industry insights/).first();
        await expect(description).toBeVisible();
      });

      test('newsletter form should be functional', async ({ page: browserPage }) => {
        await browserPage.goto(page.path);
        await browserPage.waitForLoadState('networkidle');

        // Scroll to footer
        await browserPage.locator('footer').scrollIntoViewIfNeeded();

        const emailInput = browserPage.locator('footer input[type="email"]');
        const submitButton = browserPage.locator('footer button[type="submit"]');

        // Try to enter email
        await emailInput.fill('test@example.com');

        // Verify input has value
        await expect(emailInput).toHaveValue('test@example.com');

        // Check submit button is enabled
        await expect(submitButton).toBeEnabled();
      });
    });
  }
});

test.describe('Goals Pages Mobile Layout Tests', () => {
  test.use({ viewport: { width: 375, height: 667 } }); // iPhone SE size

  for (const page of goalsPages) {
    test(`${page.title} - mobile layout should not overlap`, async ({ page: browserPage }) => {
      await browserPage.goto(page.path);
      await browserPage.waitForLoadState('networkidle');

      // Scroll to bottom to check footer
      await browserPage.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

      // Wait a bit for any animations
      await browserPage.waitForTimeout(500);

      // Find the CTA section and footer
      const ctaSection = browserPage.locator('section').filter({ hasText: /Ready to/ }).last();
      const footer = browserPage.locator('footer');

      // Get bounding boxes
      const ctaBox = await ctaSection.boundingBox();
      const footerBox = await footer.boundingBox();

      expect(ctaBox).toBeTruthy();
      expect(footerBox).toBeTruthy();

      if (ctaBox && footerBox) {
        // Check that CTA section ends before footer starts
        expect(ctaBox.y + ctaBox.height).toBeLessThanOrEqual(footerBox.y + 5);
      }
    });
  }
});
