# Performance Cleanup Checklist

## Priority: HIGH 🔴 (Immediate Impact)

### Phase 1: Remove Unused Dependencies
- [ ] Remove `@tanstack/react-query` (~45KB)
- [ ] Remove `react-hook-form` (~35KB)
- [ ] Remove `@hookform/resolvers` (~8KB)
- [ ] Remove `zod` (~50KB)
- [ ] Remove `recharts` (~180KB)
- [ ] Remove `date-fns` (~70KB)
- [ ] Remove `react-day-picker` (~45KB)
- [ ] Remove `cmdk` (~25KB)
- [ ] Remove `embla-carousel-react` (~15KB)
- [ ] Remove `input-otp` (~8KB)
- [ ] Remove `react-resizable-panels` (~20KB)
- [ ] Remove `vaul` (~12KB)
- [ ] Remove `next-themes` (~8KB)

**Command:**
```bash
npm uninstall @tanstack/react-query react-hook-form @hookform/resolvers zod recharts date-fns react-day-picker cmdk embla-carousel-react input-otp react-resizable-panels vaul next-themes
```

**Estimated savings:** ~535KB (gzipped: ~150KB)

---

### Phase 2: Remove QueryClientProvider
- [ ] Open `src/App.tsx`
- [ ] Remove `import { QueryClient, QueryClientProvider } from "@tanstack/react-query";`
- [ ] Remove `const queryClient = new QueryClient();`
- [ ] Remove `<QueryClientProvider client={queryClient}>` wrapper
- [ ] Remove closing `</QueryClientProvider>` tag

**Estimated savings:** Runtime overhead reduction

---

### Phase 3: Fix or Remove Sonner
**Option A: Remove Sonner (if toasts not needed)**
- [ ] Remove `import { Toaster as Sonner } from "@/components/ui/sonner";` from `src/App.tsx`
- [ ] Remove `<Sonner />` from `src/App.tsx`
- [ ] Delete `src/components/ui/sonner.tsx`

**Option B: Fix Sonner (if toasts are needed)**
- [ ] Open `src/components/ui/sonner.tsx`
- [ ] Remove `import { useTheme } from "next-themes";`
- [ ] Replace `const { theme = "system" } = useTheme();` with `const theme = "dark";`
- [ ] Test toast functionality

**Estimated savings:** ~15KB + removes next-themes dependency

---

### Phase 4: Remove Unused UI Components
- [ ] Run cleanup script: `node scripts/cleanup-performance.js`
- [ ] Or manually delete 42 unused component files from `src/components/ui/`

**Files to remove:**
- alert-dialog.tsx, alert.tsx, aspect-ratio.tsx, avatar.tsx, badge.tsx
- breadcrumb.tsx, calendar.tsx, carousel.tsx, chart.tsx, checkbox.tsx
- collapsible.tsx, command.tsx, context-menu.tsx, dialog.tsx, drawer.tsx
- dropdown-menu.tsx, form.tsx, hover-card.tsx, input-otp.tsx, input.tsx
- label.tsx, menubar.tsx, navigation-menu.tsx, pagination.tsx, popover.tsx
- progress.tsx, radio-group.tsx, resizable.tsx, scroll-area.tsx, select.tsx
- separator.tsx, sheet.tsx, sidebar.tsx, skeleton.tsx, slider.tsx
- switch.tsx, table.tsx, tabs.tsx, textarea.tsx, toggle-group.tsx, toggle.tsx

**Estimated savings:** ~200KB+

---

## Priority: MEDIUM 🟡 (Good Impact)

### Phase 5: Remove Unused Hooks
- [ ] Delete `src/hooks/use-mobile.tsx` (only used by unused sidebar)

**Estimated savings:** Minimal, but improves maintainability

---

### Phase 6: Clean Up Duplicate Files
- [ ] Remove `src/components/ui/use-toast.ts` (duplicate)
- [ ] Keep `src/hooks/use-toast.ts` (actual implementation)

**Estimated savings:** Minimal, but reduces confusion

---

### Phase 7: Remove Unused Dev Dependencies
- [ ] Remove `@tailwindcss/typography` (if not used)

**Command:**
```bash
npm uninstall @tailwindcss/typography
```

---

## Testing Checklist ✅

After cleanup, verify:

- [ ] Site loads correctly (`npm run dev`)
- [ ] All pages render:
  - [ ] Homepage (Index)
  - [ ] Agadir page
  - [ ] 404 page (NotFound)
- [ ] Interactive elements work:
  - [ ] WhatsApp buttons
  - [ ] Language toggle button
  - [ ] FAQ accordion
  - [ ] Toast notifications (if keeping Sonner)
- [ ] Visual elements:
  - [ ] Images load correctly
  - [ ] Dark mode works
  - [ ] Navbar displays correctly
  - [ ] Footer displays correctly
- [ ] Build succeeds:
  - [ ] `npm run build` completes without errors
  - [ ] Bundle size reduced
- [ ] No console errors:
  - [ ] Check browser console
  - [ ] Check terminal output

---

## Verification Commands

```bash
# Check bundle size
npm run build
ls -lh dist/assets/

# Check for unused dependencies (after cleanup)
npx depcheck

# Analyze bundle
npx vite-bundle-visualizer
```

---

## Expected Results

### Before Cleanup
- Bundle: ~375KB JS + ~67KB CSS = ~442KB total
- Gzipped: ~131KB total
- Parse time: ~150-200ms

### After Cleanup
- Bundle: ~200KB JS + ~40KB CSS = ~240KB total
- Gzipped: ~68KB total
- Parse time: ~80-100ms

### Improvements
- ✅ **48% smaller bundle**
- ✅ **~50% faster parse time**
- ✅ **Faster Time to Interactive**
- ✅ **Lower memory usage**

---

## Rollback Plan

If something breaks:

1. **Git revert:**
   ```bash
   git checkout HEAD -- src/
   git checkout HEAD -- package.json
   npm install
   ```

2. **Restore deleted files:**
   ```bash
   git checkout HEAD -- src/components/ui/
   git checkout HEAD -- src/hooks/
   ```

---

## Notes

- ⚠️ **Backup before starting:** Commit current state to git
- ⚠️ **Test incrementally:** Don't do all phases at once
- ⚠️ **Verify functionality:** Test after each phase
- ✅ **Safe phases:** 1, 2, 4, 5, 6 (no code changes)
- ⚠️ **Careful phases:** 3 (Sonner - may affect toasts)

---

**Last Updated:** 2025-01-12
