#!/usr/bin/env node

/**
 * Quick Performance Fixes Script
 * 
 * This script applies immediate fixes that are safe and high-impact.
 * Run with: node scripts/quick-fixes.js
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Applying quick performance fixes...\n');

// Fix 1: Remove Sonner from App.tsx
const appTsxPath = path.join(__dirname, '../src/App.tsx');
let appContent = fs.readFileSync(appTsxPath, 'utf8');

if (appContent.includes('import { Toaster as Sonner }')) {
  appContent = appContent.replace(/import { Toaster as Sonner } from "@\/components\/ui\/sonner";\n/g, '');
  appContent = appContent.replace(/<Sonner \/>\n/g, '');
  fs.writeFileSync(appTsxPath, appContent);
  console.log('✅ Removed Sonner toast from App.tsx');
} else {
  console.log('⏭️  Sonner already removed from App.tsx');
}

// Fix 2: Remove QueryClient if not used
if (appContent.includes('QueryClientProvider') && !appContent.includes('useQuery') && !appContent.includes('useMutation')) {
  appContent = appContent.replace(/import { QueryClient, QueryClientProvider } from "@tanstack\/react-query";\n/g, '');
  appContent = appContent.replace(/const queryClient = new QueryClient\(\);\n\n/g, '');
  appContent = appContent.replace(/<QueryClientProvider client={queryClient}>\n/g, '');
  appContent = appContent.replace(/<\/QueryClientProvider>\n/g, '');
  fs.writeFileSync(appTsxPath, appContent);
  console.log('✅ Removed unused QueryClientProvider');
} else {
  console.log('⏭️  QueryClientProvider is being used or already removed');
}

// Fix 3: Remove dark mode CSS
const indexCssPath = path.join(__dirname, '../src/index.css');
let cssContent = fs.readFileSync(indexCssPath, 'utf8');

if (cssContent.includes('.dark {')) {
  // Remove dark mode styles (lines between .dark { and closing })
  cssContent = cssContent.replace(/\n  \.dark \{[\s\S]*?\n  \}\n/g, '');
  fs.writeFileSync(indexCssPath, cssContent);
  console.log('✅ Removed dark mode CSS');
} else {
  console.log('⏭️  Dark mode CSS already removed');
}

// Fix 4: Remove unused sidebar CSS variables
if (cssContent.includes('--sidebar-background')) {
  cssContent = cssContent.replace(/    --sidebar-background:.*\n/g, '');
  cssContent = cssContent.replace(/    --sidebar-foreground:.*\n/g, '');
  cssContent = cssContent.replace(/    --sidebar-primary:.*\n/g, '');
  cssContent = cssContent.replace(/    --sidebar-primary-foreground:.*\n/g, '');
  cssContent = cssContent.replace(/    --sidebar-accent:.*\n/g, '');
  cssContent = cssContent.replace(/    --sidebar-accent-foreground:.*\n/g, '');
  cssContent = cssContent.replace(/    --sidebar-border:.*\n/g, '');
  cssContent = cssContent.replace(/    --sidebar-ring:.*\n/g, '');
  fs.writeFileSync(indexCssPath, cssContent);
  console.log('✅ Removed unused sidebar CSS variables');
} else {
  console.log('⏭️  Sidebar CSS variables already removed');
}

console.log('\n✨ Quick fixes applied!');
console.log('\n📋 Next steps:');
console.log('   1. Review changes: git diff');
console.log('   2. Test: npm run build');
console.log('   3. Test application functionality');
console.log('   4. Remove unused dependencies (see PERFORMANCE-CLEANUP-CHECKLIST.md)');
