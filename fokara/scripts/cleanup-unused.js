#!/usr/bin/env node

/**
 * Cleanup Script for Unused Components and Assets
 * 
 * This script removes unused UI components and assets to reduce bundle size.
 * Run with: node scripts/cleanup-unused.js
 * 
 * WARNING: This script deletes files. Make sure you have a backup!
 */

const fs = require('fs');
const path = require('path');

const unusedComponents = [
  'alert.tsx',
  'alert-dialog.tsx',
  'aspect-ratio.tsx',
  'avatar.tsx',
  'badge.tsx',
  'breadcrumb.tsx', // Custom Breadcrumb.tsx exists
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
  'input.tsx',
  'input-otp.tsx',
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
  'sonner.tsx', // Duplicate toast implementation
  'switch.tsx',
  'table.tsx',
  'tabs.tsx',
  'textarea.tsx',
  'toggle.tsx',
  'toggle-group.tsx',
];

const unusedAssets = [
  'public/placeholder.svg',
  'public/favicon.ico', // Using PNG now
];

const componentsDir = path.join(__dirname, '../src/components/ui');
const projectRoot = path.join(__dirname, '..');

console.log('🧹 Starting cleanup of unused components and assets...\n');

let deletedCount = 0;
let skippedCount = 0;

// Delete unused components
console.log('📦 Removing unused UI components...');
unusedComponents.forEach(component => {
  const filePath = path.join(componentsDir, component);
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
      console.log(`  ✅ Deleted: ${component}`);
      deletedCount++;
    } catch (error) {
      console.error(`  ❌ Error deleting ${component}:`, error.message);
    }
  } else {
    console.log(`  ⏭️  Skipped: ${component} (not found)`);
    skippedCount++;
  }
});

// Delete unused assets
console.log('\n📁 Removing unused assets...');
unusedAssets.forEach(asset => {
  const filePath = path.join(projectRoot, asset);
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
      console.log(`  ✅ Deleted: ${asset}`);
      deletedCount++;
    } catch (error) {
      console.error(`  ❌ Error deleting ${asset}:`, error.message);
    }
  } else {
    console.log(`  ⏭️  Skipped: ${asset} (not found)`);
    skippedCount++;
  }
});

console.log(`\n✨ Cleanup complete!`);
console.log(`   Deleted: ${deletedCount} files`);
console.log(`   Skipped: ${skippedCount} files`);
console.log(`\n⚠️  Next steps:`);
console.log(`   1. Run: npm run build (to verify)`);
console.log(`   2. Test your application thoroughly`);
console.log(`   3. Remove unused dependencies from package.json`);
console.log(`   4. Commit changes: git add . && git commit -m "Remove unused components"`);
