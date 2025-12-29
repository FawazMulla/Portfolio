import { test, expect } from '@playwright/test'

test.describe('Portfolio Application E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should load homepage with all sections', async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle(/Mohammed Fawaz Mulla/)
    
    // Check all main sections are visible
    await expect(page.locator('.navbar')).toBeVisible()
    await expect(page.locator('.hero')).toBeVisible()
    await expect(page.locator('.about')).toBeVisible()
    await expect(page.locator('.achievements')).toBeVisible()
    await expect(page.locator('.experience')).toBeVisible()
    await expect(page.locator('.skills')).toBeVisible()
    await expect(page.locator('.projects')).toBeVisible()
    await expect(page.locator('.contact')).toBeVisible()
    await expect(page.locator('.footer')).toBeVisible()
  })

  test('should have working navigation', async ({ page }) => {
    // Test navigation links
    const navLinks = [
      { text: 'About', section: '#about' },
      { text: 'Experience', section: '#experience' },
      { text: 'Skills', section: '#skills' },
      { text: 'Projects', section: '#projects' },
      { text: 'Contact', section: '#contact' }
    ]

    for (const link of navLinks) {
      await page.click(`a[href="${link.section}"]`)
      await page.waitForTimeout(1000) // Wait for smooth scroll
      
      // Check if the section is in viewport
      const section = page.locator(link.section)
      await expect(section).toBeInViewport()
    }
  })

  test('should toggle theme correctly', async ({ page }) => {
    // Find theme toggle button
    const themeToggle = page.locator('.theme-toggle, [data-testid="theme-toggle"], button:has-text("🌙"), button:has-text("☀️")')
    
    if (await themeToggle.count() > 0) {
      // Get initial theme state
      const initialBodyClass = await page.locator('body').getAttribute('class')
      
      // Click theme toggle
      await themeToggle.first().click()
      await page.waitForTimeout(500)
      
      // Check if theme changed
      const newBodyClass = await page.locator('body').getAttribute('class')
      expect(newBodyClass).not.toBe(initialBodyClass)
      
      // Toggle back
      await themeToggle.first().click()
      await page.waitForTimeout(500)
      
      // Should return to original state
      const finalBodyClass = await page.locator('body').getAttribute('class')
      expect(finalBodyClass).toBe(initialBodyClass)
    }
  })

  test('should have working contact form', async ({ page }) => {
    // Navigate to contact section
    await page.click('a[href="#contact"]')
    await page.waitForTimeout(1000)
    
    // Fill out contact form
    await page.fill('input[name="name"], input[placeholder*="name" i]', 'Test User')
    await page.fill('input[name="email"], input[type="email"]', 'test@example.com')
    await page.fill('input[name="subject"], input[placeholder*="subject" i]', 'Test Subject')
    await page.fill('textarea[name="message"], textarea[placeholder*="message" i]', 'This is a test message')
    
    // Note: We won't actually submit to avoid sending real emails
    // Just verify the form elements are present and functional
    const submitButton = page.locator('button[type="submit"], button:has-text("Send")')
    await expect(submitButton).toBeVisible()
    await expect(submitButton).toBeEnabled()
  })

  test('should be responsive on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })
    
    // Check if mobile navigation works (hamburger menu if present)
    const mobileMenu = page.locator('.mobile-menu, .hamburger, [data-testid="mobile-menu"]')
    if (await mobileMenu.count() > 0) {
      await mobileMenu.click()
      await page.waitForTimeout(500)
      
      // Check if navigation items are visible
      const navItems = page.locator('.nav-item, .menu-item')
      if (await navItems.count() > 0) {
        await expect(navItems.first()).toBeVisible()
      }
    }
    
    // Verify all sections are still accessible
    await expect(page.locator('.hero')).toBeVisible()
    await expect(page.locator('.about')).toBeVisible()
    await expect(page.locator('.contact')).toBeVisible()
  })

  test('should have proper SEO meta tags', async ({ page }) => {
    // Check essential meta tags
    const description = page.locator('meta[name="description"]')
    await expect(description).toHaveAttribute('content', /.+/)
    
    const ogTitle = page.locator('meta[property="og:title"]')
    await expect(ogTitle).toHaveAttribute('content', /.+/)
    
    const ogDescription = page.locator('meta[property="og:description"]')
    await expect(ogDescription).toHaveAttribute('content', /.+/)
    
    // Check structured data
    const structuredData = page.locator('script[type="application/ld+json"]')
    expect(await structuredData.count()).toBeGreaterThan(0)
  })

  test('should load images properly', async ({ page }) => {
    // Wait for images to load
    await page.waitForLoadState('networkidle')
    
    // Check if profile images are loaded
    const images = page.locator('img')
    const imageCount = await images.count()
    
    if (imageCount > 0) {
      for (let i = 0; i < Math.min(imageCount, 5); i++) {
        const img = images.nth(i)
        if (await img.isVisible()) {
          // Check if image has loaded (not broken)
          const naturalWidth = await img.evaluate(img => img.naturalWidth)
          expect(naturalWidth).toBeGreaterThan(0)
        }
      }
    }
  })

  test('should have good performance metrics', async ({ page }) => {
    // Navigate to page and wait for load
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    
    // Basic performance check - page should load within reasonable time
    const startTime = Date.now()
    await page.waitForSelector('.hero', { timeout: 5000 })
    const loadTime = Date.now() - startTime
    
    // Should load within 5 seconds
    expect(loadTime).toBeLessThan(5000)
    
    // Check if critical content is visible
    await expect(page.locator('.hero')).toBeVisible()
    await expect(page.locator('.navbar')).toBeVisible()
  })
})