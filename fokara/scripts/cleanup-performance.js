#!/usr/bin/env node

/**
 * Performance Cleanup Script
 * Removes unused UI components and identifies dead code
 */

const fs = require('fs');
const path = require('path');

const unusedComponents = [
  'alert-dialog.tsx',
  'alert.tsx',
  'aspect-ratio.tsx',
  'avatar.tsx',
  'badge.tsx',
  'breadcrumb.tsx',
  'calendar.tsx',
  'carousel.tsx',
  'chart.tsx',
  'checkbox.tsx',
  'collapsible.tsx',
  'command.tsx',
  'context-menu.tsx',
  'dialog.tsx',
  'drawer.tsx',
  'dropdown-menu.tsx',
  'form.tsx',
  'hover-card.tsx',
  'input-otp.tsx',
  'input.tsx',
  'label.tsx',
  'menubar.tsx',
  'navigation-menu.tsx',
  'pagination.tsx',
  'popover.tsx',
  'progress.tsx',
  'radio-group.tsx',
  'resizable.tsx',
  'scroll-area.tsx',
  'select.tsx',
  'separator.tsx',
  'sheet.tsx',
  'sidebar.tsx',
  'skeleton.tsx',
  'slider.tsx',
  'switch.tsx',
  'table.tsx',
  'tabs.tsx',
  'textarea.tsx',
  'toggle-group.tsx',
  'toggle.tsx',
];

const uiDir = path.join(__dirname, '../src/components/ui');
const hooksDir = path.join(__dirname, '../src/hooks');

console.log('🚀 Performance Cleanup Script\n');
console.log('='.repeat(50));

// Remove unused UI components
console.log('\n📦 Removing unused UI components...\n');
let removedCount = 0;
let notFoundCount = 0;

unusedComponents.forEach(component => {
  const filePath = path.join(uiDir, component);
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
      console.log(`✅ Removed: ${component}`);
      removedCount++;
    } catch (error) {
      console.error(`❌ Error removing ${component}:`, error.message);
    }
  } else {
    console.log(`⏭️  Not found: ${component}`);
    notFoundCount++;
  }
});

// Remove unused hooks
console.log('\n📦 Removing unused hooks...\n');
const unusedHooks = ['use-mobile.tsx'];
unusedHooks.forEach(hook => {
  const filePath = path.join(hooksDir, hook);
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
      console.log(`✅ Removed: ${hook}`);
      removedCount++;
    } catch (error) {
      console.error(`❌ Error removing ${hook}:`, error.message);
    }
  }
});

// Remove duplicate use-toast.ts from ui folder
console.log('\n📦 Removing duplicate files...\n');
const duplicateToast = path.join(uiDir, 'use-toast.ts');
if (fs.existsSync(duplicateToast)) {
  try {
    fs.unlinkSync(duplicateToast);
    console.log(`✅ Removed duplicate: ui/use-toast.ts`);
    removedCount++;
  } catch (error) {
    console.error(`❌ Error removing duplicate:`, error.message);
  }
}

console.log('\n' + '='.repeat(50));
console.log(`\n✨ Cleanup complete!`);
console.log(`📊 Statistics:`);
console.log(`   - Removed: ${removedCount} files`);
console.log(`   - Not found: ${notFoundCount} files`);
console.log(`\n⚠️  Next steps:`);
console.log(`   1. Run: npm uninstall @tanstack/react-query react-hook-form @hookform/resolvers zod recharts date-fns react-day-picker cmdk embla-carousel-react input-otp react-resizable-panels vaul next-themes`);
console.log(`   2. Update src/App.tsx to remove QueryClientProvider`);
console.log(`   3. Fix or remove Sonner toaster`);
console.log(`   4. Run: npm run build`);
console.log(`   5. Test the application thoroughly\n`);

