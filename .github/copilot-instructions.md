# AI Blog Theme - Copilot Instructions

This is a custom Ghost theme called "ai-blog-theme" v1.3.2, derived from the "Solo" theme, specifically designed for an AI-focused blog with French localization support.

## Architecture Overview

**Ghost Theme Structure**: This follows Ghost's standard theme architecture with Handlebars templates:
- `default.hbs` - Base layout with AI animated background, navigation, and footer
- `index.hbs` - Homepage with hero section and featured post layout
- `post.hbs` - Individual blog post template
- `partials/` - Reusable template components (loop, icons, etc.)

**Build System**: Uses Gulp + PostCSS pipeline:
- CSS: `assets/css/screen.css` → PostCSS (Tailwind, autoprefixer, cssnano) → `assets/built/screen.css`
- JS: Concatenates shared theme assets + local JS → uglified → `assets/built/main.min.js`
- Watch mode with livereload for development

## Key Development Patterns

**Custom Tailwind Configuration**: AI-themed design system in `tailwind.config.js`:
```javascript
colors: {
  'ai-blue': '#00d4ff',
  'ai-purple': '#8b5cf6', 
  'ai-cyan': '#06b6d4',
  'ai-pink': '#ec4899'
}
```
Complex keyframe animations for neural networks, floating nodes, data flows, and circuit patterns.

**Ghost Theme Conventions**:
- Use `{{#get "posts"}}` helpers for content fetching
- Custom theme settings in `package.json` config (background_color, navigation_layout, typography, post_feed_layout)
- Responsive images with Ghost's `{{img_url}}` helper and srcset
- French translations in `locales/fr.json` using `{{t}}` helper

**AI Visual Elements**: 
- Animated background in `default.hbs` with neural network nodes, particles, and circuits
- CSS animations defined in `assets/css/screen.css` with reduced motion support
- Parallax effects using jarallax library for feed layouts

## Development Workflow

**Environment Setup**: 
```bash
pnpm install     # Install dependencies
pnpm dev         # Start Gulp watch mode with livereload
pnpm test        # Run gscan theme validation
pnpm zip         # Package theme for Ghost upload
```

**File Organization**:
- Fonts: Custom web fonts in `assets/fonts/` (JetBrains Mono, Libre Baskerville, Manrope)
- Built assets: Auto-generated in `assets/built/` (never edit directly)
- Shared assets: Imported from `@tryghost/shared-theme-assets`

**Customization Points**:
- Theme settings via Ghost admin → Design → theme customization
- Color scheme controlled by `--background-color` CSS custom property
- Layout variants: navigation (left/middle/stacked), typography (sans/serif/mono), feed layout (classic/typographic/parallax)

## Critical Dependencies

- **Ghost 5.0+**: Minimum required version
- **Tailwind CSS 3.4+**: For utility-first styling
- **@tryghost/shared-theme-assets**: Provides base Ghost theme functionality
- **jarallax**: For parallax scrolling effects on feed cards

## Ghost Theme Development Reference

**Documentation Strategy**: When working with Ghost themes, ALWAYS use Context7 to retrieve up-to-date documentation rather than guessing or relying on potentially outdated information. Use the Context7 MCP server to:
- Get current Ghost theme documentation with `mcp_context7_resolve-library-id` followed by `mcp_context7_get-library-docs`
- Search for specific Ghost APIs, helpers, or features
- Verify syntax and implementation patterns before making changes
- Ensure compatibility with the latest Ghost version

**Official Documentation**: Always refer to the official Ghost theme docs at `/tryghost/docs` for best practices:

**Key Ghost Helpers & APIs**:
- `{{#get "posts"}}` - Fetch posts with filtering and pagination
- `{{#get "newsletters"}}` - Access newsletter configurations
- `{{#get "tiers"}}` - Fetch membership tiers and pricing
- `data-members-form` - Built-in newsletter signup functionality
- `data-members-email` - Email input for subscription forms
- `data-members-newsletter` - Newsletter selection in forms
- `{{@member}}` - Current member context and subscription status
- `{{@site.members_enabled}}` - Check if memberships are enabled

**Newsletter Integration**:
```handlebars
<form data-members-form="newsletter">
  <input type="email" data-members-email required>
  <button type="submit">Subscribe</button>
</form>
```

**Membership Features**:
- Use `{{#unless @member}}` for non-member content
- `{{#if @site.members_enabled}}` to conditionally show member features
- `data-portal="signin/signup"` for Ghost's built-in authentication

**Template Hierarchy**: Follow Ghost's template fallback system:
- Custom templates: `post-{slug}.hbs`, `page-{slug}.hbs`, `tag-{slug}.hbs`
- General templates: `post.hbs`, `page.hbs`, `tag.hbs`, `author.hbs`
- Fallback: `index.hbs` for all listing pages

**Required Helpers**: Always include in templates:
- `{{ghost_head}}` in `<head>`
- `{{ghost_foot}}` before `</body>`
- `{{body_class}}` on `<body>` tag
- `{{post_class}}` on post containers

When editing templates, always use Tailwind utilities and maintain the existing AI theme color palette. Increment version in `package.json` for significant changes (0.1 for minor, 1.0 for major).