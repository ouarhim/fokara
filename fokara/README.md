# مكتبة الفقراء - Moroccan Bookstore Website

A modern, responsive bookstore website built with React, TypeScript, and Vite.

## Features

- 🌍 **Multi-language support** (Arabic, French, English)
- 📱 **WhatsApp integration** for customer orders
- 🎨 **Modern UI** with shadcn/ui components
- 📱 **Responsive design** with RTL/LTR support
- 🎯 **SEO-friendly** structure

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Routing**: React Router DOM
- **State Management**: TanStack Query

## Deployment on Coolify

### Option 1: Using Dockerfile (Recommended)

1. **Connect your GitHub repository** to Coolify
2. **Select "Dockerfile"** as the build method
3. **Set the port** to `3000`
4. **Deploy!**

### Option 2: Using Dockerfile.simple

If the main Dockerfile doesn't work:

1. **Rename** `Dockerfile.simple` to `Dockerfile`
2. **Deploy** using the same steps as Option 1

### Option 3: Manual Configuration

If Docker doesn't work, try these settings in Coolify:

- **Build Command**: `npm run build`
- **Start Command**: `npx serve -s dist -l 3000`
- **Port**: `3000`
- **Node Version**: `18`

## Environment Variables

No environment variables are required for basic functionality.

## WhatsApp Configuration

Update the WhatsApp number in `src/pages/Index.tsx`:

```typescript
const phoneNumber = "212691218840"; // Your WhatsApp number
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation with language toggle
│   ├── Hero.tsx        # Main landing section
│   ├── Catalog.tsx     # Book catalog
│   ├── Contact.tsx     # Contact form
│   ├── FAQ.tsx         # Frequently asked questions
│   ├── Footer.tsx      # Site footer
│   └── FloatingWhatsApp.tsx # Floating WhatsApp button
├── contexts/           # React contexts
│   └── LanguageContext.tsx # Language management
├── lib/                # Utilities and translations
│   ├── translations.ts # Multi-language content
│   └── utils.ts        # Helper functions
├── pages/              # Page components
└── assets/             # Images and static files
```

## License

Private project - All rights reserved.
