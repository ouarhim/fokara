# Performance Cleanup Checklist

## Phase 1: Quick Wins (1-2 hours) - HIGH IMPACT ⚡

### ✅ Task 1.1: Remove Unused Dependencies
- [ ] Remove `zod` - Not used
- [ ] Remove `@hookform/resolvers` - Not used
- [ ] Remove `react-hook-form` - Not used
- [ ] Remove `date-fns` - Not used
- [ ] Remove `react-day-picker` - Not used
- [ ] Remove `recharts` - Not used
- [ ] Remove `cmdk` - Not used
- [ ] Remove `input-otp` - Not used
- [ ] Remove `embla-carousel-react` - Not used
- [ ] Remove `react-resizable-panels` - Not used
- [ ] Remove `vaul` - Not used
- [ ] Remove `next-themes` - Not used
- [ ] Remove `@tanstack/react-query` - Not used
- [ ] Remove `@tailwindcss/typography` - Not used

**Command**:
```bash
npm uninstall zod @hookform/resolvers react-hook-form date-fns react-day-picker recharts cmdk input-otp embla-carousel-react react-resizable-panels vaul next-themes @tanstack/react-query @tailwindcss/typography
```

**Expected Impact**: ~542 KB reduction

---

### ✅ Task 1.2: Remove Sonner Toast
- [ ] Remove import from `src/App.tsx`
- [ ] Remove `<Sonner />` component usage

**File**: `src/App.tsx`
```tsx
// Remove this line:
import { Toaster as Sonner } from "@/components/ui/sonner";

// Remove this line:
<Sonner />
```

**Expected Impact**: ~12 KB reduction

---

### ✅ Task 1.3: Remove Dark Mode CSS
- [ ] Remove dark mode styles from `src/index.css` (lines 64-100)
- [ ] Remove unused CSS variables:
  - `--sidebar-*` variables
  - `--popover` (if unused)
  - `--destructive` (if unused)

**Expected Impact**: ~50% CSS reduction

---

### ✅ Task 1.4: Remove QueryClient (if not using React Query)
- [ ] Remove `QueryClientProvider` from `src/App.tsx`
- [ ] Remove `@tanstack/react-query` import

**File**: `src/App.tsx`
```tsx
// Remove:
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

// Remove wrapper:
<QueryClientProvider client={queryClient}>
  ...
</QueryClientProvider>
```

**Expected Impact**: ~42 KB reduction

---

## Phase 2: Component Cleanup (2-3 hours) - MEDIUM IMPACT 🔧

### ✅ Task 2.1: Run Cleanup Script
- [ ] Backup current code: `git checkout -b backup-before-cleanup`
- [ ] Run cleanup script: `node scripts/cleanup-unused.js`
- [ ] Verify build works: `npm run build`
- [ ] Test application functionality

**Expected Impact**: ~30-40% bundle reduction

---

### ✅ Task 2.2: Remove Unused Radix UI Packages
- [ ] Remove unused Radix UI packages (see list in audit report)
- [ ] Run: `npm uninstall [packages]`
- [ ] Verify build works

**Expected Impact**: ~200 KB reduction

---

### ✅ Task 2.3: Consolidate Toast Hooks
- [ ] Keep `src/components/ui/use-toast.ts`
- [ ] Remove `src/hooks/use-toast.ts`
- [ ] Update any imports if needed

---

## Phase 3: Code Optimization (1-2 hours) - MEDIUM IMPACT ⚙️

### ✅ Task 3.1: Remove Unused Assets
- [ ] Delete `public/placeholder.svg`
- [ ] Delete `public/favicon.ico` (using PNG now)

---

### ✅ Task 3.2: Optimize Vite Config
- [ ] Remove `lovable-tagger` from production builds
- [ ] Add build optimizations

**File**: `vite.config.ts`
```ts
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    // Only include in development
    mode === "development" && componentTagger()
  ].filter(Boolean),
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['lucide-react'],
        },
      },
    },
  },
}));
```

---

## Phase 4: Advanced Optimizations (2-3 hours) - LOW-MEDIUM IMPACT 🚀

### ✅ Task 4.1: Implement Code Splitting
- [ ] Lazy load Agadir page
- [ ] Lazy load NotFound page
- [ ] Add Suspense boundaries

**File**: `src/App.tsx`
```tsx
import { lazy, Suspense } from "react";

const Agadir = lazy(() => import("./pages/Agadir"));
const NotFound = lazy(() => import("./pages/NotFound"));

// In Routes:
<Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
  <Route path="/agadir" element={<Agadir />} />
  <Route path="*" element={<NotFound />} />
</Suspense>
```

---

### ✅ Task 4.2: Optimize Images
- [ ] Convert hero-books.jpg to WebP format
- [ ] Compress hero image (target: <200 KB)
- [ ] Convert book images to WebP
- [ ] Compress book images (target: <100 KB each)

**Tools**:
- Online: https://squoosh.app/
- CLI: `sharp-cli` or `imagemin`

---

### ✅ Task 4.3: Font Optimization
- [ ] Add font preload in `index.html`
- [ ] Use `font-display: swap` (already done ✅)

---

## Testing Checklist ✅

After each phase:

- [ ] Run `npm run build` - Should succeed
- [ ] Run `npm run preview` - Test production build
- [ ] Test homepage (`/`) - All features work
- [ ] Test Agadir page (`/agadir`) - All features work
- [ ] Test language switching - Works correctly
- [ ] Test WhatsApp button - Opens correctly
- [ ] Test FAQ accordion - Expands/collapses
- [ ] Test responsive design - Mobile/tablet/desktop
- [ ] Check browser console - No errors
- [ ] Check Network tab - Bundle sizes reduced

---

## Performance Metrics to Track

### Before Cleanup:
- [ ] Bundle size: _____ KB (gzipped: _____ KB)
- [ ] Load time (3G): _____ seconds
- [ ] First Contentful Paint: _____ seconds
- [ ] Time to Interactive: _____ seconds

### After Cleanup:
- [ ] Bundle size: _____ KB (gzipped: _____ KB)
- [ ] Load time (3G): _____ seconds
- [ ] First Contentful Paint: _____ seconds
- [ ] Time to Interactive: _____ seconds

**Expected Improvements**:
- Bundle size: ~47% reduction
- Load time: ~37% faster
- Runtime: ~15-20% improvement

---

## Rollback Plan

If something breaks:

1. **Immediate**: `git checkout backup-before-cleanup`
2. **Partial**: Revert specific commits
3. **Dependencies**: `npm install` to restore packages

---

## Notes

- ⚠️ Always test in development before committing
- ⚠️ Keep backup branch until verified in production
- ✅ Phase 1 can be done immediately (safest)
- ✅ Phase 2-4 can be done incrementally
- 📊 Use Lighthouse to measure improvements

---

**Last Updated**: January 2025  
**Status**: Ready to execute
