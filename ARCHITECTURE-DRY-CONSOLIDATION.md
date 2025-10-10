# Architecture Decision Record: DRY Navigation and Footer Consolidation

**Date**: October 2025
**Status**: Approved
**Decision**: Consolidate all Navigation and Footer components to use single source of truth

## Context

The Adnexus web application has accumulated technical debt with duplicate footer components and inconsistent navigation/footer usage across different page types:

### Current Problems
1. **Multiple Footer Components**:
   - `src/components/sections/Footer.tsx` (main footer - 15,506 bytes)
   - `src/agency/components/Footer.tsx` (agency footer - 14,617 bytes)
   - `src/components/Footer.tsx` (re-export wrapper - 47 bytes)

2. **Inconsistent Usage**:
   - Main pages (Home, CTV, etc.): Use main Navigation + main Footer
   - Agency pages (/agency/*): Use main Navigation + agency Footer
   - Some pages missing Navigation component entirely

3. **Missing Routes**:
   - `/contact` and `/faq` pages exist but not in App.tsx routes
   - Services routes like `/services/creative-design`, `/services/ai-services` not properly configured
   - No static HTML generation for these routes (GitHub Pages requirement)

4. **Maintenance Burden**:
   - Two separate footer components to maintain
   - Risk of diverging features/styles
   - Confusion for developers on which footer to use

## Decision

Implement a DRY (Don't Repeat Yourself) architecture with:

1. **Single Navigation Component**: `src/components/Navigation.tsx` used everywhere
2. **Single Footer Component**: `src/components/sections/Footer.tsx` used everywhere
3. **Deprecate Agency Footer**: Keep `src/agency/components/Footer.tsx` as backup but don't use
4. **Complete Route Configuration**: All routes properly defined in App.tsx
5. **Static Page Generation**: Script to generate static HTML for all routes

## Implementation Plan

### Phase 1: Documentation and Planning
- ✅ Audit current component usage
- ✅ Document architecture decision
- Identify all affected files

### Phase 2: Route Configuration
- Add missing routes to App.tsx:
  - `/contact` → Contact.tsx
  - `/faq` → FAQ.tsx
  - `/services/creative-design` → UnifiedPage with config
  - `/services/ai-services` → UnifiedPage with config
  - Other missing service routes

### Phase 3: Component Consolidation
- Update all agency pages to import from `@/components/sections/Footer`
- Ensure all pages have Navigation component
- Remove imports of agency Footer

### Phase 4: Static Generation
- Create `scripts/generate-static-pages.js`
- Update `package.json` build script to include static generation
- Ensure all routes have corresponding HTML files for GitHub Pages

### Phase 5: Testing and Verification
- Test all routes locally
- Verify Navigation and Footer appear consistently
- Check mobile responsiveness
- Validate GitHub Pages deployment

## Affected Files

### Files Using Agency Footer (30 files to update):
- All files in `src/agency/pages/*.tsx`
- Service templates in `src/agency/pages/services/*.tsx`

### Files Already Using Main Footer (24 files - no changes needed):
- All CTV components (`src/ctv/components/*.tsx`)
- Main pages (`src/pages/*.tsx`)
- Case studies (`src/pages/case-study/*.tsx`)
- UnifiedPage component

### Files to Create:
- `scripts/generate-static-pages.js`

### Files to Update:
- `src/App.tsx` (add missing routes)
- `package.json` (update build script)
- All agency page files (change footer import)

## Benefits

1. **Maintainability**: Single source of truth for navigation and footer
2. **Consistency**: Uniform user experience across all pages
3. **Reduced Code**: ~15KB less duplicate code
4. **Clarity**: No confusion about which component to use
5. **SEO**: All routes properly indexed with static HTML
6. **Performance**: Smaller bundle size without duplicate components

## Risks and Mitigation

### Risk: Agency pages may have specific footer requirements
**Mitigation**: Review agency footer for unique features and port them to main footer if needed

### Risk: Breaking existing functionality
**Mitigation**:
- Keep agency footer file as backup
- Test thoroughly before deployment
- Easy rollback if issues found

### Risk: Static generation script complexity
**Mitigation**: Start with simple script, iterate based on needs

## Alternatives Considered

1. **Keep Both Footers**: Rejected - violates DRY principle, maintenance burden
2. **Merge Footer Features**: Considered - may add complexity to main footer
3. **Component Composition**: Use props/slots to customize footer per section - adds unnecessary complexity

## Consequences

### Positive
- Cleaner codebase
- Easier onboarding for new developers
- Consistent brand presentation
- Better SEO with proper static pages
- Reduced bundle size

### Negative
- Initial effort to update all files
- Risk of regression if not tested properly
- Need to maintain backward compatibility during transition

## Metrics for Success

1. All pages render with Navigation and Footer
2. No 404 errors on documented routes
3. Static HTML files generated for all routes
4. Bundle size reduced by ~15KB
5. No visual regressions in footer appearance
6. All existing functionality preserved

## Timeline

- Phase 1: ✅ Complete (Documentation)
- Phase 2: 30 minutes (Route configuration)
- Phase 3: 1 hour (Component updates)
- Phase 4: 1 hour (Static generation)
- Phase 5: 30 minutes (Testing)

**Total Estimated Time**: 3 hours

## Decision Makers

- Development Team
- Product Owner
- DevOps (for deployment impact)

## References

- [DRY Principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
- [GitHub Pages SPA Hack](https://github.com/rafgraph/spa-github-pages)
- [React Router Documentation](https://reactrouter.com/)